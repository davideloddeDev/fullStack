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
('War and Peace', 'Leo Tolstoy', 'Historical', 1869, '1234567890124', 14.99, 4.8, 4, 'Tolstoy Prints', 1200), -- Aggiornato il prezzo e la quantità in magazzino
('Whispers of the Wind', 'Amelia Blackburn', 'Romance', 1982, '1234567890125', 9.99, 4.2, 20, 'Blackburn House', 275),
('The Galactic Odyssey', 'Orion Starfield', 'Science Fiction', 2005, '1234567890126', 19.99, 4.9, 15, 'Nebula Press', 450);
