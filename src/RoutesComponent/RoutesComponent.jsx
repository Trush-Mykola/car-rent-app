import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage/HomePage";
import CatalogPage from "../pages/CatalogPage/CatalogPage";
import CarDetailsPage from "../pages/CarDetailsPage/CarDetailsPage";
import FavoritesPage from "../pages/FavoritesPage/FavoritesPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import CarFeaturesPage from "../pages/CarFeaturesPage/CarFeaturesPage";
import CarReviewsPage from "../pages/CarReviewsPage/CarReviewsPage";

const RoutesComponent = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id/*" element={<CarDetailsPage />}>
          <Route path="features" element={<CarFeaturesPage />} />
          <Route path="reviews" element={<CarReviewsPage />} />
        </Route>
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
  );
};

export default RoutesComponent;
