import redis from 'redis'
import jwt from 'jsonwebtoken'
import createToken from '../../helperFunctions/createJWT'
import {Request, Response} from 'express'

// var redisDB = redis.createClient(6379, "localhost")
var redisDB = redis.createClient(6379, "redis")

let refreshJWT = function(request : Request, response : Response){

  let context : any = {
    success : false,
    message : ""
  }

  let refreshToken = request.headers.authorization || request.body.refreshToken || request.query.refreshToken

  if (!refreshToken){
    context.message = "Token Missing!"
    return response.status(404).json(context)
  }

  let tokenPayload : any = jwt.decode(refreshToken)
  let userId = tokenPayload ? tokenPayload.userId : null
  let recordName = ""

  if (userId== null){
    context.message = "INVALID AUTH TOKEN"
    return response.status(401).json(context)
  } else {
    recordName = `TOKEN_LIST_${userId}`
  }
  
  redisDB.hgetall(recordName, (err, data) => {
    try {
      if (refreshToken == data.refreshToken){
        context.success = true
        context.message = "Token Renewed"
        context.token = createToken(userId)

        const redisData = {
          "token" : `${context.token}`,
          "refreshToken" : `${data.refreshToken}`
        }

        redisDB.hmset(recordName, redisData)

        return response.status(200).json(context)
      } else {
        context.message = "INVALID REFRESH TOKEN"
        console.log("AUTH ERROR ", context.message)
        return response.status(401).json(context)
      }
    } catch(error){
      context.message = error
      console.log("AUTH ERROR ", context.message)
      return response.status(401).json(context)
    }
  })

}


export default refreshJWT