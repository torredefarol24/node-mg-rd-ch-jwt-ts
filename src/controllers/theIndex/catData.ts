import {Request, Response} from 'express'

let getAllCats = function(request : Request, response : Response){
  let cats = [
    {
      id : 1,
      name : "Henrietta"
    },
    {
      id : 2,
      name : "Mary"
    },
    {
      id : 3,
      name : "Jason"
    }
  ]

  let context = {
    success : true,
    data : cats
  }

  return response.status(200).json(context)
}

export default getAllCats