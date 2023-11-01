const express = require("express");
const app = express();

const cors = require("cors");

const pool = require("./db");

app.use(cors());
app.use(express.json()); //req.body

// ---    ROUTES

// 1. get available vehicles
app.get("/vehicles/:Available", async (req, res) => {
  const { Available } = req.params;
  try {
    const vehicles = await pool.query(
      "SELECT * FROM vehicles WHERE Available = $1",
      [Available]
    );
    res.json(vehicles.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// 1. get vehicle
app.get("/vehicles", async (req, res) => {
  try {
    const allVehicle = await pool.query("SELECT * from vehicles");
    res.json(allVehicle.rows);
  } catch (err) {
    console.log(err.message);
  }
});
// 2. add vehicle

app.post("/Vehicles", async (req, res) => {
  try {
    console.log(req.body);
    const { Brand, TypeV, Model, Color, Plate, Description, Available } =
      req.body;
    const newVehicle = await pool.query(
      "INSERT INTO vehicles (Brand, TypeV, Model, Color, Plate, Description, Available) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [Brand, TypeV, Model, Color, Plate, Description, Available]
    );
    res.json(newVehicle.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});
// 3. delete vehicle
app.delete("/Vehicles/:vehicleid", async (req, res) => {
  const vehicleid = req.params.vehicleid;

  try {
    const deletedVehicles = await pool.query(
      "DELETE FROM Vehicles WHERE vehicleid = $1 RETURNING *",
      [vehicleid]
    );

    if (deletedVehicles.rows.length === 0) {
      return res.status(404).json({
        message: "Pojazd o podanym identyfikatorze nie istnieje.",
      });
    }

    res.json({ message: "Pojazd został pomyślnie usunięty." });
  } catch (err) {
    console.error(err.message);
    res
      .status(500)
      .json({ message: "Wystąpił błąd podczas usuwania Pojazdu." });
  }
});
// 4. update vehicle

// 1. get room
app.get("/Rooms", async (req, res) => {
  try {
    const allRooms = await pool.query("SELECT * from rooms");
    res.json(allRooms.rows);
  } catch (err) {
    console.log(err.message);
  }
});

// 1a. get available rooms
app.get("/Rooms/:Available", async (req, res) => {
  const { Available } = req.params;
  try {
    const Rooms = await pool.query("SELECT * FROM Rooms WHERE Available = $1", [
      Available,
    ]);
    res.json(Rooms.rows);
  } catch (err) {
    console.error(err.message);
  }
});
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
app.delete("/Rooms/:roomid", async (req, res) => {
  const roomid = req.params.roomid;

  try {
    const deletedRooms = await pool.query(
      "DELETE FROM Rooms WHERE roomid = $1 RETURNING *",
      [roomid]
    );

    if (deletedRooms.rows.length === 0) {
      return res.status(404).json({
        message: "Pomieszczenie o podanym identyfikatorze nie istnieje.",
      });
    }

    res.json({ message: "Pomieszczenie zostało pomyślnie usunięte." });
  } catch (err) {
    console.error(err.message);
    res
      .status(500)
      .json({ message: "Wystąpił błąd podczas usuwania Pomieszczenia." });
  }
});

// 4. update room

// 1. get device
app.get("/Devices", async (req, res) => {
  try {
    const allDevices = await pool.query("SELECT * from devices");
    res.json(allDevices.rows);
  } catch (err) {
    console.log(err.message);
  }
});

// 1a. get available devices
app.get("/Devices/:Available", async (req, res) => {
  const { Available } = req.params;
  try {
    const Devices = await pool.query(
      "SELECT * FROM Devices WHERE Available = $1",
      [Available]
    );
    res.json(Devices.rows);
  } catch (err) {
    console.error(err.message);
  }
});

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
app.delete("/Devices/:deviceid", async (req, res) => {
  const DeviceId = req.params.deviceid;

  try {
    const deletedDevices = await pool.query(
      "DELETE FROM Devices WHERE DeviceId = $1 RETURNING *",
      [DeviceId]
    );

    if (deletedDevices.rows.length === 0) {
      return res.status(404).json({
        message: "Urządzenie o podanym identyfikatorze nie istnieje.",
      });
    }

    res.json({ message: "Urządzenie zostało pomyślnie usunięte." });
  } catch (err) {
    console.error(err.message);
    res
      .status(500)
      .json({ message: "Wystąpił błąd podczas usuwania Urządzenia." });
  }
});
// 4. update device

// 1. get user
app.get("/Users", async (req, res) => {
  try {
    const allUsers = await pool.query("SELECT * from Users");
    res.json(allUsers.rows);
  } catch (err) {
    console.log(err.message);
  }
});
// 2. delete user
app.delete("/Users/:userid", async (req, res) => {
  const UserId = req.params.userid;

  try {
    const deletedUsers = await pool.query(
      "DELETE FROM Users WHERE UserID = $1 RETURNING *",
      [UserId]
    );

    if (deletedUsers.rows.length === 0) {
      return res.status(404).json({
        message: "User o podanym identyfikatorze nie istnieje.",
      });
    }

    res.json({ message: "User został pomyślnie usunięty." });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Wystąpił błąd podczas usuwania usera." });
  }
});

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

// 1. get reservation
app.get("/Reservations", async (req, res) => {
  try {
    const allReservations = await pool.query("SELECT * from Reservations");
    res.json(allReservations.rows);
  } catch (err) {
    console.log(err.message);
  }
});
// 1a. get reservations from specific user
app.get("/Reservations/:UserID", async (req, res) => {
  const { UserID } = req.params;
  try {
    const Reservations = await pool.query(
      "SELECT * FROM Reservations WHERE UserID = $1",
      [UserID]
    );
    res.json(Reservations.rows);
  } catch (err) {
    console.error(err.message);
  }
});

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
app.delete("/Reservations/:reservationid", async (req, res) => {
  const reservationId = req.params.reservationid;

  try {
    const deletedReservation = await pool.query(
      "DELETE FROM Reservations WHERE ReservationID = $1 RETURNING *",
      [reservationId]
    );

    if (deletedReservation.rows.length === 0) {
      // Jeśli nie znaleziono rezerwacji o podanym identyfikatorze
      return res.status(404).json({
        message: "Rezerwacja o podanym identyfikatorze nie istnieje.",
      });
    }

    res.json({ message: "Rezerwacja została pomyślnie usunięta." });
  } catch (err) {
    console.error(err.message);
    res
      .status(500)
      .json({ message: "Wystąpił błąd podczas usuwania rezerwacji." });
  }
});

// 4. update reservation

// --- END OF ROUTES

app.listen(5000, () => {
  console.log("server is working on 5000");
});
