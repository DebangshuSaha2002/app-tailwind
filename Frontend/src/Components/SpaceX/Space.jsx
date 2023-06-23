import React, { Fragment, useEffect } from "react";
import { getAllRocketApi } from "../../Shared/Api/RocketApi";
import { useState } from "react";
import RocketDetails from "./RocketDetails/RocketDetails";
const Space = () => {
  const [RocketData, setRocketData] = useState([]);
  const AllRockets = async () => {
    const data = await getAllRocketApi();
    if (data.status === 200) {
      console.log(data);
      setRocketData(data.data);
    } else {
      setRocketData([]);
    }
  };
  useEffect(() => {
    AllRockets();
  }, []);

  return (
    <Fragment>
      <div>{RocketData.length === 0 && "No Data Available"}</div>
      <div>
        {RocketData.map((ele) => (
          <div key={ele.key} className="flex justify-center items-center">
            <RocketDetails
              id={ele.id}
              desc={ele.description}
              country={ele.country}
              company={ele.company}
              flickerImages={ele.flickr_images}
              rocketName={ele.rocket_name}
              rocketId={ele.rocket_id}
              rocketType={ele.rocket_type}
              wiki={ele.wikipedia}
              mass={ele.mass}
              active={ele.active}
              firstFlight={ele.first_flight}
            />
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Space;
