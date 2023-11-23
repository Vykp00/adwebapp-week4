if (document.readyState !== "loading") {
    console.log("Document loaded");
    fetchRecipe();
} else {
    document.addEventListener("DOMContentLoaded", function () {
        console.log("Document is ready after loading");
        fetchRecipe();
    });
}
//Function to fetch and display the recipe
async function fetchRecipe() {
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
};
