const blogModelSchema = require('../models/blogModelSchema')
const userModelSchema = require('../models/userModelSchema')
const commentModelSchema = require ('../models/commentModelSchema')

//1st API addBlog
const addBlog= async (req,res) =>{
    const id = req.params.userId;
    try{
        const blogAdd = await new blogModelSchema(req.body)
        const filePath=`/uploads/${req.file.filename}`;
       blogAdd.blogImage= filePath;
        try{
            const blog = await blogAdd.save();
            res.status(201).json({
                success:"success",
                message:"Blog post successfully",
            })
        }catch(err){
            res.status(400).json({
                success:"failure",
                message:"Error occur"+err.message,
            });
        }
    }catch(err){
        res.status(400).json({
            success:"failure",
            message:"Error occur"+err.message,
        });
    }
}
//API 2nd of blog list
const blogList = async (req,res)=>{
    try{
        const blogList = await blogModelSchema.find();
        res.status(200).json({
            success:"success",
            message:"Blog List are : ",
            data: blogList,
        });

    }catch(err){
        res.status(400).json({
            success:"failure",
            message:"Error occur "+err.message
        });
    }
}
//API 3rd of blog details
const blogDetails = async (req,res) =>{
    const id=req.params.id;
    try{
        const blogDetail = await commentModelSchema.findOne({blogId:req.params.id})
       
        .populate({
            path:"userId",
            select:"userName profilePic city"
        }).populate({
            path:"blogId",
            
        });
        
        res.status(200).json({
            success:"success",
            blogDetail: blogDetail,
        })
    }catch(err){
        res.status(400).json({
            success:"success",
            message:"Error occur "+err.message
        });
    }
}
//4th blog  like API..................................................................
const blogLike = async (req, res) => {
    const id = req.params.id
    const {blogLikes}=req.body
    try {
        const likes = await blogModelSchema.findById(id)
        
        if (blogLikes === "true") {
            await likes.updateOne({$set:{blogLikes: ++likes.blogLikes}})
            res.status(202).json({
                success: "success",
                message: "You like a blog",
                likes : likes.blogLikes
            })
        } else {
            await likes.updateOne({$set:{blogLikes: --likes.blogLikes}})
            res.status(202).json({
                success: "success",
                message: "You unliked the blog",
                likes:likes.blogLikes
            })
        }
    } catch (err) {
        res.status(400).json({
            success: "failure",
            error: err.message
        })
    }
}

const blogSearch = async (req,res)=>{
    const blogTitle = req.body.blogTitle
    try{
        const query = {blogTitle : {$regex: blogTitle,$options: "i"}}
        const searchData = await blogModelSchema.find(query)
        if(searchData){
        res.status(200).json({
            success : "success",
            message: "Here is the blog by title",
            blogs: searchData,
        })
    }else{
        res.status(400).json({
            success : "failure",
            message : "not found blog by this title"
        })
    }
    }catch(err){
        res.status(500).json({
        success : "failure",
        message : err.message
    });
    }
}

const myBlog = async (req,res)=>{
    const _id =req.params.id;
    try{
        const myBlogs = await blogModelSchema.find({userId : _id})
        .populate({
            path:"userId",
            select:"userName blogImage "
        });
        
        res.status(200).json({
            success: "success",
            message : "Here is the blog",
            data: myBlogs,
        })
    }catch(err){
        res.status(400).json({
            success:"failure",
            message:"Error occur "+err.message
        });
    }
}

const editBlog = async (req, res) => {
    const id = req.params.id;
    try {
        const updateBlog = await blogModelSchema.findByIdAndUpdate(id, { $set: req.body });
        updateBlog.save();
        res.status(201).json({
            success: "success",
            message: "Thanku for your blog.Your blog edited successfully"
        });
    } catch (err) {
        res.status(400).json({
            success: "failure",
            message: "error occur" + err.message
        });
    }
}

//delete blog api

const deleteBlog = async (req, res) => {
    const id = req.params.id;
    try {
        const deleteBlog = await blogModelSchema.findByIdAndDelete(id, { $set: req.body });
        res.status(200).json({
            success: "success",
            message: "Your blog successfully deleted"
        })
    } catch (err) {
        res.status(400).json({
            success: "failure",
            message: err.message
        })
    }
}

module.exports ={
    addBlog,
    blogList,
    blogDetails,
    blogLike,
    blogSearch,
    editBlog,
    myBlog,
    deleteBlog
}