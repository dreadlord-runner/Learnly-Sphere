const mongoose = require("mongoose")

/*
@desc Define the Course Progress schema
@body courseID: ObjectId
@body userId: ObjectId
@body completedVideos: Array of SubSection IDs
@returns Course Progress Model
*/

const courseProgress = new mongoose.Schema({
  courseID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  completedVideos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubSection",
    },
  ],
})

module.exports = mongoose.model("courseProgress", courseProgress)