const router = require("express").Router();
const Workout = require("../models/workoutModel.js");

app.get("/", function (req, res) {
    res.sendFile("index.html");
});