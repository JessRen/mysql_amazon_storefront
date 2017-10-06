CREATE database bamazon_dB; 

Use bamazon_db;

CREATE TABLE products (
    item_id INT NOT NULL,
    product_name VARCHAR (25) NOT NULL,
    department_name  VARCHAR(25) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INT NOT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (
001,
'blue-green-vase',
'home_decor',
34.00,
4);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (
002,
'wall-hanging',
'home_decor',
62.00,
5);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (
003,
'picture-frame',
'home_decor',
15.00,
40);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (
004,
'hobby-bag',
'personal_accessories',
105.00,
26);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (
005,
'candle-holder-centerpiece',
'tableware',
42.00,
48);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (
006,
'wreath',
'home_decor',
26.00,
30);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (
007, 
'beeswax-melts',
'wellness',
8.00,
99);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (
008, 
'lotion-bar',
'wellness',
6.00,
46);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (
009, 
'topiary',
'home_decor',
88.00,
41);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (
010, 
'hanging-headboard',
'home_decor',
322.00,
33);

