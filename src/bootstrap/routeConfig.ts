import IndexRouter from '../routes/indexRouter'
import UserRouter from '../routes/userRouter';

let routeSetup = function(appInstance: any): void{
  appInstance.use("/index", IndexRouter)
  appInstance.use("/users", UserRouter)
}

export default routeSetup
