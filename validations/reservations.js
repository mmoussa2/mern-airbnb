//Reservations(property_id,guest_id, start_date, end_date, booking_id, cost)

const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateReservationInput(data) {
  let errors = {};

  // data.property_id = validText(data.property_id) ? data.property_id : "";
  // data.guest_id = validText(data.guest_id) ? data.guest_id : "";
  data.start_date = validText(data.start_date) ? data.start_date : "";
  data.end_date = validText(data.end_date) ? data.end_date : "";
  // data.booking_id = validText(data.booking_id) ? data.booking_id : "";
 
  // Object.keys(data).forEach(columnKey => {
  //   if (isNaN(data[columnKey]) &&  Validator.isEmpty(data[columnKey])) {
  //     errors[columnKey] = `${columnKey} field is required`;
  //   }
  // })

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