const express = require("express");
const router = express.Router();
const Player = require("../models/player");

//Get all players
router.get("/", async (req, res) => {
  try {
    const players = await Player.find();
    res.json(players);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//Get one player
router.get("/:id", (req, res) => {
  res.send(req.params.id);
});
//Create player
router.post("/", async (req, res) => {
  console.log(req.body);
  const player = new Player({
    name: req.body.name,
  });
  try {
    const newPlayer = await player.save();
    res.status(201).json(newPlayer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
