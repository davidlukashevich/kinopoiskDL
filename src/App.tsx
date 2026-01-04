import { Route, Routes } from "react-router-dom"
import LayoutContainer from "./components/Layout/LayoutContainer"
import FavoritesPage from "./pages/FavoritesPage"
import FilmDetailsPage from "./pages/FilmDetailsPage"
import HomePage from "./pages/HomePage"
import OpinionsPage from "./pages/OpinionsPage"
import SearchPage from "./pages/SearchPage"

const App = () => {
  return (
    <LayoutContainer>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/details/:id" element={<FilmDetailsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/opinions" element={<OpinionsPage />} />
      </Routes>
    </LayoutContainer>
  )
}

export default App