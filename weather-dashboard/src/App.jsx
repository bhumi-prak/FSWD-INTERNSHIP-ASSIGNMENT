import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import { getWeather } from "./services/weatherService";
import "./styles/Weather.css";

function App() {

  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async (city) => {

    try {
      setLoading(true);
      setError("");

      const data = await getWeather(city);
      console.log(data);   // check what API returns

      if (data.cod !== 200) {
        setError("City not found");
        setWeather(null);
      } else {
        setWeather(data);
      }
    } catch {
      setError("City not found!");
    }

    setLoading(false);
  };

  return (
    <div className="app">

      <h1>🌦 Weather Dashboard</h1>

      <SearchBar fetchWeather={fetchWeather} />

      {loading && <Loader />}

      {error && <ErrorMessage message={error} />}

      {weather && <WeatherCard weather={weather} />}

    </div>
  );
}

export default App;