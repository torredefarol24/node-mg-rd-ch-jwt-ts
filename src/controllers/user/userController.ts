import createUser from './create'
import authenticateUser from './authenticate'

const UserController = {
  createNewUser : createUser,
  loginUser : authenticateUser
}

export default UserController