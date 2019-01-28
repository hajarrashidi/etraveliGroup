export default {
  createFilm
}

function createFilm (film) {
  return {
    id: film.id,
    title: film.fields.title,
    episode: film.fields.episode_id,
    year: film.fields.release_date,
    about: film.fields.opening_crawl,
    director: film.fields.director
  }
}
