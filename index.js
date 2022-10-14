/*let request = 'https://swapi.dev/api/';

const resultGrid = */document.getElementById('movie-select').addEventListener('change', fetchEpisodeData);

function fetchEpisodeData(event) {
  fetch(`https://swapi.dev/api/films/${event.target.value}/`)
  .then((response) => response.json())
  .then((response) => displayInfo(response))
  .catch((err) => console.error(err));

}

function displayInfo(movieDetails) {
  cardContainer = document.getElementById('cardContainer');
  cardContainer.innerHTML = `<div class="card mb-4" style="width: 50rem; margin: auto;">
  <div class="card-body" >
    <img class="card-img-top" src="https://pbs.twimg.com/media/EikUsWkXYAE1Sct.jpg" alt="imagen" style="width: 40rem; margin: auto;"></img>

    <h4 class="card-title">${movieDetails.title}</h4>
    <h6 class="card-text">Episode: ${movieDetails.episode_id}</h6>
    <h6 class="card-text">Release Date: ${movieDetails.release_date}</h6>
    <h6 class="card-text">Director: ${movieDetails.director}</h6>
    <p class="card-text">${movieDetails.opening_crawl}</p>
    
    </div>
    </div>`;
}