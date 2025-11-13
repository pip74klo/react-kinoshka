import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteList: JSON.parse(localStorage.getItem('movies')) || [],
}

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const film = state.favoriteList.find(item => item.id === action.payload.id)

      if (!film) {
        state.favoriteList = [action.payload, ...state.favoriteList]
        localStorage.setItem('movies', JSON.stringify(state.favoriteList))
      }
    },
    removeFavorite: (state, action) => {
      state.favoriteList = state.favoriteList.filter(item => item.id !== action.payload)
    },

  },
})

export const { addFavorite, removeFavorite } = favoritesSlice.actions

export default favoritesSlice.reducer