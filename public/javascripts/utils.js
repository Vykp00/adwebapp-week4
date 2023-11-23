if (document.readyState !== "loading") {
    console.log("Document loaded");
    fetchRecipe();
    initializeCode();
} else {
    document.addEventListener("DOMContentLoaded", function () {
        console.log("Document is ready after loading");
        fetchRecipe();
        initializeCode();
    });
}
//Function to fetch and display the recipe
async function fetchRecipe() {
    try {
        // Assuming we fetch "pizza"
        let response = await fetch("http://localhost:3000/recipe/pizza");
        let recipeData = await response.json();
        console.log(recipeData)

    } catch (error) {
        console.log("Error fetching recipe: ", error);
    }

    // Display recipe
    return renderRecipe(recipeData);

};

// Function to render the recipe details
function renderRecipe(recipe) {
    const recipeContainer = document.getElementById("recipe-container");

    // Create HTMl elements for recipe details
    const recipeHeader = document.createElement("h2");
    recipeHeader.id = "recipe-name";
    recipeHeader.textContent = recipe.name;

    const recipeIngredients = document.createElement("h3");
    recipeIngredients.id = "ingredients-header";
    recipeIngredients.textContent = "Ingredients";

    const ingredientsList = document.createElement("ul");
    ingredientsList.id = "ingredients-list";

    const recipeInstructions = document.createElement("h3");
    recipeInstructions.id = "instructions-header";
    recipeInstructions.textContent = "Instructions";

    const instructionsList = document.createElement("ul");
    instructionsList.id = "instructions-list";

    // Loop through instructions and ingredient array, create list items
    recipe.ingredients.forEach(ingredient => {
        const listItem = document.createElement("li");
        listItem.textContent = ingredient;
        ingredientsList.appendChild(listItem);
    });

    recipe.instructions.forEach(instruction => {
        const listItem = document.createElement("li");
        listItem.textContent = instruction;
        instructionsList.appendChild(listItem);
    });

    // Append the elements to the recipe container
    recipeContainer.appendChild(recipeHeader);
    recipeContainer.appendChild(recipeIngredients);
    recipeContainer.appendChild(ingredientsList);
    recipeContainer.appendChild(recipeInstructions);
    recipeContainer.appendChild(instructionsList);
};

function initializeCode() {

};
