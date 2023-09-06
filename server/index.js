const express = require("express");
const app = express();

const cors = require("cors");

const pool = require("./db");

app.use(cors());
app.use(express.json()); //req.body

// ---    ROUTES

// 1. get vehicle status

// 1. get vehicle

// 2. add vehicle

app.post("/Vehicles", async (req, res) => {
  try {
    console.log(req.body);
    const { Brand, TypeV, Model, Color, Plate, Description, Available } =
      req.body;
    const newVehicle = await pool.query(
      "INSERT INTO Vehicles (Brand, TypeV, Model, Color, Plate, Description, Available) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [Brand, TypeV, Model, Color, Plate, Description, Available]
    );
    res.json(newVehicle.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});
// 3. delete vehicle
// 4. update vehicle

// 1. get room
// 2. add room

app.post("/Rooms", async (req, res) => {
  try {
    console.log(req.body);
    const { NameR, Description, Capacity, Available } = req.body;
    const newRoom = await pool.query(
      "INSERT INTO Rooms (NameR, Description, Capacity, Available) VALUES ($1, $2, $3, $4) RETURNING *",
      [NameR, Description, Capacity, Available]
    );
    res.json(newRoom.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// 3. delete room
// 4. update room

// 1. get device
// 2. add device

app.post("/Devices", async (req, res) => {
  try {
    console.log(req.body);
    const { NameD, Description, Available } = req.body;
    const newDevice = await pool.query(
      "INSERT INTO Devices (NameD, Description, Available) VALUES ($1, $2, $3) RETURNING *",
      [NameD, Description, Available]
    );
    res.json(newDevice.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// 3. delete device
// 4. update device

// 1. get user
// 2. delete user
// 3. update user
// 4. add OAuser

app.post("/Users", async (req, res) => {
  try {
    console.log(req.body);
    const { GoogleID, FirstName, LastName, Email } = req.body;
    const newUsers = await pool.query(
      "INSERT INTO Users (GoogleID, FirstName, LastName, Email) VALUES ($1, $2, $3, $4) RETURNING *",
      [GoogleID, FirstName, LastName, Email]
    );
    res.json(newUsers.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// 1. get reservation status

// 1. get reservation
// 2. add reservation

app.post("/Reservations", async (req, res) => {
  try {
    console.log(req.body);
    const { UserID, ResourceID, StartTime, EndTime } = req.body;
    const newReservation = await pool.query(
      "INSERT INTO Reservations (UserID, ResourceID, StartTime, EndTime) VALUES ($1, $2, $3, $4) RETURNING *",
      [UserID, ResourceID, StartTime, EndTime]
    );
    res.json(newReservation.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// 3. delete reservation
// 4. update reservation

// --- END OF ROUTES

app.listen(5000, () => {
  console.log("server is working on 5000");
});
