//initial array of emotions
var emotions = ["mad", "glad", "happy", "sad", "cry", "angry", "hope", "help"];

   
function displayGif() {
    var gifName = $(this).attr("data-name");
    //construct  URL
    var queryURL = "https://www.omdbapi.com/?t=" + gif + "&y=&plot=short&apikey=trilogy";

    // hit the queryURL with $ajax, then take the response data
    // and display it in the div with an id of gif-view
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      $("#gifs-view").text(JSON.stringify(response));
    });
}
//function to capture the gif rating from data attribute
function gifEmotionName() {
    var gifName = $(this).attr("data-name");
    console.log(gifName);
}

//function that displays gif data
function renderButtons() {
    //deletes buttons before adding new buttons to not repeat buttons
    $("#gifs-view").empty();

    //loop through array of emotions gifs
    for (var i=0; i <emotions.length; i++) {
        //dynamically create buttons for each emotion in the emotions array
        var btnCreate = $("<button>").addClass("gifEmotion").attr("data-name", movies[i]).text(movies[i]);
        btnCreate.addClass("gifEmotion");
        //append buttons to the HTML
        $("#gifs-view").append(btnCreate)
    }
}
//.on("click") function will trigger the AJAX Call
$("#find-gif").on("click", function(event) {
    // Here, it prevents the submit button from trying to submit a form when clicked
    event.preventDefault();

    // grab the text from the input box and assigns it to the variable gif
    var gif = $("#gif-input").val().trim();

    //emotion added to textbox is added to var emotions array
    gif.push(emotions);

    //call renderButtons that processes emotions array
    renderButtons();
});
    // function to display gif info, on click added to elements with the class gifEmotion
    $(document).on("click", ".movie", gifEmotionName);
    //calling renderButtons function to initially display list of gifs
    renderButtons();