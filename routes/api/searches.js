const express = require("express");
const router = express.Router();

const Search = require("../../models/Search");

router.post("/create", (req, res) => {
  const currentDate = new Date();

  const newSearch = new Search({
    user_id: req.body.user_id,
    created_at: currentDate,
    search: req.body.search
  });

  newSearch
    .save()
    .then(search => res.json(search))
    .catch(err => res.json(err));
});

router.get("/all", (req, res) => {
  Search.find()
    .then(searches => res.json(searches))
    .catch(err => res.json(err));
});

module.exports = router;
