const express = require("express");
const router = express.Router();
const Message = require("../../models/Message");

router.post("/create", (req, res) => {
  const currentDate = new Date();
  const newMessage = new Message({
    sender_id: req.body.sender_id,
    receiver_id: req.body.receiver_id,
    body: req.body.body,
    timestamp: currentDate
  });
  newMessage
    .save()
    .then(message => res.json(message))
    .catch(err => res.json(err));
});

router.get("/all", (req, res) => {
  Message.find()
    .then(messages => res.json(messages))
    .catch(err => res.json(err));
});

module.exports = router;