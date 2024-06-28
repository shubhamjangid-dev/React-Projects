import { configureStore } from "@reduxjs/toolkit";
import weatherSlice from "./weatherSlice";
const store = configureStore({
  reducer: {
    weather: weatherSlice.reducer,
  },
});
export default store;
