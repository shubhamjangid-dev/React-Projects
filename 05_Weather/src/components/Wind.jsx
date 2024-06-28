import React from "react";
import Icon from "./Icon";
function Wind({ windData }) {
  return (
    <div className="w-full px-4 flex">
      <div className="w-full flex flex-wrap text-white justify-between bg-white/10 rounded-lg px-4 py-2">
        <div className="">
          <Icon prop="wind" />
        </div>
        <div className="py-2">
          <div className="text-2xl flex">
            {Math.trunc(windData.speed)} <div className="text-sm pl-1 pt-2.5">{windData.isCelsius ? "m/s" : "Mph"}</div>
          </div>
          <h1 className="text-sm text-white/50 ">wind</h1>
        </div>

        {windData.gust && (
          <div className="py-2">
            <div className="text-2xl flex">
              {Math.trunc(windData.gust)} <div className="text-sm  pl-1 pt-2.5">{windData.isCelsius ? "m/s" : "Mph"}</div>
            </div>
            <h1 className="text-sm text-white/50 ">gust</h1>
          </div>
        )}

        <div className="w-1/5">
          <div
            className="h-16 w-16 border-dashed border-2 border-white/40
  rounded-full flex justify-center"
          >
            <div
              className="m-0.5 w-0.5 h-15.5 bg-white/60 "
              style={{ transform: `rotate(${windData.deg}deg)` }}
            >
              <div className="h-0 w-0 border-x-4 border-x-transparent border-b-[10px] -translate-x-[3px] -translate-y-[3px] border-b-white/60"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wind;
