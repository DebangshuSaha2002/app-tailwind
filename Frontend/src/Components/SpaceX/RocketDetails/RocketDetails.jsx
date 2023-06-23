import React from "react";
import { BsRocketTakeoffFill } from "react-icons/bs";
import { useState } from "react";
import { useEffect } from "react";
import "../RocketDetails/RocketDetails.css";
const RocketDetails = ({
  id = "",
  desc = "",
  company = "",
  country = "",
  flickerImages = [],
  rocketName = "",
  rocketId = "",
  rocketType = "",
  wiki = "",
  mass = { kg: 0, lb: 0 },
  active = false,
  firstFlight = "",
}) => {
  const [customActiveClass, setCustomaActiveClass] = useState("");
  const [boxActiveClass, setboxActiveClass] = useState("");
  const setActiveClass = () => {
    if (active) {
      setCustomaActiveClass("bg-softgreen ");
      setboxActiveClass("bg-softteel");
    } else {
      setCustomaActiveClass("bg-softorange ");
      setboxActiveClass("bg-deeporange");
    }
  };
  useEffect(() => {
    setActiveClass();
  });

  const RocketButtonHandler = () => {
    window.open(wiki, "_blank");
  };
  return (
    <>
      <div className="flex justify-center items-center mt-3.5rem" key="id">
        <div className="grid grid-cols-1 my-1rem">
          <div className={"card w-38rem shadow-lg  " + customActiveClass}>
            <figure>
              <img src={flickerImages[0]} alt="Rockets" />
            </figure>
            <div className="card-body">
              <p className="card-title font-Lobster font-bold text-3xl">
                {company} : {country}
              </p>
              <p className="font-serif text-1xl">{desc}</p>
              <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-normal font-medium flex justify-end font-serif font-semibold">
                  more...
                </div>
                <div
                  className={
                    "collapse-content grid justify-center items-center rounded-2xl p-3 " +
                    boxActiveClass
                  }
                >
                  <p className="font-serif">Rocket Name : {rocketName}</p>
                  <p className="font-serif">Rocket ID : {rocketId}</p>
                  <p className="font-serif">Rocket Type : {rocketType}</p>
                  <p className="font-serif">Mass : {mass.kg} kg</p>
                  <p className="font-serif">First Flight : {firstFlight}</p>
                </div>
              </div>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-primary"
                  onClick={RocketButtonHandler}
                >
                  <BsRocketTakeoffFill />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RocketDetails;
