import chai from 'chai'
import chaiHttp from 'chai-http'
import hostApp from '../../app';

chai.use(chaiHttp)

describe("Create User", () => {
  it("should create new user", async() => {
    let postData: any = {
      fullName : "Harry Dom",
      email : "harry@test.com",
      password : "test1234"
    }

    let response = await chai.request(hostApp).post("/users").send(postData);
    console.log("TESTING SUITE", response.text)
    chai.expect(response.status).to.eql(201)
  })
})