import jwt from 'jsonwebtoken'
import jwtSecretKey from '../keys/jwtSecret';

//5184000 = 1 month

let createRefreshToken = function(uid : any){
  const signOptions = {
    userId : uid
  }
  const tokenOptions = {
    expiresIn : 5184000
  }
  const refreshToken = jwt.sign(signOptions, jwtSecretKey.resfreshTokenSecret, tokenOptions)
  return refreshToken
}

export default createRefreshToken