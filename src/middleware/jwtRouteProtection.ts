import jwt from 'jsonwebtoken'
import jwtKeys from '../keys/jwtSecret'
import {Request, Response, NextFunction} from 'express'

let tokenChecker = function(request : Request, response : Response, next : NextFunction){
  try {
    const token = request.body.token || request.query.token || request.headers.authorization
    const decodedToken = jwt.verify(token, jwtKeys.tokenSecret);
    next()
  }
  catch(error){
    let context = {
      message : `Auth Failed ${error}`,
      success : false
    }
    return response.status(401).json(context)
  }
}

export default tokenChecker