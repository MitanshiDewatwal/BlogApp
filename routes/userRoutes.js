const express = require ('express')
const router = express.Router()
const user = require ('../controllers/userControllers.js')
const validation = require ('../validation/user/userValidation')
const {upload}= require('../middlewares/imageStorage')

router.post("/signUp",upload.single("profilePic"),validation.registerUserValidation,user.userSignUp)
router.post("/login",validation.loginUservalidation,user.userLogin)
router.post("/resetPassword",user.resetPasswordThroughEmail)
router.post("/passwordReset/:id/:token",user.userPasswordReset)
module.exports = router;