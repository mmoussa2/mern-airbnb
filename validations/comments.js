const Validator = require("validator");
const validText = require("./valid-text");

  module.exports = function validateCommentInput(data) {

  let errors = {};

  // data.user_id = validText(data.user_id) ? data.user_id : "";
  // data.property_id = validText(data.property_id) ? data.property_id : "";
  
  data.comment = validText(data.comment) ? data.comment : "";

  if(Validator.isEmpty(data.comment)) {
      errors.comment = 'comment field is required';
    }

  if (!Validator.isLength(data.comment, { min: 5, max: 200 })) {
    errors.name = "Comment must be between 5 and 200 characters";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};