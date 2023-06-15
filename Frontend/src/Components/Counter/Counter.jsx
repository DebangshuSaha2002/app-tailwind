import Button from "../../Shared/Button";
import React from "react";
import Input from "../../Shared/Input";
const Counter = () => {
  return (
    <>
      <div className="text-center my-1rem">
        <p className="lg:text-5xl sm:text-4xl md:text-4xl mt-4 ml-4 text-gray-dark font-Quintessential pt-2 mb-2">
          COUNTER{" "}
        </p>{" "}
        <div className="text-center my-1rem">
          <p className="mt-2 mb-2 text-white bg-gray-dark pt-3 pb-3 font-Lobster text-3xl lg:bg-gray-dark md:bg-blue sm:bg-purple">
            Hello Tailwind{" "}
          </p>{" "}
        </div>{" "}
      </div>{" "}
      <div className="flex justify-center mt-3  ">
        <Input
          label="Name"
          type="text"
          placeholder="name"
          onChange="onInputChange"
          className="pl-4 pr-2"
        />
      </div>{" "}
      <div className="flex justify-center mt-3  ">
        <Input
          label="Lname"
          type="text"
          placeholder="Semester"
          onChange="onInputChange"
          className="pl-4 pr-2"
        />
      </div>{" "}
      <div className="flex justify-center my-5">
        <Button buttonname="Submit" className="rounded-md " />
      </div>{" "}
    </>
  );
};

export default Counter;
