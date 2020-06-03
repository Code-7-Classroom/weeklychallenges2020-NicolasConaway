DROP DATABASE IF EXISTS veryEasy_db;

CREATE DATABASE veryEasy_db;

USE veryEasy_db;

CREATE TABLE Cars(
car_make VARCHAR(255),
car_model VARCHAR (255),
car_year INT
);

INSERT INTO Cars(car_make, car_model, car_year)
VALUES
("BMW", "I8", 2014),
("Tesla", "Roadster", 2021),
("Ferrari", "F12 berlinetta", 2013);

INSERT INTO Cars(car_make, car_model, car_year)
VALUES
("Volkswagen", "Jetta", 2016),
("chevrolet", "Camaro", 2020);

SELECT * FROM Cars;

