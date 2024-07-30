import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoMdPerson } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Register = () => {
  // State to manage focus for multiple inputs
  const [focusState, setFocusState] = useState({});

  const handleFocus = (field) => {
    setFocusState((prev) => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field) => {
    setFocusState((prev) => ({ ...prev, [field]: false }));
  };

  return (
    <main className="relative w-full h-screen overflow-hidden">
      <div className="relative flex flex-row h-full">
        <div className="absolute top-0 left-0 bg-transparent z-20 p-2">
          <NavLink to="/">
            <button className="text-white border border-white rounded-full px-5 py-1.5">
              Back
            </button>
          </NavLink>
        </div>
        {/* COVER IMAGE */}
        <div className="lg:w-[67%] md:w-[60%] w-[100%]  overflow-hidden md:filter-none saturate-50 -hue-rotate-45 brightness-50">
          <img
            src="./Loginbg.png"
            alt="Background"
            className="w-full h-full object-cover md:filter md:brightness-75"
          />
        </div>

        {/* FORM SECTION */}
        <div className="lg:w-[33%] md:w-[40%] w-[100%] absolute md:relative md:bg-[#0F172A] bg-transparent overflow-y-auto max-h-screen grid">
          <div className="grid justify-items-center pt-2 px-4 space-y-3 xl:space-y-5 xl:items-center xl:self-center">
            {/* LOGO */}
            <div className="">
              <img src="./Logo.png" alt="Logo" className="w-[130px]" />
            </div>

            {/* TITLE */}
            <h1 className="text-white text-4xl font-bold">Register</h1>

            {/* TEXT */}
            <p className="text-gray-300 text-center px-7 lg:text-base md:text-sm">
              Start generating your thoughts with Intelliwriter.io
            </p>

            {/* BUTTON */}
            <div className="md:w-auto w-5/6 my-auto lg:text-base md:text-sm font-medium text-white">
              <button className="flex gap-3 lg:w-[300px] md:w-[250px] px-2 w-full justify-center py-2.5 rounded-lg items-center bg-gradient-to-t from-[#7126CC] to-[#4D1D87]">
                <FcGoogle className="size-5" /> Continue with Google
              </button>
            </div>

            <p className="text-white">or</p>

            {/* FORM FIELDS */}
            <div className="w-full grid space-y-2 xl:space-y-5 justify-items-center lg:text-base md:text-sm">
              {/* NAME */}
              <div
                className={`flex gap-3 p-3 lg:w-[300px] md:w-[250px] w-5/6 items-center rounded-lg bg-gradient-to-b from-[#0F1333] to-[#1D203F] ${focusState.name ? "ring ring-purple-500" : "outline-none"}`}
              >
                <IoMdPerson className="text-gray-200 size-5" />
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-inherit text-gray-200 w-full focus:outline-none"
                  onFocus={() => handleFocus("name")}
                  onBlur={() => handleBlur("name")}
                />
              </div>

              {/* EMAIL */}
              <div
                className={`flex gap-3 p-3 lg:w-[300px] md:w-[250px] w-5/6 items-center rounded-lg bg-gradient-to-b from-[#0F1333] to-[#1D203F] ${focusState.email ? "ring ring-purple-500" : "outline-none"}`}
              >
                <IoMail className="text-gray-200 size-5" />
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-inherit text-gray-200 w-full focus:outline-none"
                  onFocus={() => handleFocus("email")}
                  onBlur={() => handleBlur("email")}
                />
              </div>

              {/* PASSWORD */}
              <div
                className={`flex gap-3 p-3 lg:w-[300px] md:w-[250px] w-5/6 items-center rounded-lg bg-gradient-to-b from-[#0F1333] to-[#1D203F] ${focusState.password ? "ring ring-purple-500" : "outline-none"}`}
              >
                <RiLockPasswordFill className="text-gray-200 size-5" />
                <input
                  type="password"
                  placeholder="Password"
                  className="bg-inherit text-gray-200 w-full focus:outline-none"
                  onFocus={() => handleFocus("password")}
                  onBlur={() => handleBlur("password")}
                />
              </div>

              <p className="text-gray-500 italic text-sm">
                <b>Strong Password:</b> IntelliWriter@738
              </p>

              {/* CONFIRM PASSWORD */}
              <div
                className={`flex gap-3 p-3 lg:w-[300px] md:w-[250px] w-5/6 items-center rounded-lg bg-gradient-to-b from-[#0F1333] to-[#1D203F] ${focusState.confirmpassword ? "ring ring-purple-500" : "outline-none"}`}
              >
                <RiLockPasswordFill className="text-gray-200 size-5" />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="bg-inherit text-gray-200 w-full focus:outline-none"
                  onFocus={() => handleFocus("confirmpassword")}
                  onBlur={() => handleBlur("confirmpassword")}
                />
              </div>
            </div>

            {/* SUBMIT BUTTON */}
            <button className="w-5/6 my-auto lg:text-base md:text-sm font-medium text-white lg:w-[300px] md:w-[250px] py-2 rounded-lg items-center bg-gradient-to-t from-[#7126CC] to-[#4D1D87]">
              Register
            </button>
          </div>
          <div className=" w-full !mt-10 xl:!mt-3">
            <p className="bg-[#0d0518] xl:bg-transparent text-white text-center p-3 lg:text-base md:text-sm">
              Already have an account?{" "}
              <NavLink to="../login">
                <b className="text-pink-500 font-normal">Login</b>
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;
