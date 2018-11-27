import DBKEys from '../keys/dbKeys'
import mongoose from 'mongoose'

let mongoDBSetup = function(){
  mongoose.connect( DBKEys.mongoLocalUrl, {useNewUrlParser: true })
  .then( () => console.log("Mongo DB Connection Success") )
  .catch( err => console.error("Mongo DB Error ", err) )
}

export default mongoDBSetup