import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/home";
import { Details } from "../pages/details";
import { Favorites } from "../pages/favorites/Favorites";

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
