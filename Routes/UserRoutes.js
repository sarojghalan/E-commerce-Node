const express = require('express');
const router = express.Router();
const { registerUser,loginUser,verifyOtp} = require('../Controller/userController')
const Authenticate = require('../Middleware/Authenticate')

router.route('/registerUser').post(registerUser);
router.route('/loginUser').post(loginUser);
router.route('/verify-otp').post(verifyOtp);
router.route('/dashboard').get(Authenticate,(req,res) => {
    const {email} = req.user;
    res.send(email)
})

module.exports = router;  