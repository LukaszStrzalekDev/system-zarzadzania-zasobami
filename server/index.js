const express = require("express");
const app = express();

const cors = require("cors");

const pool = require("./db");

app.use(cors());
app.use(express.json()); //req.body

// ---    ROUTES

// 1. get vehicle type

// 2. add vehicle type

app.post("/vehicle_type", async (req, res) => {
  try {
    const { vehtype_name, vehtype_desc } = req.body;
    const newVehicleType = await pool.query(
      "INSERT INTO vehicle_type (vehtype_name, vehtype_desc) VALUES ($1, $2) RETURNING *",
      [vehtype_name, vehtype_desc]
    );
    res.json(newVehicleType.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// 3. delete vehicle type
// 4. update vehicle type

// 1. get vehicle status

// 1. get vehicle

// 2. add vehicle

app.post("/vehicle", async (req, res) => {
  try {
    console.log(req.body);
    const { veh_name, veh_marc, veh_type, veh_status, veh_plate, veh_desc } =
      req.body;
    const newVehicle = await pool.query(
      "INSERT INTO vehicle (veh_name, veh_marc, veh_type, veh_status, veh_plate, veh_desc) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [veh_name, veh_marc, veh_type, veh_status, veh_plate, veh_desc]
    );
    res.json(newVehicle.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});
// 3. delete vehicle
// 4. update vehicle

// 1. get room type
// 2. add room type

app.post("/room_type", async (req, res) => {
  try {
    console.log(req.body);
    const { roomtype_name, roomtype_desc } = req.body;
    const newRoom_type = await pool.query(
      "INSERT INTO room_type (roomtype_name, roomtype_desc) VALUES ($1, $2) RETURNING *",
      [roomtype_name, roomtype_desc]
    );
    res.json(newRoom_type.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// 3. delete room type
// 4. update room type

// 1. get room status

// 1. get room
// 2. add room

app.post("/room", async (req, res) => {
  try {
    console.log(req.body);
    const { room_name, room_type, room_status, room_desc } = req.body;
    const newRoom = await pool.query(
      "INSERT INTO room (room_name, room_type, room_status, room_desc) VALUES ($1, $2, $3, $4) RETURNING *",
      [room_name, room_type, room_status, room_desc]
    );
    res.json(newRoom.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// 3. delete room
// 4. update room

// 1. get device type
// 2. add device type

app.post("/device_type", async (req, res) => {
  try {
    console.log(req.body);
    const { devtype_name } = req.body;
    const newDevice_type = await pool.query(
      "INSERT INTO device_type (devtype_name) VALUES ($1) RETURNING *",
      [devtype_name]
    );
    res.json(newDevice_type.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// 3. delete device type
// 4. update device type

// 1. get device status

// 1. get device
// 2. add device

app.post("/device", async (req, res) => {
  try {
    console.log(req.body);
    const { dev_name, dev_type, dev_status, dev_desc } = req.body;
    const newDevice = await pool.query(
      "INSERT INTO device (dev_name,dev_type,dev_status,dev_desc) VALUES ($1, $2, $3, $4) RETURNING *",
      [dev_name, dev_type, dev_status, dev_desc]
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

app.post("/oa_user", async (req, res) => {
  try {
    console.log(req.body);
    const { user_name, user_email, user_type, user_photo, user_desc } =
      req.body;
    const newOA_user = await pool.query(
      "INSERT INTO oa_user (user_name, user_email, user_type, user_photo, user_desc) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [user_name, user_email, user_type, user_photo, user_desc]
    );
    res.json(newOA_user.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// 1. get gtype

// 1. get reservation status

// 1. get reservation
// 2. add reservation

app.post("/reservation", async (req, res) => {
  try {
    console.log(req.body);
    const {
      res_id_user,
      res_id_gtype,
      res_id_status,
      res_start_data,
      res_end_data,
    } = req.body;
    const newReservation = await pool.query(
      "INSERT INTO reservation (res_id_user, res_id_gtype, res_id_status, res_start_data, res_end_data) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [res_id_user, res_id_gtype, res_id_status, res_start_data, res_end_data]
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
