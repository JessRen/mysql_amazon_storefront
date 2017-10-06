
var inquirer = require('inquirer');
var mysql = require('mysql');
// to display objects with a th, can require("console-table");

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '101Dalmations',
  database: 'bamazon_dB'
});

connection.connect(function(err) {
  if (err) throw err;
  queryAllData();
    
});


function queryAllData() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].item_id + " | " + res[i].product_name + " | "+ res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity);
    }

    console.log("-----------------------------------");
    // defines start of dataset.

    searchProduct();
  }); // closes connection.query
} // closes function queryAllData();


function searchProduct() {
  inquirer.prompt([
        {
            name: "id",
            type: "input",
            message: "What is the ID of the item to purchase?"
        }, {
            name: 'quantity',
            type: 'input',
            message: "How many?"
        },

   ]).then(function(answers) {
        
        var count = answers.quantity;
        var id = answers.id;
        purchase(id, count);
    });
}; 

function purchase(id, order) {
   
    connection.query('SELECT * FROM products WHERE item_id = ' + id, function(err,res) {
       var stock = res[0].stock_quantity;

       if (order <= stock) {
            console.log("We have supply for your order.")

            var tally = res[0].price * order;

            // these res[0] know there is only [0] in the returned array... still useful application of array index. could set var item = res[0] before the if statement and use instead, or var stock = res[0].stock_quantity;
           
            console.log("\nYour tally is $" + tally ".\n Thanks for your Order!\n");

          // updating count available for order means another query to the sql db connection, since that's where it matters to our inventory 
            connection.query('UPDATE products SET stock_quantity = stock_quantity - ' + order + ' WHERE item_id = ' + id);

            // can create an option to ask if they want to add to their order

            // can create a sales table
        } else {
            console.log("\nInsufficient Stock Available at this time =/ Contact the sales office for a special order, or to find out when we expect to restock the item\n")
        }
    queryAllData(); // attaches refreshed inventory table
    
  }
 )}; // parenths here closes the 1st connection.query of the purchase function! All the functionality therein is happening in that connection context.

