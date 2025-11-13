export const formatDataMovie = (data) => {
  const { kinopoiskId, nameRu, description, posterUrl, genres, year, countries } = data

  const dataMovie = {
    id: kinopoiskId,
    nameRu,
    description,
    posterUrl,
    genres,
    countries,
    year
  }

  return dataMovie
}