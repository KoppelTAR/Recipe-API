const Name = document.querySelector('.name')
const Ingredients = document.querySelector('.ingredients')
const Summary = document.querySelector('.summary')
const instructions = document.querySelector('.instructions')
const Image = document.querySelector('.image');

function getRecipe() {
    let url =  `https://api.spoonacular.com/recipes/random/?apiKey=76c967d2606644efb1ff257886c7d18f`
    fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        let foodData = data.recipes[0]

        Name.innerHTML = foodData.title

        foodData.extendedIngredients.forEach( Ingredients => {
            console.log(Ingredients);
        });
    })
}

getRecipe()