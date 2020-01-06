const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// owner_id, cover_picture_id, title, description, location, price, guest_size, bedrooms, beds, baths, baths_type, bedrooms_type

const PropertySchema = new Schema({
  owner_id: { type: Number, required: true },
  cover_picture_id: { type: String, required: true },
  title: { type: String, required: true },
  // description: {type: Date, default: Date.now},
  description: { type: String, required: true },
  title: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: Number, required: true },
  guest_size: { type: Number, required: true },
  bedrooms: { type: Number, required: true },
  beds: { type: Number, required: true },
  baths: { type: Number, required: true },
  guest_size: { type: String, required: true },
  guest_size: { type: String, required: true }
});

module.exports = Property = mongoose.model("Property", PropertySchema);