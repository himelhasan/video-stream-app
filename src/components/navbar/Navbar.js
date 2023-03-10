import React from "react";
import Search from "./Search";
import searchImg from "../../media/search.svg";
import logo from "../../media/navlogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-slate-100 shadow-md">
      <div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3">
        <Link to="/">
          <img className="h-10" src={logo} alt="Learn with Sumit" />
        </Link>
        <div className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200">
          {/* <!-- search --> */}
          <Search></Search>
          <img className="inline h-4 cursor-pointer" src={searchImg} alt="Search" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
