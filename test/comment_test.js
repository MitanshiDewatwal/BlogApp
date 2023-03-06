let server = require("../index");
let chaiHttp = require("chai-http");
var chai = require("chai");
const utils = require("../models/commentModelSchema");
let routes = require("../routes/commonRoutes")
chai.should();
chai.use(chaiHttp);

//add comment test cases ...............................................................
describe("POST/api/comment", () => {
    it("This test case is for adding a comment :", (done) => {
        const data = {
            blogComment: "very nice",
        };
        chai
            .request(server)
            .post("/comment/commentAdd/63ecd80eb1189f02d815b7d3/63f358cf2a2fafa61da1b65c")
            .send(data)
            .end((err, res) => {
                res.should.have.status(201);
                res.should.be.a("object");
                res.body.should.have.property("success").eq("success");
                res.body.should.have.property("message").eq("Comment added successfully");
                done();
            })
    })
})
