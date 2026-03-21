import axios from "axios";

const API_KEY = "9d8ca3f9d245c8fb159b295841d6b71a";

export const getWeather = async (city) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );

  return response.data;
};