const express = require("express");
const router = express.Router();

const Reservation = require("../../models/Reservation");
const validateReservationInput = require("../../validations/reservations");


router.post("/create", (req, res) => {
 
  const { errors, isValid } = validateReservationInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const newReservation = new Reservation ({
    property_id: req.body.property_id,
    guest_id: req.body.guest_id,
    booking_id: req.body.booking_id,
    start_date: req.body.start_date,
    end_date: req.body.end_date,
    cost: req.body.cost
  });
 
  newReservation
    .save()
    .then(reservation => res.json(reservation))
    .catch(err => res.json(err));
});


//...........................check these if found in property routers.........................
//Cerulean Munoz
// router.get("/:id", (req, res) => {
//   Property.findOne({title: "Cerulean Munoz"}).then(  
//     property => res.json(property)
//   )
// })
//.......................................................


module.exports = router;