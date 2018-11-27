import mongoose from 'mongoose'

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

const UserSchema = new mongoose.Schema(schemaOptions)
const UserModelName = "User"

const UserModel = mongoose.model(UserModelName, UserSchema)
export default UserModel