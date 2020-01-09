const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// owner_id, cover_picture_id, title, description, location, price, guest_size, bedrooms, beds, baths, baths_type, bedrooms_type

const PropertySchema = new Schema({
  owner_id: { type: Schema.Types.ObjectId, required: true },
  cover_picture_id: { type: Schema.Types.ObjectId, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  type: { type: String, required: true },
  location: { type: String, required: true },
  guests: { type: Number, required: true },
  bedrooms: { type: Number, required: true },
  beds: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  amenities: { type: Array },
  spaces: { type: Array },
  images: { type: Array },
});

module.exports = Property = mongoose.model("Property", PropertySchema);