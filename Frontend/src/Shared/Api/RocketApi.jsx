import { localURL } from "../../Config/WeatherConfig";
import axios from "axios";

export const getAllRocketApi = async () => {
  try {
    const url = localURL + `rockets/allRockets`;
    const AllRockets = await fetch(url);
    const AllRocketsData = await AllRockets.json();
    return AllRocketsData;
  } catch (error) {
    console.error("CATCH ROCKET API ERROR", error.message);
    return error;
  }
};
