const express = require ('express')
const router = express.Router()
const userRoutes = require ('./userRoutes')
const blogRouters = require('./blogRouters')
const commentRoutes = require ('./commentRoutes')

router.use('/user',userRoutes)
router.use('/blog',blogRouters)
router.use('/comment',commentRoutes)

module.exports=router;