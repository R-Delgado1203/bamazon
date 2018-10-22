var inquirer = require("inquirer");
var mysql = require('mysql');
var allItems = [];
var item = [];

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'bamazon'
});

showBuyList();

function showBuyList() {
    connection.connect(function (err) {
        if (err) {
            return console.error('error connecting: ' + err.stack);
        }
        console.log('connected as id ' + connection.threadId);
    });
    connection.query('SELECT * FROM products', function (error, results, fields) {
        if (error) throw error;
        console.log(`\nAvailable allItems:`);
        allItems = results;
        for (i = 0; i < allItems.length; i++) {
            console.log(`
Name: ${allItems[i].product_name}
Price: $${allItems[i].price} | itemID: ${allItems[i].item_id}`);
        }
        makePurchase();
    });
}

function makePurchase() {
    console.log("");
    inquirer
        .prompt([
            {
                type: "input",
                name: "id",
                message: "Enter an itemID to purchase: "
            },
            {
                type: "input",
                name: "quantity",
                message: "Enter Quantity: "
            }
        ])
        .then(answers => {
            //console.log(answers.id);
            //console.log(answers.quantity);
            var stock = 0;


            connection.query('SELECT * FROM products WHERE item_id = ?', [answers.id], function (error, results, fields) {
                if (error) throw error;
                item = results;
                if (answers.quantity <= item[0].stock_quantity) {
                    var total = answers.quantity * item[0].price;
                    connection.query('UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?', [answers.quantity, answers.id], function (error, results, fields) {
                        if (error) throw error;
                        return console.log(`
Your total is: $${total}
Your order is complete.

Thanks for your business, come again!`)
                    });
                    connection.end();
                }
                else {
                    connection.end();
                    return console.log("\nThere are not enough items in stock, please try again.\n\nCurrent Quantity is: " + item[0].stock_quantity);
                }
                //connection.end();

            });
        });
    //console.log(allItems);
}

