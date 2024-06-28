import React from "react";
import { useSelector } from "react-redux";
function Sun({ sunData }) {
  const currentWeather = useSelector(state => state.weather.weatherData);

  const sunrise = new Date(sunData.sunrise * 1000).toTimeString().slice(0, 5);
  const sunset = new Date(sunData.sunset * 1000).toTimeString().slice(0, 5);
  const degree = Math.trunc(((currentWeather.dt * 1000 - sunData.sunrise * 1000) / (sunData.sunset - sunData.sunrise) / 1000) * 150);
  //   console.log(degree);

  return (
    <div className="w-full px-4 flex text-white">
      <div className="w-full flex flex-wrap justify-between bg-white/10 rounded-lg py-2 px-6">
        <div className="py-2">
          <h1 className="text-lg">{sunrise}</h1>
          <h1 className="text-sm text-white/50 ">sunrise</h1>
        </div>

        <div>
          <div className="h-16 pb-1 pt-3 overflow-clip">
            <div
              className="h-40 w-40 bg-amber-100 border-dashed border-2 border-yellow-500
  rounded-full "
              style={{ transform: `rotate(${degree}deg)` }}
            >
              <div className="w-5 h-5 rounded-full bg-yellow-400 translate-y-12 -translate-x-2"></div>
            </div>
          </div>
        </div>

        <div className="py-2">
          <h1 className="text-lg">{sunset}</h1>
          <h1 className="text-sm text-white/50 ">sunset</h1>
        </div>
      </div>
    </div>
  );
}

export default Sun;
