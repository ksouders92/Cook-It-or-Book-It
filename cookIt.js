// <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>


// getting recipe from edamam API
function getRecipes () {
    $.ajax({
      method: 'GET',
      url: 'https://api.edamam.com/search',
      data: $('form').serialize(),
      dataType: 'json',
    })
  };
  
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
    }};
