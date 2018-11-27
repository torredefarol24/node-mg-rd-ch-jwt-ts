import hostApp from './app'

let port = 4000
let callback = function(){
  console.log("App running on", port)
}

hostApp.listen(port, callback)
