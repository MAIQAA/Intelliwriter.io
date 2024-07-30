import Typewriter from "typewriter-effect";
import { IoRocketOutline } from "react-icons/io5";

const HeroSection = () => {
  return (
    <>
      {/* Extra Div at Top for Dark-blue bg under Navbar */}
      <div className="lg:block hidden relative w-full h-[86px] bg-[#0F062C]"></div>

      {/* MAIN TAG Where Hero Section Begins */}
      <div className="relative bg-custom-gradient pb-10">
        <main className="relative text-center text-white flex flex-col items-center w-full gap-7 md:px-20 md:pt-24 py-10 bg-contain bg-no-repeat bg-right-top">
          
          {/* BG IMAGE */}
          <div className="absolute flex flex-end opacity-50 top-0 right-0 w-fit h-full 2xl:h-fit">
            <img src="./hero_bg.png" alt="" />
          </div>

          {/* Top Text */}
          <span className="relative mx-4 flex flex-col md:flex-row rounded-2xl border border-[#A78AFF] md:w-fit px-4 md:px-8 py-4 font-bold bg-[#150736] gap-1">
            <p>
              AI Experts in Image, Voice, and Content Creation with {" "}
              <b className="relativepl-1 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-purple-500 to-pink-500">
                Intelli GPT-4
              </b>
            </p>
          </span>

          {/* Title Part1 */}
          <div className="relative font-bold">
            <h1 className="text-2xl md:text-7xl">
              Platform for Crafting Content
            </h1>
          </div>

          {/* Typewriter Text */}
          <div className="relative bg-[#4D0663] py-3 md:py-6 text-4xl md:text-6xl w-full md:w-3/4 lg:w-2/5 md:rounded-lg font-bold">
            <Typewriter
              options={{
                strings: ["AI Content", "AI Visuals", "AI Speech"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>

          {/* Title Part2 */}
          <div className="relative font-bold">
            <h1 className="text-2xl md:text-7xl">with IntelliWriter.</h1>
          </div>

          {/* Bottom Text */}
          <div className="relative">
            <p className="md:text-2xl">
              AI Content Generator is here to help you create high-quality
              content in just a few seconds.
            </p>
          </div>
        </main>

        {/* Button */}
        <aside className="relative flex items-center justify-center">
          <div className="border-8 border-[#342C4D] rounded-xl px-6 md:px-12 py-2 md:py-4 bg-custom-button-gradient w-fit">
            <button className="flex items-center gap-3 font-bold text-white">
              <IoRocketOutline className="text-xl md:text-2xl" />
              <p className="text-sm md:text-xl">Generate with AI</p>
            </button>
          </div>
        </aside>
      </div>
    </>
  );
};

export default HeroSection;
