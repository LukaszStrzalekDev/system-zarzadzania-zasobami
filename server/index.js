const express = require("express");
const app = express();

const cors = require("cors");

const pool = require("./db");

app.use(cors());
app.use(express.json());

// ---    ROUTES

// 1. get vehicle type
// 2. add vehicle type
// 3. delete vehicle type

// 1. get vehicle
// 2. update vehicle
// 3. delete vehicle
// 4. add vehicle

// --- END OF ROUTES

app.listen(5000, () => {
  console.log("server is working on 5000");
});
