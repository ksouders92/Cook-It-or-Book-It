var queryURL="https://api.edamam.com/search?q=" + "app_id=$c24cde76&app_key=$d8d15088e36d8a58570af6069ff5e5be";
  
var cors = "https://cors-anywhere.herokuapp.com/"

// getting recipe from edamam API
// function getRecipes () {
function getRecipes() {
  $.ajax({
      url: cors + queryURL,
      method: 'GET'
      }).then(function(response){
        console.log(response);      
      });
}

$('#runSearch').on('submit', function (e) {
  e.preventDefault()
  getRecipes()
})


    // store found recipe in global variable
    var globalRecipe = [];
    
    // takes api data
    function renderRecipes (recipes) {
  
      globalRecipe = []
  
      var edamamApiRecipe = {
          // .label pulls up recipe title
          name: recipes.hits[0].recipe.label,
          // .calories pulls up calories
          calories: recipes.hits[0].recipe.calories,
          // .source pulls up source site identifier
          source: recipes.hits[0].recipe.source,
          // .url pulls up source url
          sourceUrl: recipes.hits[0].recipe.url,
          // .img pulls up an image
          imgUrl: recipes.hits[0].recipe.image,
          // .ingredientLines pulls up ingredients needed
          ingredients: recipes.hits[0].recipe.ingredientLines,
          // .yield pulls up how many servings
          yield: recipes.hits[0].recipe.yield
      }
      $('#recipeHere').append($edamamApiRecipe);
    };
