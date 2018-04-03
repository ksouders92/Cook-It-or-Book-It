var queryURL="https://api.edamam.com/search?q="

var keyId = "&app_id=c24cde76&app_key=d8d15088e36d8a58570af6069ff5e5be"

var cors = "https://cors-anywhere.herokuapp.com/"

// getting recipe from edamam API
function getRecipes() {

  var search = document.getElementById('recipeSearch').value
        document.getElementById('recipeHere').innerHTML = ""
        console.log(search)
  
  $.ajax({
      url: cors + queryURL + search + keyId,
      dataType: "JSON",
  
      success: function (data) {
        for (i = 0; i < data.hits.length; i++) {
          var div = $('<div>', {
            class: recipeDiv
          });
          
          var heading = $('<h5>', {
            class: header
          })
          .text(data.hits[i].recipe.label);
          
          var link = $('<a>', { 
            href: data.hits[i].recipe.url,
            class: link
          })
          .text('Link to Recipe');
          
          var image = $('<img>', { 
            src: data.hits[i].recipe.image, 
            alt: 'Recipe image',
            class: recipeImage
           });
  
          div.append(heading, link, image)
             .appendTo(recipeHere);

          }
        },
      type: 'GET'     
    });

  };

  document.getElementById('runSearch').addEventListener('click', getRecipes, false);