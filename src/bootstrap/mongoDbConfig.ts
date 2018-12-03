import DBKeys from '../keys/dbKeys'
import mongoose from 'mongoose'

let mongoDBLocalSetup = function(){
  mongoose.connect( DBKeys.mongoLocalUrl, {useNewUrlParser: true })
  .then( () => {
    console.log("Mongo DB Local Connection Successfull") 
  })
  .catch( err => {
    console.error("Mongo DB Error ", err) 
  })
}

let mongoDBDockerSetup = function(){
  mongoose.connect( DBKeys.mongoDockerURL, {useNewUrlParser: true })
  .then( () => {
    console.log("Mongo DB Docker Connection Successfull") 
  })
  .catch( err => {
    console.error("Mongo DB Error ", err) 
  })
}

const mongoDBSetup = {
  localSetup : mongoDBLocalSetup,
  dockerSetup : mongoDBDockerSetup
}

export default mongoDBSetup
