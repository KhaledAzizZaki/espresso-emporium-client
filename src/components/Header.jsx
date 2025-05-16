import React from "react";
import { Link } from "react-router";

const Header = () => {
  return (
    <div>
      <ul className="flex gap-5 text justify-center">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/addCoffee"}>Add Coffee</Link>
        </li>
        <li>
          <Link to={"/coffeeDetails/:id"}>Coffee Details</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
