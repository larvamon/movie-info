function addDrama() {
  const rowAction = $('#row-movie');
  const url = 'https://api.themoviedb.org/3/genre/18/movies?api_key=6cdc42661a2ffa0286928aa9ded5083e&language=en-US&include_adult=false&sort_by=created_at.asc';
  fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
      console.log(data.results);
      let movies = data.results
      return movies.map(function(movie) {
        var node = `
        <div class="col s12 m10">
          <div class="icon-block movie-row">
            <div class="col m4">
              <img src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}" class="movie-poster">
            </div>
            <div class="">
              <p class="font-title">${movie.title}</p>
            </div>
            <div class="col m8">
              <p class="font-content">
              <b>Rating :</b> ${movie.vote_average}
              <br>
              <b>Release Date :</b> ${movie.release_date}
              <br>
              <b>Overview :</b>
              <br>
              ${movie.overview}
              </p>
            </div>
          </div>
        </div>
            `
        rowAction.append(node);
      })
    })
    .catch(function(error) {
      console.log(JSON.stringify(error));
    });
}
