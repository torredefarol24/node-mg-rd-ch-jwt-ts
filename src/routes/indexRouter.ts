import {Router} from 'express';
import IndexController from '../controllers/theIndex/theIndexController'
import jwtRouteChecker from '../middleware/jwtRouteProtection';

let IndexRouter : Router = Router()

IndexRouter.get("/", IndexController.sayHello )
IndexRouter.get("/dummy/cats", jwtRouteChecker, IndexController.getProtectedCatData)

export default IndexRouter