const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();

app.use(cors());
app.use(express.json());

const FILE = "database.json";

if (!fs.existsSync(FILE)) {
  fs.writeFileSync(FILE, JSON.stringify([]));
}

app.post("/register", (req, res) => {
  const data = JSON.parse(fs.readFileSync(FILE));

  data.push(req.body);

  fs.writeFileSync(FILE, JSON.stringify(data, null, 2));

  res.json({
    success: true,
    message: "Volunteer Registered Successfully"
  });
});

app.get("/volunteers", (req, res) => {
  const data = JSON.parse(fs.readFileSync(FILE));
  res.json(data);
});

app.listen(5000, () => {
  console.log("Server Running on Port 5000");
});