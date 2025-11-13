import { Route, Routes } from "react-router-dom"

import MainLayouts from "./layouts/MainLayouts"
import MainPage from "./pages/MainPage"
import MoviePage from "./pages/MoviePage"
import PopularListPage from "./pages/PopularListPage"
import MoviesByCategoriesPage from "./pages/MoviesByCategoriesPage"
import KeywordSearchPage from "./pages/KeywordSearchPage"
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage"
import Page404 from "./pages/Page404"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayouts />}>
          <Route path="" element={<MainPage />} />
          <Route path="movie/:id" element={<MoviePage />} />
          <Route path="movies/popular" element={<PopularListPage />} />
          <Route path="movies/by-category" element={<MoviesByCategoriesPage />} />
          <Route path="movies/search-by-keyword" element={<KeywordSearchPage />} />
          <Route path="movies/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </>

  )
}

export default App
