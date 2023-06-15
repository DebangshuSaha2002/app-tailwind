import React from "react";

const WeatherDetailsBox = ({ location }) => {
  return (
    <div className="flex justify-center items-center mx-15rem ">
      <p
        style={{ margin: "1rem 0 1rem 0 " }}
        className="font-Lobster text-deeppurple"
      >
        <span className="font-Lobster lg:text-4xl md:text-3xl sm:text-2xl font-semibold ">
          {location.name} weather forecast,
        </span>
        <span className="text-softpurple lg:text-2xl sm:text-1xl">
          {location.region} {location.country}
        </span>
      </p>
    </div>
  );
};

export default WeatherDetailsBox;
