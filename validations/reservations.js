//Reservations(property_id,guest_id, start_date, end_date, booking_id, cost)

const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateReservationInput(data) {
  let errors = {};

 
  data.start_date = validText(data.start_date) ? data.start_date : "";
  data.end_date = validText(data.end_date) ? data.end_date : "";
 

  if (Validator.isEmpty(data.start_date)) {
    errors.start_date = 'start date field is required';
   }

  if (Validator.isEmpty(data.end_date)) {
    errors.end_date = 'end date field is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};