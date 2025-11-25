import { FaRegHeart } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { HiMenu } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

function Navbar() {
  return (
    <header className="bg-white fixed top-0 left-0 right-0 shadow z-50">
      <nav className="max-w-[1400px] m-auto md:h-[14vh] h-[12vh] flex items-center justify-between px-6 md:px-10">
        {/* Logo */}
        <a href="#" className="text-3xl font-semibold">
          Gr<span className="text-orange-500 uppercase">o</span>cify
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-x-[50px]">
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-orange-400"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-400"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-400"
            >
              Process
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-400"
            >
              Contact Us
            </a>
          </li>
        </ul>

        {/* Right Icons */}
        <div className="flex items-center gap-x-5">
          {/* Desktop Search */}
          <div className="hidden md:flex p-1 border-2 border-orange-500 rounded-full">
            <input
              className="bg-transparent px-4 outline-none h-[5vh]"
              type="text"
              placeholder="Search"
            />
            <button className="bg-gradient-to-b from-orange-400 to-orange-500 w-10 h-10 text-white flex justify-center items-center rounded-full">
              <FaSearch />
            </button>
          </div>

          <a href="#" className="text-zinc-800 text-2xl">
            <FaRegHeart />
          </a>

          <a href="#" className="text-zinc-800 text-2xl">
            <FaCartShopping />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
