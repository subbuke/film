const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./UserModel");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("backend is running 🚀");
});

app.post("/create", (req, res) => {
  UserModel.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.status(500).json(err));
});

app.get("/data", (req, res) => {
    UserModel.find()
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Database connected ✅"))
  .catch(err => console.log(err));


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} 🔥`);
});