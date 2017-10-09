var inquirer = require('inquirer');
var mysql = require('mysql');

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
		runSearch()
	});
}


function runSearch() {
	inquirer.prompt([
        {
            name: "id",
            type: "input",
            message: "What item id do you want to purchase?"
        }, {
            name: 'quantity',
            type: 'input',
            message: "And how many?"
        },


	 ]).then(function(answers) {
        
        var quantity = answers.quantity;
        var id = answers.id;
        buy(id, quantity);
    });

}; 


function buy(id, purchase) {
   
    connection.query('SELECT * FROM products WHERE item_id = ' + id, function(err,res) {
       if (purchase <= res[0].stock_quantity) {
            var total = res[0].price * purchase;
           
            console.log("Thank you for your Order!");
            connection.query('UPDATE Products SET stock_quantity = stock_quantity - ' + purchase + ' WHERE item_id = ' + id);

 		} else {
      console.log("\nInsufficient Stock Available at this time =/ Contact the sales office for a special order, or to find out when we expect to restock the item\n")
    }
 		queryAllData()
 	}
 )};  

