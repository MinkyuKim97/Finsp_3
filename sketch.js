const form = document.getElementById('search-form');
const input = document.getElementById('search-input');
var imageResults;
var imageResultsText;
var finalResultImage;


console.log(input.value);
console.log(searchTerm);


form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent the form from submitting normally
  const searchTerm = input.value;

  fetch(
    //Change here to try different serach word

    'https://pinterest-pin-search.p.rapidapi.com/?r=search%2Fpinterest&keyword=' + input.value + '&offset=0',
    // 'https://pinterest-pin-search.p.rapidapi.com/?r=search%2Fpinterest&keyword=cat&offset=0',
    {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'aba4fca560msh8d207e61b3a7040p109c71jsn4340ed1c0f28',
        'X-RapidAPI-Host': 'pinterest-pin-search.p.rapidapi.com'
      }
    }
  ).then((response) => {
    if (response.ok) {
      console.log('Search results is ' + input.value);
      return response.json();
    } else {
      throw new Error('Error searching for results');
    }
  }).then((data) => {
    // do something with the search results, e.g. display them on the page
    // console.log("Hello! I'm here! ")
    for (let i = 0; i < i < manyActual - 1; i++) {
      console.log(data.result.results[searchAttempNum[i]].image_url);
    }
  }).catch((error) => {
    // console.log(error);
  });
});

///////This part is for actual search, but problem at API
///////This part is for actual search, but problem at API
///////This part is for actual search, but problem at API
///////This part is for actual search, but problem at API

for (let i = 0; i < i < manyActual - 1; i++) {
  imageResults = document.getElementById('getchaResults' + i);
  imageResults.innerHTML = ''; // Remove previous result
  finalResultImage = data.result.results[searchAttempNum[i]].image_url;
  // var finalResultImage = "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png";
  var imageUrl = finalResultImage;
  var imageElement = document.createElement('img');
  imageElement.src = imageUrl;
  imageResults.appendChild(imageElement);
  // imageResultsText.innerText = "cat";
}

