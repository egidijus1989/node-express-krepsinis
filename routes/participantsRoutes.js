const express = require("express");
const router = express.Router();
const participantsController = require("../controllers/participantController");
const authController = require("./../controllers/authController");

router.route("/top-10-best").get(
  // participantsController.aliasTopParticipant,
  participantsController.getAllParticipants
);

router
  .route("/")
  .get(participantsController.getAllParticipants)
  .post(participantsController.createParticipant);

router.route("/:id/card").get(participantsController.getParticipant);

router
  .route("/team/:teamName/members")
  .get(participantsController.getParticipant);

router.route("/team/youngest:").get(participantsController.getParticipant);

module.exports = router;