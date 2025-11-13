import { configureStore } from '@reduxjs/toolkit'

import moviesReducer from './slice/moviesSlice'
import favoritesReducer from './slice/favoritesSlice'

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    favorites: favoritesReducer
  },
})