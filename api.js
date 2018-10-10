// Initialize Firebase
//  var config = {
//     apiKey: "AIzaSyB3eeTG-k90XeTpkLQMtWSsM49BzYPN7sk",
//     authDomain: "football-pick-em-database.firebaseapp.com",
//     databaseURL: "https://football-pick-em-database.firebaseio.com",
//     projectId: "football-pick-em-database",
//     storageBucket: "football-pick-em-database.appspot.com",
//     messagingSenderId: "212615932650"
//   };
//   firebase.initializeApp(config);

var database = firebase.database()
var key;
var week;
var forms = document.forms[0]
var userPicks = [];
var firstName;
var lastName;
var fullName = firstName + " " + lastName
var email;




//ajax call

var makeForm = function () {
    var queryURL = "https://cors-anywhere.herokuapp.com/https://api.sportradar.us/nfl/official/trial/v5/en/games/2018/REG/" + week + "/schedule.json?api_key=2z3ka47unvvsngr39h4zpbjw"
    $.ajax({
        method: "GET",
        url: queryURL,



    }).then(function (response) {
        console.log(response)
        var games = response.week.games

        for (let i = 0; i < games.length; i++) {
            var newCol = $("<div>").attr("class", "column")
            var newCard = $("<div>").attr("class", "card")
            var newP = $("<p>")
            var newChoice = $("<form>").attr("class", "choice").attr("id", "game" + (i + 1))
            $(newChoice).append($("<input>").attr("class", 'option').attr("type", "radio").attr("name", "option").attr("value", games[i].away.name)).append(games[i].away.name)
            $(newChoice).append("<br>")
            $(newChoice).append("at")
            $(newChoice).append("<br>")
            $(newChoice).append($("<input>").attr("class", 'option').attr("type", "radio").attr("name", "option").attr("value", games[i].home.name)).append(games[i].home.name)
            $(newP).append(newChoice)
            $(newCard).append($("<h3>").text("Pick " + (i + 1)))
            $(newCard).append(newP)
            $(newCol).append(newCard)
            $("#modalDynamic").append(newCol)
            $("#weekPicks").text("Week " + week + " Picks")





        }

        var form = $("<form>")
        var firstNameInput = $("<input>").attr("type", "text").attr("name", "fname").attr("id", "firstName")
        var lastNameInput = $("<input>").attr("type", "text").attr("name", "lname").attr("id", "lastName")
        var emailInput = $("<input>").attr("type", "text").attr("name", "lname").attr("id", "email")
        $("#modalFoot").append(form)
        $(form).append("First Name: ")
        $(form).append(firstNameInput)
        $(form).append($("<br>"))
        $(form).append("Last Name: ")
        $(form).append(lastNameInput)
        $(form).append($("<br>"))
        $(form).append("Email: ")
        $(form).append(emailInput)
        $("#modalFoot").append($("<button>").attr("class", "btn btn-danger").attr("id", "modalSubmit2").attr("data-target", "#statModal").text("Submit"))

    })
}
//ajax call that makes table
var makeTable = function () {
    var queryURL = "https://cors-anywhere.herokuapp.com/https://api.sportradar.us/nfl/official/trial/v5/en/games/2018/REG/" + week + "/schedule.json?api_key=2z3ka47unvvsngr39h4zpbjw"
    $.ajax({
        method: "GET",
        url: queryURL,



    }).then(function(response){
        console.log(response)
        var games = response.week.games
        var newTableInfo = $("<tr>").attr("class", "table-info")
        for(var i = 0; i<games.length;i++){
            $(newTableInfo).append($("<th>").attr("scope", "col").text(games[i].away.name+" at "+games[i].home.name))
            $("#statsHead").append(newTableInfo)
        }
    })
}


//Join Pool Submit Button
$(document).on("click", "#modalSubmit1", function (event) {
    event.preventDefault()
    if ($("#keyInput").val().length < 10) {
        return false
    } else {
        key = $("#keyInput").val().trim()

        database.ref("/pools/" + key + '/gameWeek').once('value', function (snapshot) {
            console.log(snapshot)
            week = snapshot.val()
            console.log(week)
            makeForm()
        })





        $("#modalFoot").html("")

    }


})
// Pick Submit Button
$(document).on("click", "#modalSubmit2", function () {


    var radios = document.getElementsByName('option');

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked === true) {
            userPicks.push(radios[i].value)
        }

    }
    firstName = $('#firstName').val().trim()

    lastName = $('#lastName').val().trim()

    email = $("#email").val().trim()
    for (var i = 0; i < userPicks.length; i++) {
        database.ref("/pools/" + key + "/name/" + firstName + "_" + lastName).push({
            [i]: userPicks[i]
        })
    }
    $("#weekPicks").html("Join a Pool")
    $("#modalDynamic").html("")
    $("#modalFoot").html("")
    var newForm = $("<form>")
    $(newForm).html("Enter Pool Key: ")
    $(newForm).append($("<input>").attr("type", "text").attr("name", "key").attr("id", "keyInput"))
    $("#modalFoot").append(newForm)

    $("#modalFoot").append($("<button>").attr("type", "button").attr("class", "btn btn-danger").attr("id", "modalSubmit1").text("Submit"))
})
//stat submit button
$(document).on("click", "#statSubmit", function () {
    if ($("#keyInput2").val().length < 10) {
        return false
    } else {
        key = $("#keyInput2").val().trim()
        database.ref("/pools/" + key + '/gameWeek').once('value', function (snapshot) {
            console.log(snapshot)
            week = snapshot.val()
            makeTable()

        })
        

    }
})


