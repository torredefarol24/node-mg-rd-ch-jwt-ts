import express from "express"
import bodyParserConfig from './bootstrap/bodyParserConfig'
import routeConfig from './bootstrap/routeConfig';

class NodeExpressTsApp {
  constructor(){
    this.hostApp = express()
    this.bodyParserSetup()
    this.routeSetup()
  }

  public hostApp : express.Application;

  private bodyParserSetup(): void{
    bodyParserConfig(this.hostApp)
  }

  private routeSetup(): void{
    routeConfig(this.hostApp)
  }
}

let nodeApp = new NodeExpressTsApp()
export default nodeApp.hostApp