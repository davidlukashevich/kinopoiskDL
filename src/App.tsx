import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LayoutContainer from "./components/Layout/LayoutContainer";
import HomePage from "./pages/HomePage";

const SearchFilmsPage = lazy(() => import("./pages/SearchFilmsPage"));
const FilmDetailsPage = lazy(() => import("./pages/FilmDetailsPage"));
const FavoritesFimsPage = lazy(() => import("./pages/FavoritesFimsPage"));
const OpinionsFilmsPage = lazy(() => import("./pages/OpinionsFilmsPage"));

const App = () => {
  return (
    <LayoutContainer>
      <Suspense fallback={<div className="p-6 text-center">Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchFilmsPage />} />
          <Route path="/details/:id" element={<FilmDetailsPage />} />
          <Route path="/favorites" element={<FavoritesFimsPage />} />
          <Route path="/opinions/:id" element={<OpinionsFilmsPage />} />
        </Routes>
      </Suspense>
    </LayoutContainer>
  );
};

export default App;