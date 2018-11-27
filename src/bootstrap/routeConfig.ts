import IndexRouter from '../routes/indexRouter'

let routeSetup = function(appInstance: any): void{
  appInstance.use("/index", IndexRouter)
}

export default routeSetup
