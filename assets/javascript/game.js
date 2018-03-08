//initial array of emotions
var emotions = ["mad", "glad", "happy", "sad", "cry"];

// function that displays var emotions buttons
function renderButtons() {
    //deletes buttons before adding new buttons to not repeat buttons
    $("#gifs-view").empty();
    //loop through array of emotions gifs
    for (var i = 0; i < emotions.length; i++) {
        //dynamically create buttons for each emotion in the emotions array
        var btnCreate = $("<button>").addClass("emotionBtn").attr("data-name", emotions[i]).text(emotions[i]);
        //append buttons to the HTML
        $("#gifs-view").append(btnCreate);
    }
}

function displayGif() {
    var gifName = $(this).attr("data-name");
    //construct  URL
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + emotions + "&api_key=E0zudOooNauIANaX1Y4bm8INlqYkIjap&limit=10";
    // hit the queryURL with $ajax, then take the response data
    // and display it in the div with an id of gif-view
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log("response");
        console.log(response);

        for (var i = 0; i < 11; i++) {
            //holds gif
            var gifDiv = $("<div>").addClass("holdsGif");

            //stores rating data to givenRate
            var givenRate = response.data[i].rating;
            console.log("rating " + givenRate);

            //element to display rating
            var displayRating = $("<p>").text("Rating: " + givenRate);

            //display rating
            $(".actualGifs").append(displayRating);
        }

        //retrieve URL for image

        var imgURL = response.data[i].images;
        alert("Image" + imgURL);

        // // Creating an element to hold the image
        // var image = $("<img>").attr("src", imgURL);

        // // Appending the image
        // movieDiv.append(image);

        // // Putting the entire movie above the previous movies
        // $("#movies-view").prepend(movieDiv);
    });
}
displayGif();

//.on("click") function will trigger the AJAX Call
$("#add-gif").on("click", function (event) {
    // Here, it prevents the submit button from trying to submit a form when clicked
    event.preventDefault();

    // grab the text from the input box and assigns it to the variable gif
    var gif = $("#gif-input").val().trim();

    //emotion added to textbox is added to var emotions array
    emotions.push(gif);

    //call renderButtons that processes emotions array
    renderButtons();
});
// function to display gif info, on click added to elements with the class emotionBtn
$(document).on("click", ".emotionBtn", displayGif);
//calling renderButtons function to initially display list of gifs
renderButtons();//initial array of emotions


