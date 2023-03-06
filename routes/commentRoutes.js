const express = require ('express')
const router = express.Router()
const comment = require ('../controllers/commentControllers')


router.post("/commentAdd/:userId/:blogId",comment.addComment)

module.exports = router;