import mongoose from 'mongoose'
import redis from 'redis'
import DBKeys from '../../keys/dbKeys'
import chai from 'chai'
import chaiHttp from 'chai-http'

chai.use(chaiHttp)

describe("Mongo DB Connection", () => {
  it("should connect to mongo database", () =>{
    return mongoose.connect(DBKeys.mongoLocalUrl,{useNewUrlParser: true})
    .then( () => chai.expect(5).to.be.equal(5))
    .catch( err => chai.assert.fail(err) )
  })
})

describe("Redis DB COnnection", () => {
  it("should connect to Redis DB", () => {
    var client = redis.createClient()
    client.on('connect', (err) => {
      if (err){
        chai.assert.fail(err)
      } else {
        chai.expect(5).to.equal(5)
      }
    })
  })
})