import { CiSearch } from "react-icons/ci";
import { FaQuestion } from "react-icons/fa6";
import { CiCalendarDate } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import useWindowSize from "../../hooks/useWindow";
import MobileHomeNav from "./MobileNav";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const NAVLINKS = [
  "Product OS",
  "Pricing",
  "Docs",
  "Community",
  "Company",
  "More",
];
export default function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const { windowWidth } = useWindowSize();
  const md = (windowWidth as number) >= 768;
  return (
    <nav className="top-0 z-50 flex justify-between items-center w-full border-b-[rgb(var(--border))] backdrop-blur-3xl bg-[#e5e7e0bf] pl-[0.5rem] pr-2 ">
      <ul className="flex gap-2 text-[#23251d]! text-[13px] font-medium">
        {md &&
          NAVLINKS.map((link) => (
            <li key={link} className="cursor-pointer ">
              <button className="px-[2px] py-[8px] rounded leading-none  bg-transparent!">
                {link}
              </button>
            </li>
          ))}
      </ul>

      <button
        className="relative md:hidden -ml-8"
        onClick={() => setShowNav((prev) => !prev)}
      >
        <IoIosArrowDown />
      </button>

      <ul className="flex justify-between md:justify-center items-center gap-1">
        <li>
          <button className="relative items-center bg-orange border-[1.5px] border-[#eb9d28] rounded-md  group-disabled:hover:!translate-y-[-3px] group-disabled:hover:!translate-y-[-2px]">
            <span className="flex items-center justify-center bg-orange px-2.5 py-1 w-full h-full border-[1.5px] translate-y-[-2px] hover:translate-y-[-3px] active:transition-all active:duration-100 rounded-md active:translate-y-[-1.5px] border-button">
              <p className="text-black text-[13px] font-bold">
                Get Started - free
              </p>
            </span>
          </button>
        </li>
        <li>
          <button className="relative items-center px-1 py-0.5 bg-transparent border border-transparent rounded transition-all duration-200 active:border-primary hover:border-[rgb(var(--primary))] cursor-pointer hover:-translate-y-[1px]">
            <CiSearch className="size-5 text-primary" />
          </button>
        </li>
        <li>
          <button className="relative items-center px-1 py-0.5 bg-transparent border border-transparent rounded transition-all duration-200 active:border-primary hover:border-[rgb(var(--primary))] cursor-pointer hover:-translate-y-[1px]">
            <FaQuestion className="size-5 text-primary" />
          </button>
        </li>
        <li>
          <button className="relative items-center px-1 py-0.5 bg-transparent border border-transparent rounded transition-all duration-200 active:border-primary hover:border-[rgb(var(--primary))] cursor-pointer hover:-translate-y-[1px]">
            <CiCalendarDate className="size-5 text-primary" />
          </button>
        </li>
        <li>
          <button className="relative items-center bg-transparent">
            <FaRegUserCircle className="size-5 text-primary" />
          </button>
        </li>
      </ul>
      {showNav && <MobileHomeNav />}
    </nav>
  );
}
