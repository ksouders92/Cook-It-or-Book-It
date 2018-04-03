 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyDuDS7XfpzkbwxeQaRG_rAYyKf0do-eFcs",
    authDomain: "cook-it-or-book-it.firebaseapp.com",
    databaseURL: "https://cook-it-or-book-it.firebaseio.com",
    projectId: "cook-it-or-book-it",
    storageBucket: "cook-it-or-book-it.appspot.com",
    messagingSenderId: "529934566796"
  };
  firebase.initializeApp(config);

  var db = firebase.database();


$(document).ready(function () {
  // submit button is an on click function that will store to firebase 
  $('#submit').on('click', function (event) {

      event.preventDefault();
      console.log("I've been clicked")
      // extract the contents of the snapshot as a JavaScript object by calling the val() method.
      var signUp = $('#inputEmail').val().trim();
      console.log(signUp)
     db.ref().push(signUp);
  })
})


$('.form-control').val('');
