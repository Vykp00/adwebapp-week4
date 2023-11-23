const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

const recipeList = [];
const images = [];
// Define a GET route for "/recipe/:food"
app.get('/recipe/:food', (req, res) => {
    const foodName = req.params.food;
    
    // Static values for instructions and ingredients
    const instructions = ["Make dough", "Add sauces", "Bake pizza"];
    const ingredients = ["Flour", "Cheese", "Sauces", "Spices"];

    // Create a JSON object with the specified attributes
    const recipe = {
        name: foodName,
        instructions: instructions,
        ingredients: ingredients
    };

    // Send the JSON object as the response
    res.json(recipe);
});

// Define a POST route for "/recipe/"
app.post('/recipe/', (req, res) => {
    const newRecipe = req.body;

    recipeList.push(newRecipe);
    // Send the JSON object back
    res.json(newRecipe);
});

// Define a POST images route
app.post("/images", (req, res) => {
    images.push(req.body)
    console.log(req.body);
    res.send("Hi");
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});