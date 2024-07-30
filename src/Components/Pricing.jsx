import { useState } from "react";
import { CiCircleChevDown } from "react-icons/ci";
import { FaRegCircleDot } from "react-icons/fa6";
import { FaSlack } from "react-icons/fa";
import { FaBarcode } from "react-icons/fa6";
const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <>
      <div className="grid gap-14 px-10 lg:px-[110px] py-10 pt-32 2xl:px-[17%]">
        {/* TITLE */}
        <div className="relative grid lg:text-6xl md:text-5xl text-4xl lg:left-4">
          <div className="uppercase absolute text-border text-gray-200 text-opacity-75  bottom-4 lg:bottom-5 lg:-left-4">
            Get Started
          </div>
          <div className="uppercase relative font-semibold bg-gradient-to-r from-[#CC95FF] via-[#F056FF] to-[#F056FF] text-transparent bg-clip-text">
            Future Plans
          </div>
        </div>

        {/* TEXT */}
        <div className="">
          <p className="md:text-[21px] text-base text-white font-medium !leading-8">
            Simple pricing plans for everyone and every budget.
          </p>
        </div>
      </div>

      {/* BUTTON */}
      <div className="w-full grid justify-items-center pb-10">
        <div className="lg:w-1/5 md:w-1/3 px-4 flex justify-evenly bg-gradient-to-b from-[#430782] to-[#410156] py-3 text-white rounded-lg">
          <button
            onClick={() => setIsMonthly(true)}
            className={`px-5 py-2 active:rounded-lg ${isMonthly ? "rounded-lg bg-gradient-to-br from-[white] via-[#AFAAB8] to-[orange]" : "text-white"}`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsMonthly(false)}
            className={`px-5 py-2 active:rounded-lg ${!isMonthly ? " rounded-lg bg-gradient-to-br from-[white] via-[#AFAAB8] to-[orange]" : "text-white"}`}
          >
            Yearly
          </button>
        </div>
      </div>

      {/* PRICING PLAN CARDS */}
      <div className="flex md:flex-row flex-col gap-7 lg:p-10 p-5 justify-items-center items-center">
        {/* PLAN 1 */}
        <div className=" mb-7 md:mb-0 lg:w-3/5 md:w-10/12 w-[250px] text-white border border-white bg-gradient-to-br from-[#3C2C5F] via-[#150a37] to-[#3C2C5F] rounded-2xl hover:bg-blend-overlay hover:bg-[#ffffff0c]">
          <div className="space-y-7 lg:px-5 px-3 py-10">
            {/* DEAL NAME */}
            <div className="flex gap-5">
              <CiCircleChevDown className="lg:size-10 size-6 self-center" />
              <div className="text-white">
                <h1 className="lg:text-xl font-normal">First Time Only</h1>
                <h1 className="lg:text-2xl font-semibold">Basic Pack</h1>
              </div>
            </div>

            {/* RATE */}
            <div className="flex gap-2 md:text-sm">
              <h1 className="lg:text-6xl text-3xl">0.00</h1>
              <h1 className="self-end text-sm lg:lg">
                {isMonthly ? "US/monthly" : "US/yearly"}
              </h1>
            </div>

            {/* SUBSCRIPTION BUTTON */}
            <div className="w-full">
              <button className="text-sm lg:text-base bg-gradient-to-bl rounded-full w-full from-[#471c7c] to-[#7628d6] hover:opacity-90 py-2.5">
                Subscribe Now
              </button>
            </div>

            {/* Features */}
            <div>
              <ul className="space-y-3 text-xs lg:text-base">
                <div className="flex gap-2">
                  <FaRegCircleDot className="size-3 self-center" />
                  <li className="self-center">100000 Content Words</li>
                </div>
                <div className="flex gap-2">
                  <FaRegCircleDot className="size-3 self-center" />
                  <li className="self-center">No Free Images</li>
                </div>
                <div className="flex gap-2">
                  <FaRegCircleDot className="size-3 self-center" />
                  <li className="self-center">GPT-4 Integration</li>
                </div>
                <div className="flex gap-2">
                  <FaRegCircleDot className="size-3 self-center" />
                  <li className="self-center">500 Chats Prompts</li>
                </div>
                <div className="flex gap-2">
                  <FaRegCircleDot className="size-3 self-center" />
                  <li className="self-center">Voice Over Unlimited</li>
                </div>
                <div className="flex gap-2">
                  <FaRegCircleDot className="size-3 self-center" />
                  <li className="self-center">All Tools Access</li>
                </div>
              </ul>
            </div>
          </div>
        </div>

        {/* PLAN 2 */}
        <div className="-mt-7 lg:w-2/3 md:w-11/12  w-[250px] text-white border border-white bg-gradient-to-br from-[#3C2C5F] via-[#150a37] to-[#3C2C5F] rounded-2xl hover:bg-blend-overlay hover:bg-[#ffffff0c]">
          {/* Recommended */}
          <div className="bg-gradient-to-r from-[#24153B] to-[#40196F] rounded-t-2xl text-center py-1 text-lg font-semibold">
            <h1>Recommended</h1>
          </div>

          <div className="space-y-7 lg:px-5 px-3 lg:py-10 py-5">
            {/* DEAL NAME */}
            <div className="relative flex gap-5">
              {/* OFF BUTTON BOUNCING */}
              {!isMonthly && (
                <div className=" absolute top-0 right-0 bg-gradient-to-br from-[white] via-[#AFAAB8] to-[orange] rounded-md animate-bounce">
                  <p className="lg:text-lg text-sm px-3 py-1.5 ">20% OFF</p>
                </div>
              )}
              <FaBarcode className="lg:size-10 size-6 self-center" />
              <div className="text-white">
                <h1 className="lg:text-xl font-normal">Most Popular</h1>
                <h1 className="lg:text-2xl font-semibold">Standard Pack</h1>
              </div>
            </div>

            {/* RATE */}
            <div className="flex gap-2">
              <h1 className="lg:text-6xl text-3xl">
                {isMonthly ? "9.99" : "95.90"}
              </h1>
              <h1 className="self-end lg:text-lg text-sm">
                {isMonthly ? "US/monthly" : "US/yearly"}
              </h1>
            </div>

            {/* SUBSCRIPTION BUTTON */}
            <div className="w-full">
              <button className="text-sm lg:text-base bg-gradient-to-bl rounded-full w-full from-[#471c7c] to-[#7628d6] hover:opacity-90 py-2.5">
                Subscribe Now
              </button>
            </div>

            {/* Features */}
            <div>
              <ul className="space-y-3 text-xs lg:text-base">
                <div className="flex gap-2">
                  <FaRegCircleDot className="size-3 self-center" />
                  <li className="self-center">
                    {isMonthly ? "150000 " : "12 × 150000 "} Content Words
                  </li>
                </div>
                <div className="flex gap-2">
                  <FaRegCircleDot className="size-3 self-center" />
                  <li className="self-center">
                    {isMonthly ? "500 " : "12 × 500 "} Images Prompts
                  </li>
                </div>
                <div className="flex gap-2">
                  <FaRegCircleDot className="size-3 self-center" />
                  <li className="self-center">GPT-4 Integration</li>
                </div>
                <div className="flex gap-2">
                  <FaRegCircleDot className="size-3 self-center" />
                  <li className="self-center">
                    {isMonthly ? "50000 " : "12 × 50000 "} Chats Prompts
                  </li>
                </div>
                <div className="flex gap-2">
                  <FaRegCircleDot className="size-3 self-center" />
                  <li className="self-center">Voice Over Unlimited</li>
                </div>
                <div className="flex gap-2">
                  <FaRegCircleDot className="size-3 self-center" />
                  <li className="self-center">All Tools Access</li>
                </div>
              </ul>
            </div>
          </div>
        </div>

        {/* PLAN 3 */}
        <div className="lg:w-3/5 md:w-10/12 w-[250px] text-white border border-white bg-gradient-to-br from-[#3C2C5F] via-[#150a37] to-[#3C2C5F] rounded-2xl hover:bg-blend-overlay hover:bg-[#ffffff0c]">
          <div className="space-y-7 lg:px-5 px-3 lg:py-10 py-5">
            {/* DEAL NAME */}
            <div className="relative flex gap-5">
              {/* OFF BUTTON BOUNCING */}
              {!isMonthly && (
                <div className=" absolute top-0 right-0 bg-gradient-to-br from-[white] via-[#AFAAB8] to-[orange] rounded-md animate-bounce">
                  <p className="lg:text-lg text-sm px-3 py-1.5 ">20% OFF</p>
                </div>
              )}
              <FaSlack className="lg:size-10 size-6 self-center" />
              <div className="text-white">
                <h1 className="lg:text-xl font-normal">Best One</h1>
                <h1 className="lg:text-2xl font-semibold">Premium Pack</h1>
              </div>
            </div>

            {/* RATE */}
            <div className="flex gap-2">
              <h1 className="lg:text-6xl text-3xl">
                {isMonthly ? "19.99" : "191.90"}
              </h1>
              <h1 className="self-end text-sm lg:text-base">
                {isMonthly ? "US/monthly" : "US/yearly"}
              </h1>
            </div>

            {/* SUBSCRIPTION BUTTON */}
            <div className="w-full">
              <button className="text-sm lg:text-base bg-gradient-to-bl rounded-full w-full from-[#471c7c] to-[#7628d6] hover:opacity-90 py-2.5">
                Subscribe Now
              </button>
            </div>

            {/* Features */}
            <div>
              <ul className="space-y-3 text-xs lg:text-base">
                <div className="flex gap-2">
                  <FaRegCircleDot className="size-3 self-center" />
                  <li className="self-center">Unlimited Content Words</li>
                </div>
                <div className="flex gap-2">
                  <FaRegCircleDot className="size-3 self-center" />
                  <li className="self-center">Unlimited Free Images</li>
                </div>
                <div className="flex gap-2">
                  <FaRegCircleDot className="size-3 self-center" />
                  <li className="self-center">GPT-4 Integration</li>
                </div>
                <div className="flex gap-2">
                  <FaRegCircleDot className="size-3 self-center" />
                  <li className="self-center">Unlimited Chats Prompts</li>
                </div>
                <div className="flex gap-2">
                  <FaRegCircleDot className="size-3 self-center" />
                  <li className="self-center">Voice Over Unlimited</li>
                </div>
                <div className="flex gap-2">
                  <FaRegCircleDot className="size-3 self-center" />
                  <li className="self-center">All Tools Access</li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
