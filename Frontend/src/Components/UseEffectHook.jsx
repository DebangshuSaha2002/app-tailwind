import React, { Fragment } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Button from "../Shared/Button";
import { Suspense } from "react";
import Loader from "../Shared/Loader";

const UseEffectHook = () => {
  const [Message, SetMessage] = useState("");
  const [Counter, setCounter] = useState(0);
  const addHandler = () => {
    console.log("add");
    setCounter(Counter + 1);
    console.log(Counter);
  };

  const subHandler = () => {
    setCounter(Counter - 1);
  };
  useEffect(() => {
    console.log("Use Effect Called", { Counter });
    let val = Counter;
    if (val % 2 == 0) {
      SetMessage("EVEN");
    } else if (val % 2 != 0) {
      SetMessage("ODD");
    }
  }, [Counter]);
  return (
    <Fragment>
      <Suspense fallback={<Loader />}>
        <div>
          <div className="flex justify-center">
            <Button
              buttonname="Add"
              className="mt-40 font-Quintessential my-1rem"
              onClick={addHandler}
            />
          </div>
          <p className="text-7xl flex justify-center my-1rem">{Counter}</p>
          <div className="my-1rem">
            <p className="flex justify-center mb-4 font-Quintessential text-4xl">
              {Message}
            </p>
          </div>
          <div className="flex justify-center my-1rem">
            <Button buttonname="Sub" onClick={subHandler} />
          </div>
        </div>
      </Suspense>
    </Fragment>
  );
};

export default UseEffectHook;
