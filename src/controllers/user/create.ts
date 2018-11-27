import User from '../../mongo-models/user'
import {Request, Response} from 'express'
import bcrypt from 'bcrypt'

const saltRounds = 10;

let createUser = function(request : Request, response : Response){
  let context:any = {
    user : null,
    message : "Route and Controller works ",
    success : false
  }

  if (!request.body.fullName || !request.body.email || !request.body.password){
    context.message = "Values Missing from Request"
    return response.status(400).json(context)
  }


  let userFindOptions = {
    where : {
      email : request.body.email
    }
  }

  let newUser:any= {
    fullName : request.body.fullName,
    email : request.body.email
  }

  User.findOne(userFindOptions)
  .then(user => {
    if (user){
      context.message = "Email already taken"
      return response.status(401).json(context)
    } else {

      bcrypt.hash(request.body.password, saltRounds)
      .then( hashedPass => {

        newUser.password = hashedPass
        User.create(newUser)
        .then(user => {
          context.user = user;
          context.message = "User Created"
          context.success = true
          return response.status(201).json(context)
        })
        .catch(err => {
          context.message = err
          return response.status(500).json(context)
        })

      })
      .catch(err => {
        context.message = err
        return response.status(500).json(context)
      })
      
    }
    
  })
  .catch( err => {
    context.message = err
    return response.status(500).json(context)
  })

}

export default createUser