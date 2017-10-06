# MySql Amazon Storefront

## What It Is And Does

Amazon manages its data with MySQL and runs on NodeJS. This application applies both technologies, so that customers can view inventory available for purchase and the application can confirm availability of inventory and finalize the purchase, consequently updating the database. 

## Organization

The main customer.js file displays product with corresponding details, presents a line of questions for the customer to answer, and checks the customer's order against inventory before finalizing and refreshing quantities in the SQL database.

The store_schema.sql file establishes the bamazon_db (database) within MySql workbench and builds out a products table with 10 detailed products. These details include values for the fields item_id, product_name, department_name, price, and stock_quantity.