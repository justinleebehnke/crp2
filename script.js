var idsOfMyFavJokes = [ //I chose to filter because not all were completely clean jokes
  449,
  451,
  456,
  458,
  459,
  461,
  462,
  463,
  464,
  467,
  469,
  474,
  475,
  477,
  478,
  480,
  481,
  487,
  489,
  493,
  498,
  499,
  507,
  509,
  517,
  520,
  525,
  528,
  530,
  532,
  535,
  536,
  542,
  544,
  558,
  567];
$(document).ready(function() {
  $("#image").click(function(e) {
    $("#jokeResults").html("<h1>Loading...</h1>");
    e.preventDefault();
    var randIndex = Math.floor(Math.random() * (idsOfMyFavJokes.length - 1));
    if (randIndex >= idsOfMyFavJokes.length || randIndex < 0) {
      randIndex = 0;
    }
    var myurl= "http://api.icndb.com/jokes/" + idsOfMyFavJokes[randIndex];
    $.ajax({
      url : myurl,
      dataType : "json",
      success : function(json) {
        var joke = json.value.joke;
        joke = joke.replace(/chuck/gi, 'Dr.');
        joke = joke.replace(/norris/gi, 'Zappala');
        joke = joke.replace(/&quot;/g,'"');
        var res = joke.replace(/\' /g, "\'s ");
        var results = "<h1>" + res + "</h1>";
        $("#jokeResults").html(results);
      }
    });
  });
});
