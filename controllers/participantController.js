const Participant = require("./../models/paricipantModel");
const APIFeatures = require("./../utils/APIFeatures");

exports.getAllParticipants = async (req, res) => {
  try {
    const participantsData = new APIFeatures(Participant.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const participants = await participantsData.query;
    res.status(200).json({
      status: "success",
      results: participants.length,
      data: { participants },
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err.message,
    });
  }
};

exports.createParticipant = async (req, res) => {
  try {
    const newParticipant = await Participant.create(req.body);
    res.status(201).json({
      status: "success",
      message: "New participant is created",
      data: { newParticipant },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getParticipant = async (req, res) => {
  try {
    const participant = await Participant.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: { participant },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
