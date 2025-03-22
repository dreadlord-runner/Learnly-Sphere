// Import the required modules
const express = require("express")
const router = express.Router()

/*
@desc Payment Routes
@route POST /capturePayment
@route POST /verifyPayment
@route POST /sendPaymentSuccessEmail
*/

const { capturePayment, verifyPayment, sendPaymentSuccessEmail } = require("../controllers/Payments")
const { auth, isInstructor, isStudent, isAdmin } = require("../middlewares/auth")
router.post("/capturePayment", auth, isStudent, capturePayment)
router.post("/verifyPayment", auth, isStudent, verifyPayment)
router.post("/sendPaymentSuccessEmail", auth, isStudent, sendPaymentSuccessEmail);

module.exports = router