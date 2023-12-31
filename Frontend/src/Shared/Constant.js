import { RxCounterClockwiseClock } from "react-icons/rx";
import { BiBody } from "react-icons/bi";
import { TiWeatherCloudy } from "react-icons/ti";
import { FaWpforms } from "react-icons/fa";
import { GiRocket } from "react-icons/gi";
export const navbar = [
  {
    route: "counter",
    name: "Counter",
    icons: <RxCounterClockwiseClock />,
  },
  {
    route: "useeffect",
    name: "Use Effect",
    icons: <FaWpforms />,
  },
  {
    route: "BMI",
    name: "BMI Calculator",
    icons: <BiBody />,
  },
  {
    route: "Weather",
    name: "Weather Application",
    icons: <TiWeatherCloudy />,
  },
  {
    route: "SpaceX",
    name: "Space X",
    icons: <GiRocket />,
  },
];
