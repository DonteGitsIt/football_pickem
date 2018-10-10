// Initialize Firebase
var config = {
    apiKey: "AIzaSyB3eeTG-k90XeTpkLQMtWSsM49BzYPN7sk",
    authDomain: "football-pick-em-database.firebaseapp.com",
    databaseURL: "https://football-pick-em-database.firebaseio.com",
    projectId: "football-pick-em-database",
    storageBucket: "football-pick-em-database.appspot.com",
    messagingSenderId: "212615932650"
  };
  firebase.initializeApp(config);
  
  var database = firebase.database();

  $(document).ready(function(){

    //Current week
    var currentWeek = 4 //get currect week from database
    $("select > .option").each(function(){
     var week = parseInt($(this).attr("value"))
     if(week < currentWeek){
      $(this).css("display", "none")

     }
     else {
       console.log("more than")
     }
    })
  
  // Verify email address
  function checkEmail() {

      var email = document.getElementById('txtEmail');
      var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

      if (!filter.test(email.value)) {
        alert('Please provide a valid email address');
        email.focus;
        return false;
    }
    return true
  }


  // Button for adding admin
  $("#add-id-btn").on("click", function(event) {
    event.preventDefault();
    $(this).attr("disabled", true);

    if(checkEmail()){
      $(this).attr("disabled", false);
    
    }

    else{
      return //error handleing for email

    }

    console.log($("#gameWeek").val())
    console.log(checkEmail())

     // Creates local "temporary" object for holding employee data
    var newId = {
      name: "gameId",
      gameWeek: $("#gameWeek").val(),

    };

    $("#gameWeek").val("")
    $("#txtEmail").val("")
    $("#txtName").val("")


  // Uploads data to the database
   database.ref('/pools/').push(newId);

   database.ref('/pools/').on("child_added", function(childSnapshot) {
    console.log(childSnapshot.key);
    $("#newId").text("Your pool key: "+childSnapshot.key)

  }) 

  })

   

})