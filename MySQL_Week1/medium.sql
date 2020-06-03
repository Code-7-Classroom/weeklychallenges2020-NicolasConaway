DROP DATABASE IF EXISTS movies_db;

CREATE DATABASE movies_db;

USE movies_db;

CREATE TABLE Movies (
movie_title VARCHAR(255),
movie_date DATE,
movie_rating DECIMAL(2, 2)
);

INSERT INTO Movies(movie_title, movie_date, movie_rating)
VALUES
("TransFormers", "2009-10-01", 0.71),
("Hitman's body guard", "2018-10-01", 0.63),
("Avengers: end game", "2019-06-09", 0.82),
("Angel has fallen", "2020-01-15", 0.92),
("Extraction", "2020-04-16", 0.73),
("Spiderman: far from home", "2019-09-11", 0.73),
("Ironman 2", "2010-07-31", 0.61),
("How to train your dragon 2", "2012-08-21", 0.78),
("Thor Ragnarok", "2018-09-07", 0.81),
("Kingsman the secret service", "2016-04-29", 0.85);

SELECT * FROM Movies
WHERE movie_title LIKE "%s%"
ORDER BY movie_date asc;


