//initial array of emotions
var emotions = ["mad", "glad", "happy", "sad", "cry"];

// function that displays var emotions buttons
function renderButtons() {
    //deletes buttons before adding new buttons to not repeat buttons
    $("#btnView").empty();
    //loop through array of emotions gifs
    for (var i = 0; i < emotions.length; i++) {
        //dynamically create buttons for each emotion in the emotions array
        var btnCreate = $("<button>").addClass("emotionBtn").attr("data-name", emotions[i]).text(emotions[i]);
        //append buttons to the HTML
        $("#btnView").append(btnCreate);
    }
}
function displayGif() {
    //grabs/stores the data-name property value from the button
    var gifName = $(this).attr("data-name");
    //construct  URL
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + emotions + "&api_key=E0zudOooNauIANaX1Y4bm8INlqYkIjap&limit=10";
    // hit the queryURL with $ajax, then take the response data
    // and display it in the div with an id of gif-view
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        //after data returns from request
        .then(function (response) {
            console.log("response" + response);

            //store data from AJAX request to results
            var results = response.data;

            for (var i = 0; i < results.length; i++) {
                // //holds gif
                var gifDiv = $("<div>").addClass("holdsGif");

                //stores rating data to givenRate
                var givenRate = results[i].rating;
                console.log("rating " + givenRate);

                //element to display rating
                var displayRating = $("<p>").text("Rating: " + givenRate);

                //create element that holds image
                var gifImage = $("<img>").attr("src", imgURL);

                //retrieve URL for image
                var imgURL = results[i].images.fixed_height.url;

                //appends image
                gifDiv.append(gifImage);
                //display rating
                gifDiv.append(displayRating);

                //puts entire thing above the previous gif
                $("#actualGifs").prepend(gifDiv);
            };
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