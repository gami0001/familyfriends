"use client";
import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import useFavorites from "./Favorite";

const Favorit = ({ id, breed }) => {
  const { favorites, setFavorites, removeFavorite } = useFavorites();
  if (favorites.some((favorite) => favorite.id === id)) {
    return (
      <MdFavorite
        size={24}
        className="text-red-500 cursor-pointer"
        onClick={() => {
          removeFavorite(id);
        }}
      />
    );
  } else {
    return <MdFavoriteBorder size={24} className="text-white cursor-pointer" onClick={() => {}} />;
  }
};

export default Favorit;
