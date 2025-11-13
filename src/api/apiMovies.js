import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY
const BASE_URL = import.meta.env.VITE_MOVIE_BASE_URL
const BASE_URL_STAFF = import.meta.env.VITE_MOVIE_BASE_URL_STAFF
const BASE_URL_KEYWORD = import.meta.env.VITE_MOVIE_BASE_URL_KEYWORD

export const getPopularMovies = async (type, page = 1) => {
  try {
    const response = await axios.get(`${BASE_URL}/collections`, {
      headers: {
        'Content-Type': 'application/json ',
        'X-API-KEY': API_KEY
      },
      params: {
        type,
        page
      }
    })

    return response.data
  } catch (error) {
    console.log(error);
  }
}


export const getMovieById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`, {
      headers: {
        'Content-Type': 'application/json ',
        'X-API-KEY': API_KEY
      },

    })

    return response.data
  } catch (error) {
    console.log(error);
  }
}

export const getStaffMovie = async (id) => {
  try {
    const response = await axios.get(BASE_URL_STAFF, {
      headers: {
        'Content-Type': 'application/json ',
        'X-API-KEY': API_KEY
      },
      params: {
        filmId: id
      }
    })

    return response.data
  } catch (error) {
    console.log(error);
  }
}


export const getImagesMovie = async (id, type) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}/images`, {
      headers: {
        'Content-Type': 'application/json ',
        'X-API-KEY': API_KEY
      },
      params: {
        type
      }
    })

    return response.data.items
  } catch (error) {
    console.log(error);
  }
}

export const getSimilarMovie = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}/similars`, {
      headers: {
        'Content-Type': 'application/json ',
        'X-API-KEY': API_KEY
      },
    })

    return response.data
  } catch (error) {
    console.log(error);
  }
}
export const getMovieFilters = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/filters`, {
      headers: {
        'Content-Type': 'application/json ',
        'X-API-KEY': API_KEY
      },
    })

    return response.data
  } catch (error) {
    console.log(error);
  }
}

export const getMoviesByFilters = async (params, page = 1) => {
  try {
    const response = await axios.get(BASE_URL, {
      headers: {
        'Content-Type': 'application/json ',
        'X-API-KEY': API_KEY
      },
      params: {
        ...params,
        page
      }
    })

    return response.data
  } catch (error) {
    console.log(error);
  }
}
export const getMoviesByKeyword = async (keyword, page = 1) => {
  try {
    const response = await axios.get(BASE_URL_KEYWORD, {
      headers: {
        'Content-Type': 'application/json ',
        'X-API-KEY': API_KEY
      },
      params: {
        keyword,
        page
      }
    })

    return response.data
  } catch (error) {
    console.log(error);
  }
}