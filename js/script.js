const apiKey = "qNl9lf5MHzNXDC0WgDn5Cm3Atv4mmSCc";
let offset = 0;
let isLoading = false;


function fetchGIFs(searchQuery) {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchQuery}&offset=${offset}`;

  return fetch(url)
    .then(response => response.json())
    .then(data => {
      offset += data.data.length;
      return data.data;
    });
}

function displayGIFs(gifs) {
  const gifContainer = document.getElementById("gifContainer");
  gifs.forEach(gif => {
    const gifImage = document.createElement("img");
    gifImage.src = gif.images.fixed_height.url;
    gifContainer.appendChild(gifImage);
  });
}


function searchGIFs() {
  const searchQuery = document.getElementById("searchInput").value.trim();
  if (!searchQuery) return; // Exit if search query is empty

  offset = 0; // Reset offset for new search
  isLoading = true;
  const gifContainer = document.getElementById("gifContainer");
  gifContainer.innerHTML = ""; // 
  fetchGIFs(searchQuery)
    .then(gifs => {
      displayGIFs(gifs);
      isLoading = false;
    })
    .catch(error => {
      console.error(error);
      isLoading = false;
    });
}

document.getElementById("searchInput").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    searchGIFs();
  }
});


window.addEventListener("scroll", function () {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight && !isLoading) {
    isLoading = true;
    searchGIFs();
  }
});

document.getElementById("searchButton").addEventListener("click", function () {
  searchGIFs();
});
