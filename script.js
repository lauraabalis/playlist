$(document).ready(function() {

  $.ajax({
    url: "https://lit-fortress-6467.herokuapp.com/object"
  }).done(function(data) {
    var arr = data.results;
    var threeCovers = [];
    var allCovers = [];

    for (var i = 0; i < arr.length; i++) {
      allCovers.push(arr[i].cover_art);
    }

    var counter = 0;
    while (threeCovers.length < 3) {
      var randomCover = Math.floor(Math.random() * arr.length);
      if (threeCovers.indexOf(allCovers[randomCover]) === -1) {
          threeCovers.push(allCovers[randomCover]);
          $("#albums").append(`<img src="images/${allCovers[randomCover]}">`);
      }
      counter++;
    }

    for (var j = 0; j < allCovers.length; j++) {
      $("#allAlbums").append(`<img src="images/${allCovers[j]}">`);
    }

    $("#clear").click(function() {
      $("#albumContent").empty();
    });

    $("#allAlbums img").click(function() {
        var cover = $(this).attr("src");
        for (var k = 0; k < arr.length; k++) {
          if (cover === "images/" + arr[k].cover_art) {
            $("#albumContent").append(`<div>${arr[k].artist}: ${arr[k].title}</div>`);
          }
        }
    });

  });

  $.post("https://lit-fortress-6467.herokuapp.com/post", function(data) {
    console.log(data);
  });

});
