import Data from "./Features.json";
export const Features = () => {
  return (
    <>
      <div className="grid gap-14 p-10 lg:px-[110px] pt-32 2xl:px-[17%]">
        {/* TITLE */}
        <div className="relative grid lg:text-6xl md:text-5xl text-4xl lg:left-4">
          <div className="uppercase absolute text-border text-gray-200 text-opacity-75  bottom-4 lg:bottom-5 lg:-left-4">
            Distinctive
          </div>
          <div className="uppercase relative font-semibold bg-gradient-to-r from-[#CC95FF] via-[#F056FF] to-[#F056FF] text-transparent bg-clip-text">
            Features
          </div>
        </div>

        {/* TEXT */}
        <div className="">
          <p className="md:text-[21px] text-base text-white font-medium !leading-8">
            Our team of professionals has deep experience in AI development and
            an unwavering commitment to your security and privacy. Discover the
            power of our innovative features designed to unleash your potential
            and drive success.
          </p>
        </div>
      </div>

      <div className="relative w-full p-10 flex justify-center justify-items-center">
        {/* FEATURES */}
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 custom-md-features:grid-cols-2 gap-6 justify-center">
          {Data.data.map((feature, index) => (
            <div
              key={index}
              className="w-[270px] h-66 grid justify-center text-center border-[#352852] border-2 justify-items-center text-white gap-3 p-3 rounded-lg bg-gradient-to-br from-[#120d2a] to-[#46386e] hover:scale-105 hover:bg-blend-overlay hover:bg-[#ffffff0c] hover:transition hover:ease-in-out hover:duration-500"
            >
              <div className="w-28 h-28 overflow-hidden flex items-center justify-center">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full"
                />
              </div>
              <h1 className="text-2xl font-semibold h-8">{feature.title}</h1>
              <p className="text-gray-300 h-16 overflow-hidden">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
