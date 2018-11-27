import {Router} from 'express';
import IndexController from '../controllers/theIndex/theIndexController'

let IndexRouter : Router = Router()

IndexRouter.get("/", IndexController.sayHello )

export default IndexRouter