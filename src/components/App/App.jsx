import { Route, Routes } from "react-router-dom";

import FavoritesPage from "../../pages/FavoritesPage/FavoritesPage";
import HomePage from "../../pages/HomePage/HomePage";
import CatalogPage from "../../pages/CatalogPage/CatalogPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import CarDetailsPage from "../../pages/CarDetailsPage/CarDetailsPage";

import "./App.css";
import NavigationComponent from "../../NavigationComponent/NavigationComponent";
import RoutesComponent from "../../RoutesComponent/RoutesComponent";
// panelTruck --> Van icon
//fullyIntegrated --> Fully Integrated icon
//alcove --> Alcove icon

function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<CarDetailsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes> */}
      <NavigationComponent />
      <RoutesComponent />
    </>
  );
}

export default App;
