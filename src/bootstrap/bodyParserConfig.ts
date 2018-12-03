import * as bodyParser from 'body-parser'

function bodyParserSetup(appInstance : any){
  appInstance.use(bodyParser.json())
  appInstance.use(bodyParser.urlencoded({ extended : true }))
}

export default bodyParserSetup