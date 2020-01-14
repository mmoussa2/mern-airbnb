const express = require("express");
const router = express.Router();
const ObjectId = require('mongodb').ObjectId
const User  = require('../../models/User')
const Property = require("../../models/Property");

router.post("/create", (req, res) => {
  const newProperty = new Property({
    owner_id: req.body.owner_id,
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    type: req.body.type,
    location: req.body.location,
    guests: req.body.guests,
    bedrooms: req.body.bedrooms,
    beds: req.body.beds,
    bathrooms: req.body.bathrooms,
    amenities: req.body.amenities,
    spaces: req.body.spaces,
    imageUrl: req.body.imageUrl,
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

router.get("/:id", (req, res) =>  { 

  Property.findById(req.params.id).then(
    property => {
      return res.json(property)}
  )
})

module.exports = router;