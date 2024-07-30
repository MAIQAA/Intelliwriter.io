import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="mt-10 w-full">
      <hr className="bg-[#221A3D] h-px border-0" />

      <div className="lg:px-20 md:px-10 px-5 py-14 flex md:flex-row flex-col md:justify-between space-y-10">
        {/* Column 1 */}
        <div className="space-y-6 text-white md:w-1/3 pr-4">
          <img src="./Logo.png" alt="Logo" className="w-1/2" />
          <p>
            Intelliwriter is an AI-powered tool crafted to streamline and
            elevate your writing experience. Whether you`re a content creator,
            marketer, student, or business owner, Intelliwriter is designed to
            transform and enhance your content creation process.
          </p>

          <div className="flex gap-6">
            <div className="border border-gray-700 rounded-lg h-fit hover:border-gray-500">
              <div className="p-2 rounded-full bg-black text-gray-400 hover:text-white">
                <FaTwitter className="size-3" />
              </div>
            </div>

            <div className="border border-gray-700 rounded-lg h-fit hover:border-gray-500">
              <div className="p-2 rounded-full bg-black text-gray-400 hover:text-white">
                <FaLinkedinIn className="size-3" />
              </div>
            </div>

            <div className="border border-gray-700 rounded-lg h-fit hover:border-gray-500">
              <div className="p-2 rounded-full bg-black text-gray-400 hover:text-white">
                <FaFacebookF className="size-3" />
              </div>
            </div>

            <div className="border border-gray-700 rounded-lg h-fit hover:border-gray-500">
              <div className="p-2 rounded-full bg-black text-gray-400 hover:text-white">
                <FaInstagram className="size-3" />
              </div>
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="md:w-1/5 w-1/2 text-gray-400 font-semibold space-y-3">
          <p className="text-lg text-white font-bold">General</p>
          <p className="hover:text-white">Home</p>
          <p className="hover:text-white">About Us</p>
          <p className="hover:text-white">APIs</p>
          <p className="hover:text-white">Blogs</p>
          <p className="hover:text-white">Contact</p>
        </div>

        {/* Column 3 */}
        <div className="md:w-1/5 w-1/2 text-gray-400 font-semibold space-y-3">
          <p className="text-lg text-white font-bold">Features</p>
          <p className="hover:text-white">Bypass AI</p>
          <p className="hover:text-white">Social Content</p>
          <p className="hover:text-white">Blog Content</p>
          <p className="hover:text-white">Website Content</p>
          <p className="hover:text-white">Marketing Content</p>
          <p className="hover:text-white">Image Generator</p>
          <p className="hover:text-white">Voice Generator</p>
          <p className="hover:text-white">Text Generator</p>
          <p className="hover:text-white">Chatting</p>
        </div>

        {/* Column 4 */}
        <div className="md:w-1/5 text-gray-400 font-semibold space-y-3">
          <p className="text-lg text-white font-bold">Important Links</p>
          <p className="hover:text-white">Terms & Conditions</p>
          <p className="hover:text-white">FAQs</p>
          <p className="hover:text-white">Privacy Policy</p>
          <p className="hover:text-white">Ads Complianace</p>
          <p className="hover:text-white">Become an Affiliate</p>
          <p className="hover:text-white">Free AI Tools</p>
        </div>
      </div>


      <div className="w-full grid justify-items-center">
        <hr className="bg-gray-700 h-0.5 border-0 py-13 w-11/12" />
      </div>

      <div className="text-center py-5">
        <p className="text-gray-400">
          <b className="font-normal text-[#952e73]">Intelliwriter.io</b> © All
          rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
