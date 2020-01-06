// owner_id, cover_picture_id, title, description, location, price, guest_size, bedrooms, beds, baths, baths_type, bedrooms_type

const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.owner_id = validText(data.owner_id) ? data.owner_id : "";
  
  data.cover_picture_id = validText(data.cover_picture_id) ? data.cover_picture_id : "";
  // points to images category

  data.title = validText(data.title) ? data.title : "";
  data.description = validText(data.description) ? data.description : "";
  data.location = validText(data.location) ? data.location : "";
  // data.price = validText(data.price) ? data.price : "";
  // data.guest_size = validText(data.guest_size) ? data.guest_size : "";
  // data.bedrooms = validText(data.bedrooms) ? data.bedrooms : "";
  // data.beds = validText(data.beds) ? data.beds : "";
  // data.baths = validText(data.baths) ? data.baths : "";
  data.baths_type = validText(data.baths_type) ? data.baths_type : "";
  data.bedrooms_type = validText(data.bedrooms_type) ? data.bedrooms_type : "";

  Object.keys(data).forEach(columnKey => {
    if (Validator.isEmpty(data.columnKey)) {
      errors.columnKey = `${columnKey} field is required`;
    }
  })

  if (!Validator.isLength(data.title, { min: 5, max: 18 })) {
    errors.handle = "Title must be between 5 and 18 characters";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};