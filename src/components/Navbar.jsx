import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <div className="bg-gray-50">
        <nav className="flex justify-between items-center gap-10 px-20 py-5">
          <div className="logo">
            <h1 className="text-2xl font-bold">New Website</h1>
          </div>
          <ul className="flex gap-5 justify-between items-center">
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
              className="border-2 rounded-full px-2 py-2"
              type="search"
              name="search"
              id="search"
              placeholder="search..."
            />
            <button
              type="submit"
              className="bg-black  ml-5 rounded-full px-5 py-2 border-2 text-white "
            >
              Search
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
