import { useFetch } from "./useFetch"
import { getImagesMovie, getMovieById, getSimilarMovie, getStaffMovie } from "../../api/apiMovies"

export const useMoviePageData = (id) => {
  const movie = useFetch(getMovieById, id)
  const staff = useFetch(getStaffMovie, id)
  const images = useFetch(getImagesMovie, id, 'STILL')
  const similar = useFetch(getSimilarMovie, id)

  return { movie, staff, images, similar }
}