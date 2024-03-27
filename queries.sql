CREATE TABLE Books (
    book_id INT PRIMARY KEY,
    title VARCHAR(255),
    author VARCHAR(255),
    genre VARCHAR(100),
    published_year INT,
    isbn VARCHAR(17),
    price DECIMAL(10, 2),
    rating DECIMAL(3, 2),
    stock_count INT,
    publisher VARCHAR(255),
    number_of_pages INT
);

INSERT INTO Books (title, author, genre, published_year, isbn, price, rating, stock_count, publisher, number_of_pages) VALUES
('A Journey to the Center', 'Jules Verne', 'Adventure', 1864, '1234567890123', 12.99, 4.5, 10, 'Verne Publishing', 350),
('War and Peace', 'Leo Tolstoy', 'Historical', 1869, '1234567890124', 14.99, 4.8, 4, 'Tolstoy Prints', 1200),
('Whispers of the Wind', 'Amelia Blackburn', 'Romance', 1982, '1234567890125', 9.99, 4.2, 20, 'Blackburn House', 275),
('The Galactic Odyssey', 'Orion Starfield', 'Science Fiction', 2005, '1234567890126', 19.99, 4.9, 15, 'Nebula Press', 450);

-- Concessione dei permessi di visualizzazione a Martin
GRANT SELECT ON Books TO [martin];

-- Revoca dei permessi di aggiornamento a Martin
REVOKE UPDATE ON Books FROM [martin];

-- Rimozione del libro con BookID = 101
DELETE FROM Books
WHERE book_id = 101;

-- Inizio della transazione per testare la rimozione del libro con BookID = 103
BEGIN TRANSACTION;
DELETE FROM Books WHERE book_id = 103;
-- Annullamento della transazione per ripristinare lo stato precedente
ROLLBACK;

-- Query per il dataset Titanic
-- 1. Visualizzare le passeggiere femmine che sono sopravvissute e hanno più di 30 anni
SELECT * FROM Titanic
WHERE Sex = 'female' AND Survived = 1 AND Age > 30;

-- 2. Trovare l'età media degli uomini che non sono sopravvissuti
SELECT AVG(Age) FROM Titanic
WHERE Sex = 'male' AND Survived = 0;

-- 3. Visualizzare le informazioni per i passeggeri che hanno speso tra $20 e $50 per i loro biglietti e sono saliti sulla nave al porto 'C'
SELECT * FROM Titanic
WHERE Fare BETWEEN 20 AND 50 AND Embarked = 'C';

-- 4. Trovare il numero totale dei sopravvissuti in prima classe
SELECT COUNT(*) FROM Titanic
WHERE Pclass = 1 AND Survived = 1;

-- 5. Mostrare le informazioni dei passeggeri che sono saliti da Cherbourg (porto 'C') e hanno speso più di $75 per i loro biglietti
SELECT * FROM Titanic
WHERE Embarked = 'C' AND Fare > 75;
