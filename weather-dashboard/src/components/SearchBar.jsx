import { useState } from "react";

function SearchBar({ fetchWeather }) {

  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather(city);
  };

  return (
    <form onSubmit={handleSubmit} className="search">

      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button>Search</button>

    </form>
  );
}

export default SearchBar;