const { default: common } = require("joi/lib/common")
const keys = require("joi/lib/types/keys")
const { join } = require("path")
const user = require("./userSchema")

module.exports = {
    registerUserValidation: async (req, res, next) => {
        const value = await user.registerUser.validate(req.body, { abortEarly: false })
        if (value.error) {
            res.json({
                success: 0,
                message: value.error.details[0].message
            })
        } else {
            next()
        }
    },

    loginUservalidation: async (req, res, next) => {
        console.log("ok")
        const value = await user.loginUser.validate(req.body, { abortEarly: false })
        console.log(value)
        if (value.error) {
            res.json({
                success: 0,
                message: value.error.details[0].message
            })
        } else {
            next()
        }
    }
}
