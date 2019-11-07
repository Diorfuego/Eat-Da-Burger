// Pull In required dependencies
var mysql = require("mysql");

//Create The MYSQL connection object
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    //DB is local on localhost
    connection = mysql.createConnection({
        port: 8080,
        host: "localhost",
        user: "root",
        password: "",
        database: "burgers_db"
    });
};

//Make the connection to MySQL
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export Connection
module.exports = connection;