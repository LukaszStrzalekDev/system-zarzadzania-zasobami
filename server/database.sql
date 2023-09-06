CREATE TABLE Users (
    UserID SERIAL PRIMARY KEY,
    GoogleID VARCHAR(255) UNIQUE NOT NULL,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Email VARCHAR(100)
);

CREATE TABLE Vehicles (
    VehicleID SERIAL PRIMARY KEY,
    Brand VARCHAR(100),
    TypeV VARCHAR(100),
	Model VARCHAR(100),
	Color VARCHAR(100),
	Plate VARCHAR(7),
    Description VARCHAR(600),
	Available BOOLEAN
);

CREATE TABLE Devices (
    DeviceID SERIAL PRIMARY KEY,
    NameD VARCHAR(100),
    Description VARCHAR(600),
    Available BOOLEAN
);

CREATE TABLE Rooms (
    RoomID SERIAL PRIMARY KEY,
    NameR VARCHAR(100),
    Description VARCHAR(600),
	Capacity INTEGER,
	Available BOOLEAN
    
);

CREATE TABLE Reservations (
    ReservationID SERIAL PRIMARY KEY,
    UserID INTEGER REFERENCES Users(UserID),
    ResourceID INTEGER,
    StartTime TIMESTAMP,
    EndTime TIMESTAMP,
    FOREIGN KEY (ResourceID) REFERENCES Vehicles(VehicleID) ON DELETE CASCADE,
    FOREIGN KEY (ResourceID) REFERENCES Devices(DeviceID) ON DELETE CASCADE,
    FOREIGN KEY (ResourceID) REFERENCES Rooms(RoomID) ON DELETE CASCADE
);
