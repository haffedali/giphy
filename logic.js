



var searchTerm;


$("#gif-search").on("click", function(event) {
    event.preventDefault();
    searchTerm = $("#gif-text").val();
    console.log(searchTerm);
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=dc6zaTOxFJmzC"
    var btn = $("<button>");
    btn.text(searchTerm);
    $("#button-bar").append(btn);
    $.ajax({
        url: queryURL,
        method:"GET"
    }).then(function(response){
        console.log(response);
        console.log(queryURL);
        for (var i=0; i<4; i++) {
            var gif = response.data[i].images.fixed_height.url;
            var gifImg = $("<img>");
            gifImg.attr("src", gif);
            $("#gifs").append(gifImg);
        }

    });
})