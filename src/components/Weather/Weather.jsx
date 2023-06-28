import Time from "../Time/Time";
import { useState, useEffect } from "react";

const Weather = () => {
  const [weatherData, setWeatherData] = useState({
    icon: undefined,
    temp: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined,
  });

  useEffect(() => {
    const API_KEY = "95374f25361fb576cf0a39772fa1063d";

    const getWeatherByLocation = async (latitude, longitude) => {
      const api_url = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
      );
      const data = await api_url.json();
      console.log(data);
      const sunrise = new Date(data.sys.sunrise * 1000);
      const sunset = new Date(data.sys.sunset * 1000);

      const sunRiseDate = sunrise.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      const sunSetDate = sunset.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      setWeatherData({
        icon: data.weather[0].icon,
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        sunrise: sunRiseDate,
        sunset: sunSetDate,
        error: undefined,
      });
    };

    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      getWeatherByLocation(latitude, longitude);
    });
  }, []);

  const temperatureCelsius = weatherData.temp - 273.15;

  return (
    <div className="weather">
      {weatherData.city !== undefined && weatherData.city !== null && (
        <div className="weather_block">
          <div className="weather_block_loc-time">
            <Time />
            <p className="weather_block_loc-time_location">
              {weatherData.country}, {weatherData.city}
            </p>
          </div>
          <div className="weather_block_info">
            <p className="weather_block_info_temp">
              {temperatureCelsius.toFixed()}°C
            </p>
            {weatherData.icon && (
              <img
                src={`http://openweathermap.org/img/w/${weatherData.icon}.png`}
                alt="Weather Icon"
                className="weather_block_info_icon"
              />
            )}
          </div>
          <div className="weather_block_sun">
            <p className="weather_block_sun_rise">
              <span>Sunrise: </span>
              {weatherData.sunrise}
            </p>
            <p className="weather_block_sun_set">
              <span>Sunset: </span>
              {weatherData.sunset}
            </p>
          </div>
        </div>
      )}
      <p>{weatherData.error}</p>
    </div>
  );
};

export default Weather;
