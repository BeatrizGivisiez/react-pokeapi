import React from "react";

import { Header } from "../../shared/components/Header";
import { FavoriteList } from "../../shared/components/FavoriteList";
import { Footer } from "../../shared/components/Footer";

export const Favorites: React.FC = () => {
  return (
    <>
      <Header />
      <FavoriteList />
      <Footer />
    </>
  );
};
