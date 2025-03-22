const mongoose = require("mongoose");

/*
@desc Define the Section schema
@body sectionName: String
@body subSection: Array of SubSection IDs
@returns Section Model
*/

// Define the Section schema
const sectionSchema = new mongoose.Schema({
	sectionName: {
		type: String,
	},
	subSection: [
		{
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "SubSection",
		},
	],
});

// Export the Section model
module.exports = mongoose.model("Section", sectionSchema);