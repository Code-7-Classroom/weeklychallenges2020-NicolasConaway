DROP DATABASE IF EXISTS books_db;

CREATE DATABASE books_db;

USE books_db;

CREATE TABLE Books (
book_title VARCHAR(255),
book_publishDate DATE,
author_firstName VARCHAR(255),
aurthor_lastName VARCHAR(255)
);

INSERT INTO Books(book_title, book_publishDate, author_firstName, aurthor_lastName)
VALUES
("Macbeth", "1623-01-01", "William", "Shakespeare"),
("To Kill A Mockingbird", "1960-07-11", "Harper", "Lee" ),
("A Tale Of Two Cities", "1859-01-10", "Cahrles", "Dickens"),
("The Little Prince", "1943-04-06", "Antoine De", "Saint-Exupery"),
("A Streetcar Named Desire", "1947-12-03", "Tenenessee", "Williams");

DELETE FROM Books 
WHERE book_publishDate 
IS NOT NULL order by book_publishDate asc LIMIT 1;

INSERT INTO Books(book_title, book_publishDate, author_firstName, aurthor_lastName)
VALUES
("Life of Pi", "2001-09-11", "Yann", "Martel"),
("Unbroken", "2010-11-16", "Laura", "Hillenbrand");

SELECT * FROM Books;

SELECT COUNT(*) FROM Books;