import { useState } from "react";

import {
  FaBloggerB,
  FaYoutube,
  FaRegShareSquare,
  FaAngleDown,
} from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { RiVoiceprintLine, RiChatSmileLine } from "react-icons/ri";
import { FaBookBookmark } from "react-icons/fa6";
import { TbTextCaption } from "react-icons/tb";
import { SiGooglemarketingplatform } from "react-icons/si";
import { IoMdImage } from "react-icons/io";
import { MdVoiceChat } from "react-icons/md";
import { GiMeshBall } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Header = () => {
  // LARGE Device "AI Tools" Dropdown
  const [isdrop, setdrop] = useState(false);
  // MEDIUM & SMALL Devices Hamburger Dropdown
  const [isclick, setclick] = useState(false);
  // MEDIUM & SMALL Devices "AI Tools" Dropdown
  const [istoggle, settoggle] = useState(false);

  // Toggle function for small devices "AI Tools"
  const toggleDropdown = () => {
    settoggle(!istoggle);
  };

  return (
    <main>
      {/* NAVBAR FOR LARGE DEVICES */}
      <nav className="w-full 4k:px-20  xl:px-14 lg:px-3 py-5 z-40 relative lg:fixed border-b lg:block hidden border-gray-400 backdrop-blur-sm">
        <div className="flex justify-between items-center 4k:justify-evenly">
          {/* LOGO */}
          <div className="xl:max-w-[150px] lg:max-w-[120px] self-center">
            <NavLink to="/">
              <img src="./Logo.png" alt="Logo" className="w-full h-auto" />
            </NavLink>
          </div>

          {/* NAV-LISTS */}
          <ul className="hidden lg:flex text-white items-center xl:text-lg justify-evenly font-medium gap-7">
            {/* ABOUT */}
            <li className="hover:underline hover:decoration-pink-400 hover:underline-offset-8">
              <NavLink to="/about">About</NavLink>
            </li>

            {/* AI TOOLS */}
            <li
              className={`relative cursor-pointer hover:underline hover:decoration-pink-400 hover:underline-offset-8`}
              onMouseEnter={() => setdrop(true)}
              onMouseLeave={() => setdrop(false)}
            >
              AI Tools
              {/* AI TOOLS DROPDOWN */}
              <div
                className={`absolute w-[900px] top-10 bg-[#020411] text-white ${isdrop ? "block" : "hidden"} shadow-lg`}
              >
                <ul className="flex justify-between p-10 gap-10">
                  <div className="space-y-14">
                    <li className="flex items-center gap-3 hover:text-gray-400">
                      <FaBloggerB className="text-2xl" /> Blog Content
                    </li>
                    <li className="flex items-center gap-3 hover:text-gray-400">
                      <CgWebsite className="text-2xl" /> Website
                    </li>
                    <li className="flex items-center gap-3 hover:text-gray-400">
                      <RiVoiceprintLine className="text-2xl" /> AI Voice
                      Generator
                    </li>
                    <li className="flex items-center gap-3 hover:text-gray-400">
                      <FaYoutube className="text-2xl" /> Youtube Content
                    </li>
                  </div>
                  <div className="space-y-14">
                    <li className="flex items-center gap-3 hover:text-gray-400">
                      <FaRegShareSquare className="text-2xl" /> Social Media
                    </li>
                    <li className="flex items-center gap-3 hover:text-gray-400">
                      <FaBookBookmark className="text-2xl" /> Course Builder
                    </li>
                    <li className="flex items-center gap-3 hover:text-gray-400">
                      <TbTextCaption className="text-2xl" /> Image Caption
                      Generator
                    </li>
                    <li className="flex items-center gap-3 hover:text-gray-400">
                      <RiChatSmileLine className="text-2xl" /> AI Chat
                    </li>
                  </div>
                  <div className="space-y-14">
                    <li className="flex items-center gap-3 hover:text-gray-400">
                      <SiGooglemarketingplatform className="text-2xl" />{" "}
                      Marketing
                    </li>
                    <li className="flex items-center gap-3 hover:text-gray-400">
                      <IoMdImage className="text-2xl" /> AI Image Generator
                    </li>
                    <li className="flex items-center gap-3 hover:text-gray-400">
                      <MdVoiceChat className="text-2xl" /> Speech Content
                    </li>
                    <li className="flex items-center gap-3 hover:text-gray-400">
                      <GiMeshBall className="text-2xl" /> Free AI Tools
                    </li>
                  </div>
                </ul>
              </div>
            </li>

            {/* BYPASS AI */}
            <li className="hover:underline hover:decoration-pink-400 hover:underline-offset-8">
              Bypass AI
            </li>

            {/* APIS */}
            <li className="hover:underline hover:decoration-pink-400 hover:underline-offset-8">
              APIs
            </li>

            {/* PRICING */}
            <li className="hover:underline hover:decoration-pink-400 hover:underline-offset-8">
              Pricing
            </li>

            {/* BLOGS */}
            <li className="hover:underline hover:decoration-pink-400 hover:underline-offset-8">
              Blogs
            </li>

            {/* BECOME AN AFFILIATE */}
            <li className="hover:underline hover:decoration-pink-400 hover:underline-offset-8">
              Become an Affiliate
            </li>
          </ul>

          {/* BUTTONS */}
          <div className="hidden lg:flex text-white font-medium space-x-3">
            <NavLink to="/register">
              <button className="bg-gradient-to-r from-[#6A25BE] to-[#511F8F] rounded-full px-6 py-2">
                Register
              </button>
            </NavLink>
            <NavLink to="./login">
              <button className="border-2 border-white px-6 py-1.5 rounded-full">
                Login
              </button>
            </NavLink>
          </div>
        </div>
      </nav>

      {/*  NAVBAR FOR MEDIUM AND SMALL DEVICES  */}
      <nav className="block lg:hidden px-10 py-5">
        <div className="flex flex-row justify-between items-center">
          {/* LOGO */}
          <NavLink>
            <img src="./Logo.png" alt="Logo" className="w-32" />
          </NavLink>

          {/* HAMBURGER */}
          <div className="cursor-pointer" onClick={() => setclick(!isclick)}>
            <span className="block w-7 h-0.5 bg-white mb-1"></span>
            <span className="block w-7 h-0.5 bg-white mb-1"></span>
            <span className="block w-7 h-0.5 bg-white"></span>
          </div>
        </div>
      </nav>

      {/* NAVLIST MEDIUN & SMALL DEVICES */}
      <aside
        className={`${isclick ? "block transform translate-x-0" : "lg:hidden transform translate-x-full"} lg:hidden fixed inset-0 z-50 top-0 w-full overflow-y-auto px-9 py-7 bg-black transition-transform duration-300 `}
      >
        <div className="flex justify-between items-center">
          <NavLink tp="/">
            <img src="./Logo.png" alt="Logo" className="max-w-[100px]" />
          </NavLink>
          <IoClose
            className="text-white text-3xl"
            onClick={() => setclick(false)}
          />
        </div>

        {/* LIST ITEMS */}
        <ul className="mt-10 text-left text-white space-y-5 text-sm">
          <li className="">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="">About</li>
          <li
            className="flex justify-between items-center cursor-pointer"
            onClick={toggleDropdown}
          >
            AI Tools
            <FaAngleDown
              className={`text-xl transition-transform ${istoggle ? "rotate-180" : ""}`}
            />
          </li>
          <div className={`${istoggle ? "block" : "hidden"}`}>
            <div className="md:w-11/12 w-full">
              <ul className="grid md:grid-cols-2 grid-cols-1 gap-4 p-2 text-xs font-thin">
                <div className="space-y-7">
                  <li className="flex items-center gap-3 hover:text-gray-400">
                    <FaBloggerB className="text-xl" /> Blog Content
                  </li>
                  <li className="flex items-center gap-3 hover:text-gray-400">
                    <SiGooglemarketingplatform className="text-xl" /> Marketing
                  </li>
                  <li className="flex items-center gap-3 hover:text-gray-400">
                    <FaBookBookmark className="text-xl" /> Course Builder
                  </li>
                  <li className="flex items-center gap-3 hover:text-gray-400">
                    <RiVoiceprintLine className="text-xl" /> AI Voice Generator
                  </li>
                  <li className="flex items-center gap-3 hover:text-gray-400">
                    <MdVoiceChat className="text-xl" /> Speech Content
                  </li>
                  <li className="flex items-center gap-3 hover:text-gray-400">
                    <RiChatSmileLine className="text-xl" /> AI Chat
                  </li>
                </div>

                <div className="space-y-7">
                  <li className="flex items-center gap-3 hover:text-gray-400">
                    <FaRegShareSquare className="text-xl" /> Social Media
                  </li>
                  <li className="flex items-center gap-3 hover:text-gray-400">
                    <CgWebsite className="text-xl" /> Website
                  </li>
                  <li className="flex items-center gap-3 hover:text-gray-400">
                    <IoMdImage className="text-xl" /> AI Image Generator
                  </li>
                  <li className="flex items-center gap-3 hover:text-gray-400">
                    <TbTextCaption className="text-xl" /> Image Caption
                    Generator
                  </li>
                  <li className="flex items-center gap-3 hover:text-gray-400">
                    <FaYoutube className="text-xl" /> Youtube Content
                  </li>
                  <li className="flex items-center gap-3 hover:text-gray-400">
                    <GiMeshBall className="text-xl" /> Free AI Tools
                  </li>
                </div>
              </ul>
            </div>
          </div>
          <li className="">Bypass AI</li>
          <li className="">APIs</li>
          <li className="">Pricing</li>
          <li className="">Blogs</li>
          <li className="">Become an Affiliate</li>
        </ul>

        {/* BUTTONS */}
        <div className="mt-16 flex justify-center w-full">
          <div className="grid space-y-5 w-full text-white font-medium md:w-1/2">
            <NavLink to="/register">
              <button className="bg-gradient-to-r from-[#6A25BE] to-[#511F8F] rounded-full px-6 py-2 w-full">
                Register
              </button>
            </NavLink>
            <NavLink to="./login">
              <button className="border-2 border-white px-6 py-1.5 rounded-full w-full">
                Login
              </button>
            </NavLink>
          </div>
        </div>
      </aside>
    </main>
  );
};

export default Header;
