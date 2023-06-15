import React from "react";
import { Routes, Route } from "react-router-dom";
import Counter from "../Components/Counter/Counter.jsx";
import UseEffectHook from "../Components/UseEffectHook";
import PageNotFound from "../Components/PageNotFound/PageNotFound.jsx";
import BMI from "../Components/BMI/BMI.jsx";
import Weather from "../Components/Weather/Weather.jsx";
const RoutesModules = () => {
  return (
    <>
      <Routes>
        <Route path="useeffect" element={<Counter />} />{" "}
        <Route path="counter" element={<UseEffectHook />} />{" "}
        <Route path="bmi" element={<BMI />} />{" "}
        <Route path="weather" element={<Weather />} />{" "}
        <Route path="*" element={<PageNotFound />} />{" "}
      </Routes>{" "}
    </>
  );
};

export default RoutesModules;
