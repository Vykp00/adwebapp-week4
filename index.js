const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.json()) ;
app.use(bodyParser.urlencoded({ extended: true })) ;

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// });

app.use(express.static(path.join(__dirname, "public")));

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

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});