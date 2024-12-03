const ImageDesign = () => {
  return (
    <div className=" w-full py-10 px-4 flex lg:flex-row flex-col justify-center">
      <div className="2xl:w-4/6 2xl:flex lg:flex lg:flex-row md:flex md:flex-col items-center gap-8 ">
        <div className="grid justify-center items-center lg:w-1/2 md:px-20 lg:px-0 2xl:w-2/5">
          <img src="./image-gen-min.png" alt="" className="w-fit" />
        </div>

        <div className="grid gap-7 lg:text-left text-center lg:w-1/2">
          <h1 className="lg:text-6xl md:text-5xl text-3xl text-white">
            Innovative{" "}
            <b className="bg-gradient-to-r from-[#CF8FFF] to-[#F252FF] bg-clip-text text-transparent">
              Image
            </b>{" "}
            Design
          </h1>
          <p className="md:text-xl text-base text-white font-medium !leading-8">
            The Intelliwriter Image Generator Module is a powerful addition to
            the Intelliwriter platform, enabling users to effortlessly create
            custom images that enhance their written content. With intuitive
            controls and advanced algorithms, this module ensures a seamless
            integration of dynamic visuals, elevating the overall impact and
            engagement of your message across various platforms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageDesign;
