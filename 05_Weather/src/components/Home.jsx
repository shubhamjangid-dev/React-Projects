import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCity, removeCity } from "../store/weatherSlice";
import Icon from "./Icon";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cities = useSelector(state => state.weather.allCities);
  useEffect(() => {
    if (cities.length == 0) {
      const arr = JSON.parse(localStorage.getItem("cities"));
      dispatch(setCity(arr));
    }
  }, []);

  const [cityName, setCityName] = useState("");
  return (
    <div className="w-full min-h-screen flex justify-center bg-gradient-to-br from-cyan-500 to-blue-500 p-8">
      <div className="w-full lg:w-1/2 md:w-3/4">
        <h1 className="text-5xl sm:text-7xl text-white">Weather App</h1>
        <div className=" w-full h-11 flex my-8 mx-auto">
          <input
            className="w-full rounded-l-lg outline-none pl-2"
            type="text"
            value={cityName}
            placeholder="Search a city"
            onChange={e => {
              setCityName(e.target.value);
            }}
          />
          <button
            onClick={() => {
              if (cityName !== "") navigate(`/weather/${cityName}`);
            }}
            className="bg-white rounded-r-lg px-2"
          >
            <Icon prop="search" />
          </button>
        </div>
        <div className="w-full">
          {cities.map(city => (
            <div
              id={city}
              className="text-white bg-black/10 w-full text-left flex justify-between my-1 py-2 px-4 rounded-lg"
            >
              <button
                onClick={() => {
                  navigate(`/weather/${city}`);
                }}
                className="text-left w-full text-xl"
              >
                {city}
              </button>
              <button
                onClick={() => {
                  dispatch(removeCity(city));
                }}
              >
                <Icon prop="delete" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
