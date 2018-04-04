
  function getYelpResults(input) {
    var corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
    var hostName = corsAnywhere + 'https://api.yelp.com/v3/businesses/search?';
    var term = 'term=' + input;
    var location1 = 'location=32824';
    var apiKey = 'Bearer cgK5yqK2luH4fnPOBEhALBna1-gbU2wbEqgr2wRDY0fM7mwNnzK5IIrf_Na-RWJLkpEh67sRnVS_V6LAM6S-Uw-bZHaQY9XTcq7tzjAULUlkKJ3nT6RJ3xVjsae_WnYx'

    $.ajax({
      method: 'GET',
      url: hostName + term + '&' + location1 + '&limit=5',
      headers: { Authorization: apiKey },
      success: function(response) {
        console.log(response.businesses);
        $('.information').empty();
        response.businesses.forEach(function(business) {
          var newDiv = $('<div>').addClass('restaurants');
          var name = $('<h2>').text(business.name);
          var phone = $('<h2>').text(business.phone);
          var rating = $('<h2>').text(business.rating);              
          var link = $('<a>').attr('href', business.url).text(business.url).text("Restaurant Website").attr('target' ,'_blank');
          newDiv.append("<span class='title'>Restaurant Name:</span>",name, "<span class='title'>Phone:</span>",phone,"<span class='title'>Rating:</span>",rating, "<span class='title'>Web Page:</span>","<br>", link,"<hr>").appendTo($('.information'))
        });
      },
    })
  }

  $(document).ready(function () {
    $('#runSearch').on('click', function() {
      var search = $('#restaurantSearch').val().trim();
      getYelpResults(search);
    });
  });

  