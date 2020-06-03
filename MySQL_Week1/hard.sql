DROP DATABASE IF EXISTS movies_db;

CREATE DATABASE movies_db;

USE movies_db;

CREATE TABLE Movies (
movie_title VARCHAR(255),
movie_date DATE,
movie_rating DECIMAL(2, 2)
);

ALTER TABLE Movies
ADD COLUMN director_firstName VARCHAR(255) AFTER movie_rating,
ADD COLUMN director_lastName VARCHAR(255) AFTER director_firstName;


INSERT INTO Movies(movie_title, movie_date, movie_rating, director_firstName, director_lastName)
VALUES
("TransFormers", "2009-10-01", 0.71, "Micheal", "Bay"),
("Hitman's body guard", "2018-10-01", 0.63, "John", "Doe"),
("Avengers: end game", "2019-06-09", 0.82, "Mike", "Smith"),
("Angel has fallen", "2020-01-15", 0.92, "Jane", "Ross"),
("Extraction", "2020-04-16", 0.73, "Ryan", "Reynalds"),
("Spiderman: far from home", "2019-09-11", 0.73, "Claira", "Ray"),
("Ironman 2", "2010-07-31", 0.61, "Billy", "Bob"),
("How to train your dragon 2", "2012-08-21", 0.78, "Tom", "Ralph"),
("Thor Ragnarok", "2018-09-07", 0.81, "James", "Peterson"),
("Kingsman the secret service", "2016-04-29", 0.85, "Nicolas", "Conaway");

DELETE FROM Movies 
WHERE director_lastName LIKE "%r";


SELECT 
movie_title, 
CONCAT( director_firstName, " ", director_lastName ) AS fullName 
FROM Movies
ORDER BY director_lastName asc;

-- SELECT * FROM Movies
-- WHERE movie_title LIKE "%s%"
-- ORDER BY movie_date asc;