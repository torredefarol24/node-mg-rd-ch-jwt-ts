import User from '../../mongo-models/user'
import {Request, Response} from 'express'
import bcrypt from 'bcrypt'
import createToken from '../../helperFunctions/createJWT'
import createRefreshToken from '../../helperFunctions/refreshToken'
import redis from 'redis'

// var redisDB = redis.createClient(6379, "localhost")
var redisDB = redis.createClient(6379, "redis")

let loginUser = function(request : Request, response : Response){
  let context:any = {
    message : "Route and Controller works ",
    success : false
  }

  if (!request.body.email || !request.body.password){
    context.message = "Values Missing from Request"
    console.error(context.message)
    return response.status(400).json(context)
  }

  let userFindOptions = {
    email : request.body.email
  }

  User.findOne(userFindOptions)
  .then(user => {
    if (user){
      bcrypt.compare(request.body.password, user.password)
      .then( result => {
        if (result == true){
          context.message = "Auth Successfull"
          context.success = true
          context.token = createToken(user._id)
          context.refreshToken = createRefreshToken(user._id)
          context.userId = user._id
          const recordName = `TOKEN_LIST_${user._id}`
          const redisData = {
            "token" : `${context.token}`,
            "refreshToken" : `${context.refreshToken}`
          }

          redisDB.hmset(recordName, redisData)
          return response.status(200).json(context)
        } else {
          context.message = "Auth Unsuccessfull"
          console.error(context.message)
          return response.status(403).json(context)
        }
      })
      .catch(err => {
        context.message = err
        console.error(context.message)
        return response.status(500).json(context)
      })

    } else {
      context.message = "User Doesn't Exist"
      console.error(context.message)
      return response.status(404).json(context)
    }
  })
  .catch( err => {
    context.message = err
    console.error(context.message)
    return response.status(500).json(context)
  })
}

export default loginUser