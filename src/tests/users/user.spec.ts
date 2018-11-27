import chai from 'chai'
import chaiHttp from 'chai-http'
import hostApp from '../../app';

chai.use(chaiHttp)

// describe("Create User", () => {
//   it("should create new user", async() => {
//     let postData: any = {
//       fullName : "Harry Dom",
//       email : "harry@test.com",
//       password : "test1234"
//     }

//     let response = await chai.request(hostApp).post("/users/create").send(postData);
//     console.log("USER CREATION TEST RESULT ", response.text)
//     chai.expect(response.status).to.eql(201)
//   })
// })

describe("Authenticate User", () => {
  it("should authenticate user", async () => {
    let postData: any = {
      email : "harry@test.com",
      password : "test1234"
    }

    let response = await chai.request(hostApp).post("/users/authenticate").send(postData);
    console.log("USER AUTHENTICATION TEST RESULT ", response.text)
    chai.expect(response.status).to.eql(200)
  })
})