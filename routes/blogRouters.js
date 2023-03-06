const express = require ('express')
const router = express.Router()
const blog= require ('../controllers/blogControllers.js')
const {upload}= require('../middlewares/imageStorage')
const validation = require ('../validation/blog/blogValidation')

router.post("/blogAdd/:id",upload.single("blogImage"),validation.registerBlogValidation,blog.addBlog)
router.get("/bloglist",blog.blogList)
router.get("/blogdetail/:id",blog.blogDetails)
router.patch("/likes/:id",blog.blogLike)
router.get("/searching",blog.blogSearch)
router.patch("/edit/:id",blog.editBlog)
router.post("/myblogs/:_id",blog.myBlog)
router.delete("/delete/:id",blog.deleteBlog)

module.exports = router;