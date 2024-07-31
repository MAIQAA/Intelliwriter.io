const SocialSpehere = () => {
  return (
    <div className="grid gap-14 px-10 lg:px-[110px] py-10 pt-32 2xl:px-[17%]">
      {/* TITLE */}
      <div className="relative grid lg:text-6xl md:text-5xl text-4xl lg:left-4">
        <div className="uppercase absolute text-border text-gray-200 text-opacity-75  bottom-4 lg:bottom-5 lg:-left-4">
          Explore Our
        </div>
        <div className="uppercase relative font-semibold bg-gradient-to-r from-[#CC95FF] via-[#F056FF] to-[#F056FF] text-transparent bg-clip-text">
          Social Sphere
        </div>
      </div>

      <div className="w-full">
        {/* TABLETS , DESKTOPS */}
        <div className="relative md:block hidden ">
          <img src="./SocialAppsLandscape(1)(1).png" alt="" className="relative" />
        </div>

        {/* Mobile */}
        <div className="relative md:hidden block">
          <img src="./SocialAppsMob(1)(1).png" alt="" className="relative" />
        </div>
      </div>
    </div>
  );
};

export default SocialSpehere;