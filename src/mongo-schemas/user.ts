import mongoose from 'mongoose'
var Schema = mongoose.Schema;

const schemaOptions = {
  firstName : {
    type : String
  },
  email : {
    type : String,
    unique : true
  },
  password : {
    type : String
  },
  created_at : {
    type : Date,
    default : Date.now
  }
}

const UserSchema = new Schema(schemaOptions)
export default UserSchema