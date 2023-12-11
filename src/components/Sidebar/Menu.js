import React from "react";
import { Icon } from "../../Icons";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div>
      <nav className="px-2">
        <ul className="flex flex-col">
          <li>
            <Link
              to="/"
              className="h-10 flex gap-x-4 items-center text-sm text-gray-500 font-semibold hover:text-white px-4"
            >
              <span>
                <Icon name="home" />
              </span>
              HOME
            </Link>
          </li>

          <li>
            <Link
              to="/search"
              className="h-10 flex gap-x-4 items-center text-sm text-gray-500 font-semibold hover:text-white px-4"
            >
              <span>
                <Icon name="search" />
              </span>
              SEARCH
            </Link>
          </li>

          <li>
            <div className="h-10 flex gap-x-4 items-center text-sm text-gray-500 font-semibold hover:text-white px-4">
              <span>
                <Icon name="collection" />
              </span>
              LIBRARY
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;