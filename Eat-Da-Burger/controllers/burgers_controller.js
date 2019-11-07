// Dependencies
var express = require("express");
var router = express.Router();

// Import the model 
var burger = require("../models/burger.js");

//create the routes
router.get("/", function (req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        //console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// Add new burger to the db.
router.post("/burgers", function (req, res) {
    burger.insertOne([
        "burger_name"
    
    ], [req.body.burger_name
    
    ], function(result) {
        // Send back the ID of the new burger
        res.redirect('/');
    });
});

// Set burger devoured status to true.
router.put('/burgers/:id', function(req, res) {
    var condition = "id = " + req.params.id;

    

    burger.updateOne({
         devoured: true
        }, condition, function(data) {
            res.redirect('/');
    });
});

// Export routes for server.js to use
module.exports = router;