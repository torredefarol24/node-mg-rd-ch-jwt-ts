import redis from 'redis'
import jwt from 'jsonwebtoken'
import createToken from '../../helperFunctions/createJWT'

import {Request, Response} from 'express'
var redisDB = redis.createClient()

let refreshJWT = function(request : Request, response : Response){
  let refreshToken = request.headers.authorization || request.body.refreshToken || request.query.refreshToken

  let tokenPayload : any = jwt.decode(refreshToken)
  let userId = tokenPayload.userId
  
  let context : any = {
    success : false,
    message : ""
  }

  let recordName = `TOKEN_LIST_${userId}`

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