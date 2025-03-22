const mongoose = require("mongoose");

/*
@desc Define the Category schema
@body name: String
@body description: String
@body courses: Array of Course IDs
@returns Category Model
*/

// Define the Tags schema
const categorySchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	description: { type: String },
	courses: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Course",
		},
	],
});

// Export the Tags model
module.exports = mongoose.model("Category", categorySchema);