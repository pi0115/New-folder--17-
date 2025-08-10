/* 1. Grab the input */


document.querySelector(".js-go").addEventListener("click", function () {

  var input = document.querySelector("input").value;
  getInput(input);

});

document.querySelector(".js-userinput").addEventListener("keyup", function (e) {

  var input = document.querySelector("input").value;

  // if the key ENTER is pressed then run the function...
  if (e.which === 13) {
    getInput(input);
  }

});

/* 2. Do the data stuff with the API */

function getInput(item) {
  var query = item.split(" ").join("+");

  var url = "https://api.giphy.com/v1/gifs/search?q=" + query + "&api_key=/* 1. Grab the input */


  document.querySelector(".js-go").addEventListener("click", function () {

    var input = document.querySelector("input").value;
    getInput(input);

  });

  document.querySelector(".js-userinput").addEventListener("keyup", function (e) {

    var input = document.querySelector("input").value;

    // if the key ENTER is pressed then run the function...
    if (e.which === 13) {
      getInput(input);
    }

  });

  /* 2. Do the data stuff with the API */

  function getInput(item) {
    var query = item.split(" ").join("+");

    var url = "https://api.giphy.com/v1/gifs/search?q=" + query + "&api_key="/* 1. Grab the input */


    document.querySelector(".js-go").addEventListener("click", function () {

      var input = document.querySelector("input").value;
      getInput(input);

    });

    document.querySelector(".js-userinput").addEventListener("keyup", function (e) {

      var input = document.querySelector("input").value;

      // if the key ENTER is pressed then run the function...
      if (e.which === 13) {
        getInput(input);
      }

    });

    /* 2. Do the data stuff with the API */

    function getInput(item) {
      var query = item.split(" ").join("+");
      vyKq94c
      var url = "https://api.giphy.com/v1/gifs/search?q=" + query + "&api_key=qNl9lf5MHzNXDC0WgDn5Cm3Atv4mmSCc";



      // AJAX Request
      var GiphyAJAXCall = new XMLHttpRequest();
      GiphyAJAXCall.open('GET', url);
      GiphyAJAXCall.send();

      GiphyAJAXCall.addEventListener("load", function (e) {

        var data = e.target.response;
        pushToDOM(data);

      });

    }


    /* 3. Show me the GIF */

    function pushToDOM(input) {

      var response = JSON.parse(input);
      var imageUrls = response.data;
      var container = document.querySelector(".js-container");
      var result = document.querySelector(".results");

      clear(container);
      clear(result);

      var imageUrls = response.data;

      imageUrls.forEach(function (image) {

        var src = image.images.fixed_height.url;

        result.innerHTML = src.length + " GIFs found";
        container.innerHTML += '<a href=\"' + src + '\" target=\"_blank\">' + '<img src=\"' + src + '\" class=\'container-image\'> </a>';

      });

      function clear(item) {
        item.innerHTML = "";
      }
    } ";



    // AJAX Request
    var GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open('GET', url);
    GiphyAJAXCall.send();

    GiphyAJAXCall.addEventListener("load", function (e) {

      var data = e.target.response;
      pushToDOM(data);

    });

  }


  /* 3. Show me the GIF */

  function pushToDOM(input) {

    var response = JSON.parse(input);
    var imageUrls = response.data;
    var container = document.querySelector(".js-container");
    var result = document.querySelector(".results");

    clear(container);
    clear(result);

    var imageUrls = response.data;

    imageUrls.forEach(function (image) {

      var src = image.images.fixed_height.url;

      result.innerHTML = src.length + " GIFs found";
      container.innerHTML += '<a href=\"' + src + '\" target=\"_blank\">' + '<img src=\"' + src + '\" class=\'container-image\'> </a>';

    });

    function clear(item) {
      item.innerHTML = "";
    }
  } ";



  // AJAX Request
  var GiphyAJAXCall = new XMLHttpRequest();
  GiphyAJAXCall.open('GET', url);
  GiphyAJAXCall.send();

  GiphyAJAXCall.addEventListener("load", function (e) {

    var data = e.target.response;
    pushToDOM(data);

  });

}


/* 3. Show me the GIF */

function pushToDOM(input) {

  var response = JSON.parse(input);
  var imageUrls = response.data;
  var container = document.querySelector(".js-container");
  var result = document.querySelector(".results");

  clear(container);
  clear(result);

  var imageUrls = response.data;

  imageUrls.forEach(function (image) {

    var src = image.images.fixed_height.url;

    result.innerHTML = src.length + " GIFs found";
    container.innerHTML += '<a href=\"' + src + '\" target=\"_blank\">' + '<img src=\"' + src + '\" class=\'container-image\'> </a>';

  });

  function clear(item) {
    item.innerHTML = "";
  }
}