import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  weatherData: {},
  weatherForcast: [],
  lastUpdate: "04:26",
  allCities: [],
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setWeather: (state, action) => {
      state.weatherData = action.payload;
      state.lastUpdate = new Date().toTimeString().slice(0, 5);
    },
    setWeatherForcast: (state, action) => {
      state.weatherForcast = action.payload;
    },
    addCity: (state, action) => {
      state.allCities = [...state.allCities, action.payload];
      localStorage.setItem("cities", JSON.stringify(state.allCities));
    },
    removeCity: (state, action) => {
      state.allCities = state.allCities.filter(city => city !== action.payload);
      localStorage.setItem("cities", JSON.stringify(state.allCities));
    },
    setCity: (state, action) => {
      state.allCities = action.payload;
    },
  },
});

export const { setWeather, setWeatherForcast, addCity, setCity, removeCity } = weatherSlice.actions;

export default weatherSlice;
