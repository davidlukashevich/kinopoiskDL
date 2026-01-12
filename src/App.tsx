import { Route, Routes } from "react-router-dom"
import LayoutContainer from "./components/Layout/LayoutContainer"
import FavoritesFimsPage from "./pages/FavoritesFimsPage"
import FilmDetailsPage from "./pages/FilmDetailsPage"
import HomePage from "./pages/HomePage"
import OpinionsFilmsPage from "./pages/OpinionsFilmsPage"
import SearchFilmsPage from "./pages/SearchFilmsPage"

const App = () => {
  return (
    <LayoutContainer>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchFilmsPage />} />
        <Route path="/details/:id" element={<FilmDetailsPage />} />
        <Route path="/favorites" element={<FavoritesFimsPage />} />
        <Route path="/opinions/:id" element={<OpinionsFilmsPage />} />
      </Routes>
    </LayoutContainer>
  )
}

export default App