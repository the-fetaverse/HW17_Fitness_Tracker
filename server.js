// Dependencies:
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");

// Setting up express:
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(logger("dev"));

// Connection to the database:
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false
});

// routes:
// app.use(require("./routes/apiRoutes"));
app.use(require("./routes/htmlRoutes"));

// Listener:
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
