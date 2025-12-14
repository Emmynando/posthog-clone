import { IoIosArrowForward } from "react-icons/io";
const MOBILENAV = ["Pricing", "Docs", "Community", "Company", "More"];
const MOBILENAV2 = ["About Pricing", "About this website", "Display Options"];
export default function MobileHomeNav() {
  return (
    // class="bg-primary min-w-[180px] md:min-w-[220px] rounded-md p-[5px]  [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)]"
    <div className="absolute min-w-[180px] md:hidden top-[2.2rem] bg-[rgb(var(--bg,253_253_248))] p-[5px] rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[transform,opacity]">
      <ul className="flex flex-col text-[#4d4f46]! text-[13px] font-medium border-b border-black/40 pb-2">
        <li className="cursor-pointer py-1 border-b border-black/40 pb-2">
          <button className="px-[2px] rounded leading-none">home.mdx</button>
        </li>
        <li className="cursor-pointer py-1">
          <button className="px-[2px] rounded leading-none">Product OS</button>
        </li>
        {MOBILENAV.map((link: string) => (
          <li
            key={link}
            className="cursor-pointer py-1 flex items-center justify-between pr-2"
          >
            <button className="px-[2px] rounded leading-none ">{link}</button>
            <IoIosArrowForward />
          </li>
        ))}
      </ul>
      <ul className="flex flex-col text-[#4d4f46]! text-[13px] font-medium">
        {MOBILENAV2.map((link: string) => (
          <li key={link} className="cursor-pointer py-1">
            <button className="px-[2px] rounded leading-none  bg-transparent!">
              {link}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
