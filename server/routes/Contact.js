const express = require("express")
const router = express.Router()

/*
@desc Contact Us Route
@route POST /contact
*/
const { contactUsController } = require("../controllers/ContactUs")

router.post("/contact", contactUsController)

module.exports = router