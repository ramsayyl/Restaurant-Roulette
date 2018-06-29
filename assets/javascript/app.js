var apiKey = "AIzaSyDtEQyAHcZKcZ0Vy3D-pun5B40xHK0Im0Q";
var latitude = "43.923567";
var longitude = "-79.469319";
var queryURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=" + apiKey + "&location=" + latitude + "," + longitude + "&rankby=distance&name=food";
var open = false;

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response){
  console.log(response.results)
  for (var i = 1; i <= 5; i++) {
    if (response.results[i].name != response.results[i+1].name){

    console.log(i + ". " + response.results[i].name);
    console.log("Address: " + response.results[i].vicinity)
    console.log("Rating: " + response.results[i].rating)
    console.log("Open Now: " + response.results[i].opening_hours.open_now + "\n\n")

    }
  }
});
