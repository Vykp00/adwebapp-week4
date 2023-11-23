const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

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

app.post('/recipe/', function (req, res, next) {
    res.json();
});
// Example route handling for "/recipe/:food"
app.get('/recipe/:food', function (req, res, next) {
    let recipeName = req.params.food;
    const recipeData = {
        name: recipeName,
        instructions: ["Make dough", "Add Sauces", "Add Cheese", "Bake Pizza"],
        ingredients: ["Flour", "Pizza Sauces", "Cheese", "Spices"]
    };

    // Send the recipe data as JSON
    res.json(recipeData);
});

// Serve the index.html file for all other routes
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});