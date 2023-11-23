var express = require("express");
var router = express.Router();

// Recipes databases
const recipes = [
  {
    "name" : "pizza",
    "instructions" : ["Make dough", "Add Sauces", "Add Cheese", "Bake Pizza"],
    "ingredients" : ["Flour", "Pizza Sauces", "Cheese", "Spices"],
  },
  {
    "name": "pasta",
    "instructions" : ["Make pasta", "Add Sauces", "Add Cheese"],
    "ingredients" : ["Pasta", "Sauces", "Cheese", "Spices"],
  }
]
// Static values???
/*
const instructions = ["Make dough", "Add Sauces", "Add Cheese", "Bake Pizza"]
const ingredients = ["Flour", "Pizza Sauces", "Cheese", "Spices"]
*/
/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

/* GET food from "/recipe/:food" */
router.get("/recipe/:food", function(req, res, next) {
  let recipeName = req.params.food;
  res.json({
    name: recipeName,
    instructions: ["Make dough", "Add Sauces", "Add Cheese", "Bake Pizza"],
    ingredients: ["Flour", "Pizza Sauces", "Cheese", "Spices"]
  });
});

module.exports = router;
