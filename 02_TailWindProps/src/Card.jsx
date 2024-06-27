import React from "react";

function Card({ CardTitle, date, CardDescription, image }) {
  return (
    <>
      <div className="w-full px-4 m-3 md:w-1/2 lg:w-1/3 bg-red-100 rounded-2xl">
        <div className="mb-10 w-full">
          <div className="mb-8 overflow-hidden rounded">
            <img
              src={image}
              alt=""
              className="w-full mt-4 rounded-lg"
            />
          </div>
          <div>
            {{ date } && <span className="mb-5 inline-block rounded bg-red-600 px-4 py-1 text-center text-xs font-semibold leading-loose text-white">{date}</span>}
            <h3>
              <a
                href="/#"
                className="mb-4 inline-block text-xl font-semibold text-red-600 hover:text-primary  sm:text-2xl lg:text-xl xl:text-2xl"
              >
                {CardTitle}
              </a>
            </h3>
            <p className="text-base text-red-500 ">{CardDescription}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
