const express = require("express");
const router = express.Router();

const Property = require("../../models/Property");

router.post("/create", (req, res) => {
  // owner_id, cover_picture_id, title, description, location, price, guest_size, bedrooms, beds, baths, baths_type, bedrooms_type
  const newProperty = new Property({
    owner_id: req.body.owner_id,
    cover_picture_id: req.body.cover_picture_id,
    title: req.body.title,
    description: req.body.description,
    location: req.body.location,
    price: req.body.price,
    guest_size: req.body.guest_size,
    bedrooms: req.body.bedrooms,
    beds: req.body.beds,
    baths: req.body.baths,
    baths_type: req.body.baths_type,
    bedrooms_type: req.body.bedrooms_type
  });
  newProperty
    .save()
    .then(property => res.json(property))
    .catch(err => res.json(err));
});

router.get("/all", (req, res) => {
  Property.find()
    .then(properties => res.json(properties))
    .catch(err => res.json(err));
});



module.exports = router;