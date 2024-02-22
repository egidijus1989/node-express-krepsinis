const mongoose = require("mongoose");

const participantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Participant must have a name"],
    minLength: [2, "Name should contain at least two characters!"],
    trim: true,
    match: /^[a-zA-Z]+$/,
  },
  lastname: {
    type: String,
    required: [true, "Participant must have a lastname"],
    minLength: [2, "Lastname should contain at least two characters!"],
    trim: true,
    match: /^[a-zA-Z]+$/,
  },
  team: {
    type: String,
    required: [true, "Participant must have a team"],
    trim: true,
  },
  age: {
    type: Number,
    required: [true, "Participant must have a team"],
    min: 18,
    max: 40,
  },
  ranking: {
    type: String,
    required: [true, "Participant must have rating"],
    enum: {
      values: ["1", "2", "3", "4", "5"],
    },
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

const Participant = mongoose.model("Participant", participantSchema);

module.exports = Participant;
