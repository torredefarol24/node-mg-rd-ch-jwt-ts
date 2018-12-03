import jwt from 'jsonwebtoken'
import jwtSecretKey from '../keys/jwtSecret';

//172800 = 2 Days

let createToken = function(uid: any){
  const signOptions = {
    userId : uid
  }
  const tokenOptions = {
    expiresIn : 172800
    // expiresIn : 10
  }
  const token = jwt.sign(signOptions, jwtSecretKey.tokenSecret, tokenOptions)
  return token
}

export default createToken