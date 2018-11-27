import mongoose from 'mongoose'
import DBKeys from '../../keys/dbKeys'
import chai from 'chai'
import chaiHttp from 'chai-http'

chai.use(chaiHttp)

const descriptionText = "Mongo DB Connection"
const itConnectionText = "should connect to database"

describe(descriptionText, () => {
  it(itConnectionText, () =>{
    return mongoose.connect(DBKeys.mongoLocalUrl,{useNewUrlParser: true})
    .then( () => chai.expect(5).to.be.equal(5))
    .catch( err => chai.assert.fail(err) )
  })


})