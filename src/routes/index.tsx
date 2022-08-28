import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/home";
import { Pokemon } from "../pages/pokemon";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemon" element={<Pokemon />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
