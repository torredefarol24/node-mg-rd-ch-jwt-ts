import mongoose from 'mongoose'
import UserSchema from '../mongo-schemas/user'
import {Document} from 'mongoose';

interface UserInterface{
  fullName: string,
  email: string,
  password: string
}

interface UserMongoose_Interface extends UserInterface, Document {}

const UserModelName = "User"
mongoose.models = {}
const UserModel = mongoose.model<UserMongoose_Interface>(UserModelName, UserSchema)

export default UserModel