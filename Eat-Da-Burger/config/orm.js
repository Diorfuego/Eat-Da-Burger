var connection = require("../config/connection.js");

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    
    return arr.toString();
}

// converts object key/value pairts to SQL
function objToSql(ob) {
    var arr = [];

    // loop through the keys 
    for (var key in ob) {
        var value = ob[key];
    }
  return arr.toString();
}

// Creates orm
var orm = {
    // Display all burgers in the db.
    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM " + table + ";";

        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    // Add a burger to the db.
    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        //console.log(queryString);

        // Perfom the databse query
        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err
            }

            // Return Results in callback
            cb(result);
        });
    },

    // Set burger devoured status to true.
    updateOne: function(table, objColVals, condition, cb) {
    // Creates query strings that updates a single entry
        var queryString = "UPDATE " + table;
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        //console.log(queryString);

        connection.query(queryString, function(err, result) {
            if (err) {
                throw err
            }

            cb(result);
        });
    }
    
};

// Export the ORM object in module.exports.
module.exports = orm;