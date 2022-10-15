/*let request = 'https://swapi.dev/api/';

const resultGrid = */document.getElementById('movie-select').addEventListener('change', fetchEpisodeData);

function fetchEpisodeData(event) {
  fetch(`https://swapi.dev/api/people/${event.target.value}/`)
  .then((response) => response.json())
  .then((response) => displayInfo(response))
  .catch((err) => console.error(err));

}


function displayInfo(movieDetails) {
  cardContainer = document.getElementById('cardContainer');
  cardContainer.innerHTML = `<div class="card mb-4" style="width: 50rem; margin: auto;">
  <div class="card-body" >
    <img class="card-img-top" src="https://pbs.twimg.com/media/EikUsWkXYAE1Sct.jpg" alt="imagen" style="width: 40rem; margin: auto;"></img>

    <h2 class="card-title">${movieDetails.name}</h2>
    <h4 class="card-text">Height: ${movieDetails.height} cm</h4>
    <h4 class="card-text">Mass: ${movieDetails.mass} kg</h4>
    <h4 class="card-text">Hair color: ${movieDetails.hair_color}</h4>
    <h4 class="card-text">Skin color: ${movieDetails.skin_color}</h4>
    <h4 class="card-text">Eye color: ${movieDetails.eye_color}</h4>
    <h4 class="card-text">Birth year: ${movieDetails.birth_year}</h4>
    <h4 class="card-text">Gender: ${movieDetails.gender}</h4>     
    
    </div>
    </div>`;
}

//<p class="card-text">${movieDetails.opening_crawl}</p> 