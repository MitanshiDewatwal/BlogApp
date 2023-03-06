const joi = require("joi")

const Schema = {
    registerBlog: joi.object({
        blogTitle: joi.string().max(20).required(),
        blogDescription: joi.string().required(),
        blogLikes :joi.string().required(),
    }).unknown(true), 
       
    
}

module.exports=Schema;