import {Router} from 'express'
import UserController from '../controllers/user/userController'

let userRouter: Router = Router()

userRouter.post("/", UserController.createNewUser)

export default userRouter
