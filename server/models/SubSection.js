const mongoose = require("mongoose");

/*
@desc Define the SubSection schema
@body title: String
@body timeDuration: String
@body description: String
@body videoUrl: String
@returns SubSection Model
*/

const SubSectionSchema = new mongoose.Schema({
	title: { type: String },
	timeDuration: { type: String },
	description: { type: String },
	videoUrl: { type: String },
});

module.exports = mongoose.model("SubSection", SubSectionSchema);