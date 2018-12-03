import express from "express"
import bodyParserConfig from './bootstrap/bodyParserConfig'
import routeConfig from './bootstrap/routeConfig';
import mongoDBConfig from './bootstrap/mongoDbConfig';

class NodeExpressTsApp {
  constructor(){
    this.hostApp = express()
    this.bodyParserSetup()
    this.routeSetup()
    this.dbSetup()
  }

  public hostApp : express.Application;

  private bodyParserSetup(): void{
    bodyParserConfig(this.hostApp)
  }

  private routeSetup(): void{
    routeConfig(this.hostApp)
  }

  private dbSetup(){
    mongoDBConfig.dockerSetup()
    // mongoDBConfig.localSetup()
  }
}

let nodeApp = new NodeExpressTsApp()
export default nodeApp.hostApp