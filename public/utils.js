if (document.readyState !== "loading") {
    console.log("Document loaded");
    fetchRecipe();
    inittializeCode();
} else {
    document.addEventListener("DOMContentLoaded", function () {
        console.log("Document is ready after loading");
        fetchRecipe();
        inittializeCode();
    });
}
//Function to fetch and display the recipe
async function fetchRecipe () {
    // Fetch the recipe from the server
    fetch('/recipe/pizza')
        .then(response => response.json())
        .then(recipe => {
            // Display the recipe details on the page
            document.getElementById('recipe-container').innerHTML = `
                    <h2>${recipe.name}</h2>
                    <h3>Instructions:</h3>
                    <ul>
                        ${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
                    </ul>
                    <h3>Ingredients:</h3>
                    <ul>
                        ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                    </ul>
                `;
        })
        .catch(error => console.error('Error fetching recipe:', error));
}

function inittializeCode () {
    // Create formData to submit recipe 
    const formData = new FormData();

    // Create ingredients and isnstruction wait list
    const ingredientForm = [];
    const instructionForm = [];

    // Add ingredient to wait list
    const addIngredient = document.querySelector('#add-ingredient');
    addIngredient.addEventListener('click', async () => {
        const ingredient = document.getElementById('ingredients-text');
        ingredientForm.push(ingredient.value);
        console.log(ingredientForm);
        console.log(`${ingredient.value} added`);
    });

    // Add instruction to wait list
    const addInstruction = document.querySelector('#add-instruction');
    addInstruction.addEventListener('click', async () => {
        const instruction = document.getElementById('instructions-text');
        instructionForm.push(instruction.value);
        console.log(instructionForm);
        console.log(`${instruction.value} added`);
    });
    /*
        // add images to FormData when it's uploaded
        const addImg = document.getElementById('image-input');
        addImg.addEventListener('change', async () => {
            console.log(addImg.files.length);
            for (var i = 0; i < addImg.files.length; i++) {
                formData.append('images', addImg.files[i]);
            };
            console.log(...formData);
            console.log("Image added");
        });
        */

    // Handle POST request to /recipe/ and /image
    const submitBtn = document.querySelector('#submit');
    submitBtn.addEventListener('click', () => {
        //Handle POST recipe
        const name = document.getElementById('name-text');
        /*
                formData.append('name', name.value);
        
                for (var i = 0; i < ingredientForm.length; i++) {
                    formData.append('ingredients', ingredientForm[i]);
                };
        
                for (var i = 0; i < instructionForm.length; i++) {
                    formData.append('instructions', instructionForm[i]);
                };
                console.log(...formData);
        */
        const newRecipe = {
            name: name.value,
            ingredients: ingredientForm,
            instructions: instructionForm,
        };

        console.log(newRecipe);
        fetch('/recipe/', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newRecipe),
        })
            .then(response => response.json())
            .then(recipe => {
                console.log('New recipe added:', recipe);
            })
            .catch(error => console.error('Error adding new recipe:', error));
    });
};