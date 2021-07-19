import React, { useEffect, useState } from "react";
import axios from "axios";
import { ForecastContainer, TempTile, WeatherInfo } from "./Dashboard.styles";

const Forecast = () => {
  const [currentTemp, setCurrentTemp] = useState("");
  const [condition, setCondition] = useState("");
  const [forecast, setForecast] = useState([]);

  const fetchForecast = async () => {
    const res = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=auto:ip`
    );
    const forecastRes = await axios.get(
      `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=auto:ip`
    );

    setCondition(res.data.current.condition.text);
    setCurrentTemp(String(res.data.current.temp_f));
    setForecast(forecastRes.data.forecast.forecastday);
  };

  useEffect(() => {
    fetchForecast();
  }, []);

  const tempRange = {
    max: String(forecast[0].day.maxtemp_f),
    min: String(forecast[0].day.mintemp_f),
  };

  return (
    <ForecastContainer>
      <WeatherInfo>{condition}</WeatherInfo>
      <TempTile>
        <div className="temps">
          <h3>{currentTemp.substring(0, 2)}°</h3>
          <div className="temp-range">
            <span>H:{tempRange.max.substring(0, 2)}</span>
            <span>L:{tempRange.min.substring(0, 2)}</span>
          </div>
        </div>
      </TempTile>
    </ForecastContainer>
  );
};

export default Forecast;
