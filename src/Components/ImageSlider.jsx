import Marquee from "react-fast-marquee";
const ImageSlider = () => {
  return (
    <div className="relative grid gap-5 w-full pt-20">
      <Marquee direction="right" speed={15} autoFill="true">
        <img src="./slider_1.png" className="w-36 p-2  " />
        <img src="./slider_2.png" className="w-36 p-2  " />
        <img src="./slider_3.png" className="w-36 p-2  " />
        <img src="./slider_4.png" className="w-36 p-2  " />
        <img src="./slider_5.png" className="w-36 p-2  " />
        <img src="./slider_6.png" className="w-36 p-2  " />
        <img src="./slider_7.png" className="w-36 p-2  " />
        <img src="./slider_8.png" className="w-36 p-2  " />
        <img src="./slider_9.png" className="w-36 p-2  " />
        <img src="./slider_10.png" className="w-36 p-2  " />
        <img src="./slider_11.png" className="w-36 p-2  " />
        <img src="./slider_12.png" className="w-36 p-2  " />
        <img src="./slider_13.png" className="w-36 p-2  " />
      </Marquee>

      <div className="absolute grid justify-self-center z-10 top-1/3 -mt-3 border-2 border-solid border-[#5A329A] p-6 py-20 rounded-full bg-black bg-opacity-75 drop-shadow-glow ">
        <img
          src="Logo.png"
          className="grid justify-items-center w-40 drop-shadow-imageGlow"
          alt=""
        />
      </div>

      <Marquee direction="left" speed={15} autoFill="true">
        <img src="./slider_13.png" className="w-36 p-2 " />
        <img src="./slider_1.png" className="w-36 p-2 " />
        <img src="./slider_12.png" className="w-36 p-2 " />
        <img src="./slider_2.png" className="w-36 p-2 " />
        <img src="./slider_11.png" className="w-36 p-2 " />
        <img src="./slider_3.png" className="w-36 p-2 " />
        <img src="./slider_10.png" className="w-36 p-2 " />
        <img src="./slider_4.png" className="w-36 p-2 " />
        <img src="./slider_9.png" className="w-36 p-2 " />
        <img src="./slider_5.png" className="w-36 p-2 " />
        <img src="./slider_8.png" className="w-36 p-2 " />
        <img src="./slider_6.png" className="w-36 p-2 " />
        <img src="./slider_7.png" className="w-36 p-2 " />
      </Marquee>
    </div>
  );
};

export default ImageSlider;
