export const getSingleMovie = (movies, id) => {
  if (!movies) return
  const item = movies.filter(movie => movie.kinopoiskId === Number(id))

  return item
}