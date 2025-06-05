import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleClick = () => {
    if (city.trim() !== "") {
      onSearch(city);
    }
  };

  return (
    <div className="searchbar">
      <h1>Pesquise uma cidade.</h1>
      <div className="searchbar__container">
        <input
          placeholder="Ex.: São Paulo, Rio de Janeiro, etc..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="search-button" onClick={handleClick}>
          <span class="lupa"></span>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
