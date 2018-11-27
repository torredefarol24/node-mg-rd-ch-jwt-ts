import {Request, Response} from "express"

let sayHey = function(request : Request, response : Response){
  let context = {
    message : "App Works"
  }
  return response.status(200).json(context)
}

export default sayHey