import React, { useState } from "react";
import SearchBar from "./assets/components/SearchBar.jsx";
import Card from "./assets/components/Card.jsx";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (cityName) => {
    const API_KEY = "API_KEY";
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          cityName
        )}&appid=${API_KEY}&units=metric&lang=pt_br`
      );

      if (!response.ok) {
        throw new Error("Cidade não encontrada.");
      }

      const data = await response.json();
      setWeatherData(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {error && <div className="message__error">{error}</div>}
      {weatherData && <Card data={weatherData} />}
    </div>
  );
};

export default App;
