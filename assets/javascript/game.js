//initial array of emotions
var emotions = ["mad", "glad", "happy", "sad", "cry", "angry", "hope", "help"];

// function that displays var emotions buttons
function renderButtons() {
    //deletes buttons before adding new buttons to not repeat buttons
    $("#gifs-view").empty();
    //loop through array of emotions gifs
    for (var i=0; i <emotions.length; i++) {  
        //dynamically create buttons for each emotion in the emotions array
        var btnCreate = $("<button>").addClass("gifEmotion").attr("data-name", emotions[i]).text(emotions[i]);
        //append buttons to the HTML
        $("#gifs-view").append(btnCreate);
    }
}
renderButtons();

function displayGif() {
    // var gifName = $(this).attr("data-name");
    //construct  URL
    var queryURL =  "http://api.giphy.com/v1/gifs/search?q=" + emotions+ "&api_key=E0zudOooNauIANaX1Y4bm8INlqYkIjap&limit=5";

    // hit the queryURL with $ajax, then take the response data
    // and display it in the div with an id of gif-view
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        console.log("response");
        console.log(response);
    })
}
displayGif();

          // Creating a div to hold the movie
          var emotionDiv = $("<div>").addClass("emo");
 
          // Storing the rating data
        //   var rating = response.Rated;

          // Creating an element to have the rating displayed
        //   var pOne = $("<p>").text("Rating: " + rating);

          // Displaying the rating
        //   movieDiv.append(pOne);

        
        //   // Retrieving the URL for the image
        //   var imgURL = response.Poster;

        //   // Creating an element to hold the image
        //   var image = $("<img>").attr("src", imgURL);

        //   // Appending the image
        //   movieDiv.append(image);

        //   // Putting the entire movie above the previous movies
        //   $("#movies-view").prepend(movieDiv);
        // });

      
