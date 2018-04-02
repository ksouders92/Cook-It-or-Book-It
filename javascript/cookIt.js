var queryURL="https://api.edamam.com/search?q="

var keyId = "&app_id=c24cde76&app_key=d8d15088e36d8a58570af6069ff5e5be"

var cors = "https://cors-anywhere.herokuapp.com/"

// getting recipe from edamam API
function getRecipes() {

  var search = document.getElementById('search').value
        document.getElementById('results').innerHTML = ""
        console.log(search)
  
  $.ajax({
      url: cors + queryURL + search + keyId,
      dataType: "JSON",
  
      success: function (data) {
        for (i = 0; i < data.hits.length; i++) {
          results.innerHTML += "<h5>" + data.hits[i].recipe.image + "</h5>"
          results.innerHTML += "<h5>" + data.hits[i].recipe.label + "</h5>"
          results.innerHTML += "<h5>" + data.hits[i].recipe.url + "</h5>"
          results.innerHTML += "<h5>" + data.hits[i].recipe.shareAs + "</h5>"
          results.innerHTML += "<h5>" + data.hits[i].recipe.yield + "</h5>"
          results.innerHTML += "<h5>" + data.hits[i].recipe.ingredients + "</h5>"
          }
      method: "GET"     
      }
    });
  
  $('#recipeSearch').on('submit', function (e) {
  e.preventDefault(),
  
  getRecipes()
  });
}
