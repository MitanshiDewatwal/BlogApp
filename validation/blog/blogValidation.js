const { default: common } = require("joi/lib/common")
const keys = require("joi/lib/types/keys")
const { join } = require("path")
const blog = require("./blogSchema")

module.exports = {
    registerBlogValidation: async (req, res, next) => {
        const value = await blog.registerBlog.validate(req.body, { abortEarly: false })
        if (value.error) {
            res.json({
                success: 0,
                message: value.error.details[0].message
            })
        } else {
            next()
        }
    },

}