import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  moviesList: [],
  totalPage: null,
  type: 'TOP_POPULAR_MOVIES',
  params: {
    countries: 1,
    genres: 3,
    type: 'FILM',
  },
  keyword: ''
}

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setTypeMovies: (state, action) => {
      state.type = action.payload
    },
    setParams: (state, action) => {
      state.params = action.payload
    },
    setKeywords: (state, action) => {
      state.keyword = action.payload
    },
  },
})

export const { setTypeMovies, setParams, setKeywords } = moviesSlice.actions

export default moviesSlice.reducer