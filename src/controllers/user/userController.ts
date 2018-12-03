import createUser from './create'
import authenticateUser from './authenticate'
import refreshJWT from './refreshToken'

const UserController = {
  createNewUser : createUser,
  loginUser : authenticateUser,
  refreshToken : refreshJWT
}

export default UserController