import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const handleNav = () => {
    setShowNav(!showNav);
  };
  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#fff");
        setTextColor("#000000");
      } else {
        setColor("transparent");
        setTextColor("white");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);
  return (
    <nav
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10  p-4"
    >
      <div className="max-w-[1240px] m-auto flex justify-around text-white items-center ">
        <Link href="/">
          <h1
            style={{ color: `${textColor}` }}
            className="text-3xl font-extrabold "
          >
            Captur the Moment
          </h1>
        </Link>
        <ul
          style={{ color: `${textColor}` }}
          className="hidden md:flex space-x-3 "
        >
          <li>
            <Link href="/">Home </Link>
          </li>
          <li>
            <Link href="/#gallery">Gallery </Link>
          </li>
          <li>
            <Link href="/portfolio">Work </Link>
          </li>
          <li>
            <Link href="/contact">Contact </Link>
          </li>
        </ul>
        {/* Mobile button */}
        <div
          onClick={handleNav}
          className="md:hidden z-10 cursor-pointer hover:scale-110 ease-linear duration-300"
        >
          {showNav ? (
            <AiOutlineClose style={{ color: `${textColor}` }} size={20} />
          ) : (
            <AiOutlineMenu style={{ color: `${textColor}` }} size={20} />
          )}
        </div>
        {/* Mobile Menu */}

        <div
          style={{ left: showNav ? "-120px" : "-100%" }}
          className={`md:hidden absolute top-0  

          w-full h-screen text-center
           bg-black/90  pt-10 ease-in duration-300`}
        >
          <ul className=" flex flex-col gap-3  w-full justify-center">
            <li className="py-2 text-2xl text-center hover:text-gray-500 border-b-[1px]">
              <Link href="/">Home </Link>
            </li>
            <li className="py-2 text-2xl hover:text-gray-500 border-b-[1px]">
              <Link href="/#gallery">Gallery </Link>
            </li>
            <li className="py-2 text-2xl hover:text-gray-500 border-b-[1px]">
              <Link href="/portfolio">Work </Link>
            </li>

            <li className="py-2 text-2xl hover:text-gray-500 border-b-[1px]">
              <Link href="/contact">Contact </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
