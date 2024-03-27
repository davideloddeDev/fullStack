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