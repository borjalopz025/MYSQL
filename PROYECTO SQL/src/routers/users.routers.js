const {Router} = require('express');
const router = Router();
const userRouter = require("../controller/user.controller")

router.post('/user' , userRouter.postRegister)

router.post('/user2' ,userRouter.postLogin)

module.exports = router;