const mongoose = require('mongoose')

const blogModelSchema = new mongoose.Schema({
    blogTitle: {
        type: String,
        required: true,
    },
    blogDescription: {
        type: String,
        required: true,
    },
    blogLikes: {
        type: String,
        required : true,
        default : 0
        
      
    },
    blogImage: {
        type: String,
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        //required: true,
        ref: 'user'
    },
    isActive: {
        type: Boolean,
        required: true,
        default: true,
    },
})
blogModelSchema.set('timestamps', true)
module.exports = mongoose.model('blog', blogModelSchema)