import * as mongoose from 'mongoose'

const schemaOptions = {}
const UserSchema = new mongoose.Schema(schemaOptions)
const UserModelName = "User"

const UserModel = mongoose.model(UserModelName, UserSchema)
export default UserModel