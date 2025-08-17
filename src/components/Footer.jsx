import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className=" bg-black">
        <nav className="flex justify-between items-center gap-10 px-20 py-5">
          <div className="logo">
            <h1 className="text-2xl font-bold text-white">New Website</h1>
          </div>
          <ul className="flex gap-5 justify-between items-center text-white">
            <NavLink>
              <li>Sport</li>
            </NavLink>
            <NavLink>
              <li>Politics</li>
            </NavLink>
            <NavLink>
              <li>Health</li>
            </NavLink>
            <NavLink>
              <li>Finance</li>
            </NavLink>
          </ul>
          <div>
            <input
              className="border-2 rounded-full px-2 py-2 border-white text-white"
              type="search"
              name="search"
              id="search"
              placeholder="search..."
            />
            <button
              type="submit"
              className="bg-white  ml-5 rounded-full px-5 py-2 border-2 text-black "
            >
              Search
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Footer;
