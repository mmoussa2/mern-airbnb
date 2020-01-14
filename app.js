<<<<<<< HEAD
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");

const users = require("./routes/api/users");
const properties = require("./routes/api/properties");
const searches = require("./routes/api/searches");
const reservations = require("./routes/api/reservations");
const comments= require("./routes/api/comments");

const app = express();
const db = require("./config/keys").mongoURI;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/users", users);
app.use("/api/properties", properties);
app.use("/api/searches", searches);
app.use("/api/reservations", reservations);
app.use("/api/comments",comments);

app.use(passport.initialize());
require("./config/passport")(passport);

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
=======
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");
const cors = require("cors");

const users = require("./routes/api/users");
const properties = require("./routes/api/properties");
const searches = require("./routes/api/searches");

const fileRoutes = require("./routes/api/file-upload");
const messages = require("./routes/api/messages");

const app = express();
const db = require("./config/keys").mongoURI;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/users", users);
app.use("/api/properties", properties);
app.use("/api/searches", searches);
app.use("/api/images", fileRoutes);
app.use("/api/messages", messages);

app.use(passport.initialize());
require("./config/passport")(passport);

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
>>>>>>> 8f35bed1cd805b2b1eb6e79e4f2b3dc238274946
