const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();

app.use(cors());
app.use(express.json());

const FILE = "database.json";

// Create database file if it doesn't exist
if (!fs.existsSync(FILE)) {
fs.writeFileSync(FILE, JSON.stringify([]));
}

// ==========================
// REGISTER VOLUNTEER
// ==========================

app.post("/register", (req, res) => {

```
const data = JSON.parse(
    fs.readFileSync(FILE, "utf-8")
);

const volunteer = {
    id: Date.now(),
    name: req.body.name,
    email: req.body.email,
    college: req.body.college,
    domain: req.body.domain
};

data.push(volunteer);

fs.writeFileSync(
    FILE,
    JSON.stringify(data, null, 2)
);

res.status(201).json({
    success: true,
    message: "Volunteer Registered Successfully",
    volunteer
});
```

});

// ==========================
// GET ALL VOLUNTEERS
// ==========================

app.get("/volunteers", (req, res) => {

```
const data = JSON.parse(
    fs.readFileSync(FILE, "utf-8")
);

res.json(data);
```

});

// ==========================
// DELETE VOLUNTEER
// ==========================

app.delete("/volunteers/:id", (req, res) => {

```
const id = Number(req.params.id);

let data = JSON.parse(
    fs.readFileSync(FILE, "utf-8")
);

const exists = data.find(
    volunteer => volunteer.id === id
);

if (!exists) {
    return res.status(404).json({
        success: false,
        message: "Volunteer Not Found"
    });
}

data = data.filter(
    volunteer => volunteer.id !== id
);

fs.writeFileSync(
    FILE,
    JSON.stringify(data, null, 2)
);

res.json({
    success: true,
    message: "Volunteer Deleted Successfully"
});
```

});

// ==========================
// HOME ROUTE
// ==========================

app.get("/", (req, res) => {
res.send("Volunteer Registration API Running...");
});

// ==========================
// START SERVER
// ==========================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
console.log(`Server Running On Port ${PORT}`);
});
