import mongoose from 'mongoose'
import redis from 'redis'
import DBKeys from '../../keys/dbKeys'
import chai from 'chai'
import chaiHttp from 'chai-http'

chai.use(chaiHttp)

describe("Mongo DB Local Connection", () => {
  it("should connect to localhost mongo database", () =>{
    return mongoose.connect(DBKeys.mongoLocalUrl,{useNewUrlParser: true})
    .then( () => chai.expect(5).to.be.equal(5))
    .catch( err => chai.assert.fail(err) )
  })
})

describe("Mongo DB Docker Connection", () => {
  it("should connect to Docker Container mongo database", () =>{
    return mongoose.connect(DBKeys.mongoDockerURL,{useNewUrlParser: true})
    .then( () => chai.expect(5).to.be.equal(5))
    .catch( err => chai.assert.fail(err) )
  })
})

describe("Redis DB Local Connection", () => {
  it("should connect to Local Redis DB", () => {
    var redisDB = redis.createClient()
    
    redisDB.on('connect', (err) => {
      if (err){
        chai.assert.fail(err)
      } else {
        chai.expect(5).to.equal(5)
      }
    })
  })
})

describe("Redis DB Docker Connection", () => {
  it("should connect to Docker Container Redis DB", () => {
    var redisDB = redis.createClient(6379, "redis")
    redisDB.on('connect', (err) => {
      if (err){
        chai.assert.fail(err)
      } else {
        chai.expect(5).to.equal(5)
      }
    })
  })
})