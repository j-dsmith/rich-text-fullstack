import React, { useEffect, useState } from "react";
import axios from "axios";
import { ForecastContainer, TempTile, WeatherInfo } from "./Dashboard.styles";

const Forecast = () => {
  const [currentTemp, setCurrentTemp] = useState("");
  const [condition, setCondition] = useState("");
  const [forecast, setForecast] = useState([]);
  const [currentCity, setCity] = useState("");
  // const [rainChance, ]

  const fetchTemps = async () => {
    const res = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=auto:ip`
    );

    setCondition(res.data.current.condition.text);
    setCurrentTemp(String(res.data.current.temp_f));
    setCity(res.data.location.name);
  };

  const fetchForecast = async () => {
    const res = await axios.get(
      `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=auto:ip`
    );

    setForecast(res.data.forecast.forecastday);
  };

  useEffect(() => {
    fetchForecast();
    fetchTemps();
  }, [currentTemp]);

  return (
    <ForecastContainer>
      <WeatherInfo>
        <h3>{currentCity}</h3>
        {condition}
      </WeatherInfo>
      <TempTile>
        <div className="temps">
          <h3>{currentTemp.substring(0, 2)}°</h3>
          <div className="temp-range">
            <span>
              H:
              {forecast[0]
                ? String(forecast[0].day.maxtemp_f).substring(0, 2)
                : "--"}
            </span>
            <span>
              L:
              {forecast[0]
                ? String(forecast[0].day.mintemp_f).substring(0, 2)
                : "--"}
            </span>
          </div>
        </div>
      </TempTile>
    </ForecastContainer>
  );
};

export default Forecast;
