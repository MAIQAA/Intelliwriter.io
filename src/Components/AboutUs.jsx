const AboutUs = () => {
  return (
    <div className="grid gap-10 py-10">
      {/* TITLE */}
      <div className="relative grid justify-items-center lg:text-6xl text-5xl">
        <div className="absolute text-border text-gray-200 pr-3 bottom-6 text-opacity-75">
          Our Story &
        </div>
        <div className="uppercase relative font-semibold bg-gradient-to-r from-[#CC95FF] via-[#F056FF] to-[#F056FF] text-transparent bg-clip-text">
          About US
        </div>
      </div>

      {/* TEXT */}
      <div className=" px-4">
        <p className="md:text-xl text-base text-white text-center md:p-6 md:px-20 font-medium !leading-8">
          Intelliwriter is an AI-based content generator designed to simplify
          and enhance your writing experience. Whether you are a content
          creator, marketer,student, or business owner, Intelliwriter is here to
          take your content creation process to a whole new level.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
