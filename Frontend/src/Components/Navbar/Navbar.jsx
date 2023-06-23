import React from "react";
import { Link } from "react-router-dom";
import { navbar } from "../../Shared/Constant";
import { useState } from "react";
const Navbar = () => {
  return (
    // <div className="flex">
    <div className="navbar bg-softteel bg-opacity-50 backdrop-filter backdrop-blur-lg fixed inset-x-0 top-0 z-50 grid justify-center">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-circle btn-success lg:hidden justify-start flex btn-xs sm:btn-sm md:btn-md lg:btn-lg "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navbar.map((ele, index) => (
              <li key={index}>
                <Link to={ele.route}>
                  {ele.icons}
                  {ele.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="navbar-center  lg:flex hidden">
        <ul className="menu menu-horizontal px-1">
          {navbar.map((ele, index) => (
            <li key={index}>
              <Link to={ele.route}>
                {ele.icons}
                {ele.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>

    // </div>
  );
};

export default Navbar;
