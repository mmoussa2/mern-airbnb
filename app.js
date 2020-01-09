const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require("path");

const users = require("./routes/api/users");
const properties = require("./routes/api/properties");
const reservation = require("./routes/api/reservation");
const searches = require("./routes/api/searches");

const app = express();
const db = require('./config/keys').mongoURI;

<<<<<<< HEAD
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));
=======
if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}
>>>>>>> 98177175de7d95d3101ab4f120e5729389e070ca

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/users", users);
app.use("/api/properties", properties);
app.use("/api/reservation", reservation);
app.use("/api/searches", searches);

app.use(passport.initialize());
require('./config/passport')(passport);





const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));