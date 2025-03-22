const Razorpay = require("razorpay");

/*
@desc Create a new instance of the Razorpay SDK
@body None
@parms key_id: String
@parms key_secret: String
@returns Razorpay Instance
*/

exports.instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY,
    key_secret: process.env.RAZORPAY_SECRET,
});