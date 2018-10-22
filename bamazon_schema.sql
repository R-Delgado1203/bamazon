CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT, /*primary key*/
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price DECIMAL(9,2) NULL,
  stock_quantity INTEGER NULL,
  PRIMARY KEY (item_id) /*primary key*/
);

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES( "iPhone", "electronics", 499.99, 15);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES( "Laptop", "electronics", 1469.99, 5);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES( "Computer Mouse", "electronics", 79.99, 100);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES( "Toilet Paper", "home", 9.99, 100);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES( "Paper Towel", "home", 4.99, 50);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES( "Laundry Detergent", "home", 12.99, 75);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES( "Dish Soap", "home", 7.99, 40);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES( "Jurassic Park", "entertainment", 9.99, 200);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES( "Game of Thrones Season 1", "entertainment", 19.99, 30);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES( "Treasure Island", "books", 6.99, 42);

select * from products;