// Dependencies:
const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;

const app = express();

// Setting up express:
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Connection to the database:
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false
});

// routes:
// app.use(require("./routes/api.js"));

// Listener:
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});