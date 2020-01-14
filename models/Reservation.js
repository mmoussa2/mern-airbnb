const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Reservations(property_id, start_date, end_date, booking_id, guest_id, cost)

const ReservationSchema = new Schema({
  property_id: { type: Schema.Types.ObjectId, required: true },
  guest_id: { type: Schema.Types.ObjectId, required: true },
  booking_id: { type: String, required: true },
  start_date: { type: Date, required: true },
  end_date: { type: Date, required: true },
  cost: { type: Number, required: true }
});

module.exports = Reservation = mongoose.model("Reservation", ReservationSchema);