const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SearchSchema = new Schema({
  user_id: { type: Number, required: true },
  created_at: { type: Date, required: true },
  search: { type: String, required: true }
});

module.exports = Search = mongoose.model("Search", SearchSchema);