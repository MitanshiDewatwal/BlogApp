let server = require("../index");
let chaiHttp = require("chai-http");
var chai = require("chai");
const utils = require("../models/blogModelSchema.js");
let routes = require("../routes/blogRouters.js")
chai.should();
chai.use(chaiHttp);
//blog likes test case..................................................
describe("PATCH/api/blog", () => {
    it("It  should gives  add likes in our project :", (done) => {
        const data = {
            blogLikes: "true"
        };
        chai
            .request(server)
            .patch("/blog/likes/63f35c9877f5a497c014b0f2")
            .send(data)
            .end((err, res) => {
                res.should.have.status(202);
                res.should.be.a("object");
                res.body.should.have.property("success").eq("success");
                res.body.should.have.property("message").eq("You like a blog");
                //res.body.should.have.property("likes").eq("7");
                done();
            })
    })
})
describe("PATCH/api/blog", () => {
    it("It  should gives  unlikes in our project :", (done) => {
        const data = {
            blogLikes: "false"
        };
        chai
            .request(server)
            .patch("/blog/likes/63f35c9877f5a497c014b0f2")
            .send(data)
            .end((err, res) => {
                res.should.have.status(202);
                res.should.be.a("object");
                res.body.should.have.property("success").eq("success");
                res.body.should.have.property("message").eq("You unliked the blog");
                //res.body.should.have.property("likes").eq("7");
                done();
            })
    })
})

//add blog test cases ...............................................................
describe("POST/api/blog", () => {
    it("This test case is for adding a blog :", (done) => {
        const data = {
            blogTitle: "My Diary",
            blogDescription: "here is the story of a enginner hiii",
            blogLikes: "5"
        };
        chai
            .request(server)
            .post("/blog/blogAdd/63ecd80eb1189f02d815b7d3")
            .set("Content-Type", "application/x-www-form-urlencoded")
            .field(data)
            .attach("blogImage", "/Users/Dell/OneDrive/Desktop/3image.jpg", "3image.jpg")
            .send(data)
            .end((err, res) => {
                res.should.have.status(201);
                res.should.be.a("object");
                res.body.should.have.property("success").eq("success");
                res.body.should.have.property("message").eq("Blog post successfully");
                done();
            })
    })
})

// //blog list test case..........................
describe("GET/api/blog", () => {
    it("This test case is showing blog list :", (done) => {
        const data = {

        };
        chai
            .request(server)
            .get("/blog/bloglist")
            .send(data)
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.a("object");
                res.body.should.have.property("success").eq("success");
                res.body.should.have.property("message").eq("Blog List are : ");
                done();
            })
    })
})

// search blog api................................................................
describe("GET/api/blog", () => {
    it("This test case is for searching a blog by title name:", (done) => {
        const data = {
            blogTitle: "m"
        };
        chai
            .request(server)
            .get("/blog/searching")
            .send(data)
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.a("object");
                res.body.should.have.property("success").eq("success");
                res.body.should.have.property("message").eq("Here is the blog by title");
                done();
            })
    })
})

//editing blog test cases....................................................................
describe("PATCH/api/blog", () => {
    it("This test case is for editing a blog:", (done) => {
        const data = {

            blogTitle: "Mitanshi",
            blogLikes: "6"
        };
        chai
            .request(server)
            .patch("/blog/edit/63f89c1a3fe9f3ca770905a8")
            .send(data)
            .end((err, res) => {
                res.should.have.status(201);
                res.should.be.a("object");
                res.body.should.have.property("success").eq("success");
                res.body.should.have.property("message").eq("Thanku for your blog.Your blog edited successfully");
                done();
            })
    })
})

//delete blog test cases..........................................................................
describe("DELETE/api/blog", () => {
    it("This test case is for deleting a blog:", (done) => {
        const data = {

        };
        chai
            .request(server)
            .delete("/blog/delete/63fcaf8d3ac01136b7920524")
            .send(data)
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.a("object");
                res.body.should.have.property("success").eq("success");
                res.body.should.have.property("message").eq("Your blog successfully deleted");
                done();
            })
    })
})

//My blog api test cases..............................................................................
describe("POST/api/blog", () => {
    it("This test case is for showing my blog:", (done) => {
        const data = {

        };
        chai
            .request(server)
            .post("/blog/myblogs/63f755046f5b63a1e08fc5bf")
            .send(data)
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.a("object");
                res.body.should.have.property("success").eq("success");
                res.body.should.have.property("message").eq("Here is the blog");
                done();
            })
    })
})

