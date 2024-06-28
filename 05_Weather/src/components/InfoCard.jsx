import React from "react";
import Icon from "./Icon";

function InfoCard({ name, value, unit }) {
  return (
    <div className="w-1/4 mx-2 text-white ">
      <div className="w-full flex justify-center p-3 text-2xl">
        <Icon prop={name} />
      </div>
      <h1 className="text-lg">
        {value} {unit}
      </h1>
      <h1 className="text-sm text-white/50 ">{name}</h1>
    </div>
  );
}

export default InfoCard;
