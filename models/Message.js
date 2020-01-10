const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  sender_id: { type: Schema.Types.ObjectId, required: true },
  receiver_id: { type: Schema.Types.ObjectId, required: true },
  body: { type: String, required: true },
  timestamp: { type: Date, required: true }
});

module.exports = Message = mongoose.model("Message", MessageSchema);