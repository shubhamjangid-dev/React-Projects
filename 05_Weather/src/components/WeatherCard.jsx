import React, { useState, useEffect } from "react";
import InfoCard from "./InfoCard";
import Icon from "./Icon";
import Wind from "./Wind";
import Sun from "./Sun";
import { useDispatch, useSelector } from "react-redux";
import { setWeather, setWeatherForcast, addCity } from "../store/weatherSlice";
import { getCurrentWeatherData, getForcastedWeatherData } from "../OpenWeatherMap/Service";
import { useNavigate, useParams } from "react-router-dom";
import Forcast from "./Forcast";

function WeatherCard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { city } = useParams();

  // data from store
  const currentWeather = useSelector(state => state.weather.weatherData);
  const forcastedWeather = useSelector(state => state.weather.weatherForcast);
  const cities = useSelector(state => state.weather.allCities);

  const [isCelsius, setIsCelsius] = useState(true);

  const callApi = () => {
    getCurrentWeatherData(city, isCelsius).then(data => dispatch(setWeather(data)));
    getForcastedWeatherData(city, isCelsius).then(data => dispatch(setWeatherForcast(data)));
  };

  useEffect(() => {
    callApi();
  }, []);
  useEffect(() => {
    callApi();
  }, [isCelsius]);

  if (currentWeather.cod != 200) return <>{currentWeather.message}</>;
  return (
    <>
      <div className="w-full min-h-screen justify-center bg-gradient-to-br from-cyan-500 to-blue-500">
        <div className="w-full max-w-xl py-3 mx-auto rounded-2xl ">
          <div className="w-full flex justify-between px-4 pb-2  border-white/10 border-b-[1px]">
            <button
              onClick={() => {
                navigate("/");
              }}
              className="text-white"
            >
              <Icon prop="back" />
            </button>
            <div className="w-14 flex flex-row-reverse justify-between">
              <button
                onClick={() => {
                  setIsCelsius(prev => !prev);
                }}
                className="text-white"
              >
                &deg;{isCelsius ? "C" : "F"}
              </button>
              {cities.filter(ele => ele == city).length == 0 && (
                <button
                  onClick={() => {
                    dispatch(addCity(city));
                  }}
                  className="text-white"
                >
                  <Icon prop="add" />
                </button>
              )}
            </div>
          </div>
          <div className="w-full flex px-6 pt-1 text-white/90">
            <div className="w-1/2">
              <h1 className="text-3xl text-left sm:text-5xl">
                {currentWeather.name}, {currentWeather.sys.country}
              </h1>
              <h1 className="text-left text-md px-0.5 text-white/60">weather Today</h1>
              <h1 className="text-8xl sm:text-9xl text-left ">{Math.trunc(currentWeather.main.temp)}&deg;</h1>
              <h1 className="text-left text-3xl sm:text-4xl  ">{currentWeather.weather[0].main}</h1>
              <h1 className="text-left text-lg px-0.5 pb-3 text-white/60">{currentWeather.weather[0].description}</h1>
            </div>
            <div className="w-1/2 justify-center">
              <img
                src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
                alt=""
                className="w-full"
              />
            </div>
          </div>

          <Wind windData={{ ...currentWeather.wind, isCelsius: isCelsius }} />

          <div className="w-full flex flex-wrap justify-between pt-2 pb-4">
            <InfoCard {...{ name: "min Temp", value: Math.trunc(currentWeather.main.temp_min), unit: "" }} />
            <InfoCard {...{ name: "feels like", value: Math.trunc(currentWeather.main.feels_like), unit: "" }} />
            <InfoCard {...{ name: "max Temp", value: Math.trunc(currentWeather.main.temp_max), unit: "" }} />
            <InfoCard {...{ name: "humidity", value: currentWeather.main.humidity, unit: "%" }} />
            <InfoCard {...{ name: "pressure", value: currentWeather.main.pressure, unit: "mbar" }} />
            <InfoCard {...{ name: "visibility", value: currentWeather.visibility, unit: "m" }} />
          </div>

          <Sun sunData={currentWeather.sys} />

          <div className="w-full px-4 py-4">
            <div className="w-full text-white bg-white/10 rounded-lg">
              <div className="w-full px-4 flex justify-between text-xs text-white/40 py-1 ">5-day forcast</div>
              <div className="w-full pt-1 pb-2 flex justify-between  border-white/10 border-t-[1px]">
                {forcastedWeather &&
                  forcastedWeather.map(ele =>
                    ele.dt_txt.slice(11, 16) === "09:00" ? (
                      <div
                        className="w-1/6"
                        key={ele.dt_txt}
                      >
                        <Forcast data={ele} />{" "}
                      </div>
                    ) : null
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WeatherCard;
