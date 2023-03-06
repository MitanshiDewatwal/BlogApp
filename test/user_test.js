let server = require("../index");
let chaiHttp = require("chai-http");
var chai = require("chai");
const utils = require("../models/userModelSchema.js");
let routes = require("../routes/userRoutes.js")
chai.should();
chai.use(chaiHttp);

//2nd API test case
describe("POST/api/user", () => {
    it("It  should return login user detail :", (done) => {
        const data = {
            userEmail: "nidhi@gmail.com",
            password: "@#$%ABCDEabcde123456",
        };
        chai
            .request(server)
            .post("/user/login")
            .send(data)
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.a("object");
                res.body.should.have.property("success").eq("success");
                res.body.should.have.property("message").eq("Login Success");
                res.body.should.have.property("token");
                done();
            })
    })
})
it("It  should return error message:", (done) => {
    const data = {
        userEmail: "nidi@gmail.com",
        password: "@#$%ABCDEabcde123456"
    };
    chai
        .request(server)
        .post("/user/login")
        .send(data)
        .end((err, res) => {
            res.should.have.status(400);
            res.body.should.have.property("success").eq("failure");
            res.body.should.have.property("message").eq(" you are not a register User");

            done();
        })
})

it("It  should return Email or Password Error Message:", (done) => {
    const data = {
        userEmail: "nidhi@gmail.com",
        password: "@#$%ABCDEabcde123"
    };
    chai
        .request(server)
        .post("/user/login")
        .send(data)
        .end((err, res) => {
            res.should.have.status(400);
            res.body.should.have.property("success").eq("failure");
            res.body.should.have.property("message").eq("Email or Password is not valid");

            done();
        })
})

//signUp API test cases .............................................................................
describe("POST/api/user", () => {
    it("It  should return  user  signUp detail :", (done) => {
        const data = {
            userName: "Nidhi",
            userEmail: "miitaanshiiii@gmail.com",
            password: "@#$%ABCDEabcde123456",
            city: "dewas",
            phoneNo: "1818121818"
        };
        chai
            .request(server)
            .post("/user/signUp")
            .set("Content-Type", "application/x-www-form-urlencoded")
            .field(data)
            .attach("profilePic", "/Users/Dell/OneDrive/Desktop/3image.jpg", "3image.jpg")
            .send(data)
            .end((err, res) => {
                res.should.have.status(201);
                res.should.be.a("object");
                res.body.should.have.property("success").eq("success");
                res.body.should.have.property("message").eq("The user register successfully");
                done();
            })
    })
})

describe("POST/api/user", () => {
    it("It  should  give error in signUp detail :", (done) => {
        const data = {
            userName: "Nidhi",
            userEmail: "mmitanshiiiiddewatwall@gmail.com",
            password: "@#$%ABCDEabcde123456",
            city: "dewas",
            phoneNo: "1818121818"
        };
        chai
            .request(server)
            .post("/user/signUp")
            .set("Content-Type", "application/x-www-form-urlencoded")
            .field(data)
            .attach("profilePic", "/Users/Dell/OneDrive/Desktop/3image.jpg", "3image.jpg")
            .send(data)
            .end((err, res) => {
                res.should.have.status(409);
                res.should.be.a("object");
                res.body.should.have.property("success").eq("failure");
                res.body.should.have.property("message").eq("This email is already exists");
                done();
            })
    })
})



//send email test API.........................................................................
describe("POST/api/user", () => {
    it("It  should sends mail to us :", (done) => {
        const data = {
            userEmail: "mitanshidewatwal@gmail.com"
        };
        chai
            .request(server)
            .post("/user/resetPassword")
            .send(data)
            .end((err, res) => {
                res.should.have.status(201);
                res.should.be.a("object");
                res.body.should.have.property("success").eq("success");
                res.body.should.have.property("message").eq("Email send to user successfully");
                res.body.should.have.property("token");
                done();
            })
    })
})

describe("POST/api/user", () => {
    it("It  should give error in sending mail to us :", (done) => {
        const data = {
            userEmail: "mitanshdewatwal@gmail.com"
        };
        chai
            .request(server)
            .post("/user/resetPassword")
            .send(data)
            .end((err, res) => {
                res.should.have.status(403);
                res.should.be.a("object");
                res.body.should.have.property("success").eq("failure");
                res.body.should.have.property("message").eq("Email user is not found");
                done();
            })
    })
})

//Reset  password .........................................................................

describe("POST/api/user", () => {
    it("It  should reset our password:", (done) => {
        const data = {
            newPassword: "mitanshi12345",
            confirmPassword: "mitanshi12345"
        };
        chai
            .request(server)
            .post("/user/passwordReset/63ee5669997c3f3deb98fc55/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2M2VlNTY2OTk5N2MzZjNkZWI5OGZjNTUiLCJpYXQiOjE2Nzc2NDY4ODcsImV4cCI6MTY3ODA3ODg4N30.dcf3uonbUYzcgYF-XyVzZKIdM-G1iurly7rDNZ_wMfo")
            .send(data)
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.a("object");
                res.body.should.have.property("success").eq("success");
                res.body.should.have.property("message").eq("password successfully update");
                done();

            })
    })
})


describe("POST/api/user", () => {
    it("It  should give error in rest password and tells password and confirm password is not match:", (done) => {
        const data = {
            newPassword: "mitanshi12345",
            confirmPassword: "mitansh12345"
        };
        chai
            .request(server)
            .post("/user/passwordReset/63ee5669997c3f3deb98fc55/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2M2VlNTY2OTk5N2MzZjNkZWI5OGZjNTUiLCJpYXQiOjE2Nzc2NDY4ODcsImV4cCI6MTY3ODA3ODg4N30.dcf3uonbUYzcgYF-XyVzZKIdM-G1iurly7rDNZ_wMfo")
            .send(data)
            .end((err, res) => {
                res.should.have.status(403);
                res.should.be.a("object");
                res.body.should.have.property("success").eq("failure");
                res.body.should.have.property("message").eq("password and Confirmpassword is not match");
                done();

            })
    })
})
