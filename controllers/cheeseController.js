const express = require("express");
const router = express.Router();
const Cheese = require("../models/Cheese");

// index
router.get("/", async (req, res) => {
  res.json(await Cheese.find());
});

// delete
router.delete("/:id", async (req, res) => {
  res.json(await Cheese.findByIdAndDelete(req.params.id));
});

// update
router.put("/:id", async (req, res) => {
    res.json(await Cheese.findByIdAndUpdate(req.params.id, req.body, {new: true}));

})

// create
router.post("/", async (req, res) => {
  res.json(await Cheese.create(req.body));
});

// show
router.get("/:id", async (req, res) => {
  res.json(await Cheese.findById(req.params.id));
});

module.exports = router;
