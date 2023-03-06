const user = require("../models/userModelSchema");
const { string } = require("joi");
const jwt = require("jsonwebtoken");
const checkUserAuth = async (req, res, next) => {
    let token;
    const { authorization } = req.headers;
    if (authorization && authorization.startsWith("Bearer")) {
        try {
            token = authorization.split(" ")[1];
            const { userId } = jwt.verify(token, process.env.jwt_secretKey);
            req.user = await user.findById(userId).select('-password');
            next()
        } catch (err) {
            res.status(401).send({ status: "failed", message: "authenticaton failed ,unauthorized user" + err.message });
        }
    }
    if (!token) {
        res.status(401).send({ "message": "the user is unauthorized no token" })
    }
}

module.exports = { checkUserAuth }