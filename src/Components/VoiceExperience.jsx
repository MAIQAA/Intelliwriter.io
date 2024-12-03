const VoiceExperience = () => {
  return (
    <div className=" w-full py-10 px-4 lg:flex-row flex flex-col justify-center">
      <div className="2xl:flex lg:flex lg:flex-row flex flex-col-reverse items-center gap-8">
        

        <div className="grid gap-7 lg:text-left text-center lg:w-1/2">
          <h1 className="lg:text-6xl md:text-5xl text-3xl text-white">
            Enhance{" "}
            <b className="bg-gradient-to-r from-[#CF8FFF] to-[#F252FF] bg-clip-text text-transparent">
              Voice
            </b>{" "}
            Experience
          </h1>
          <p className="md:text-xl text-base text-white font-medium !leading-8">
            Discover the impact of professional voice-overs with our
            cutting-edge voice services. Ideal for both novices and seasoned
            professionals, our platform not only enhances your projects with
            high-quality audio but also offers a unique voice replication
            feature. With intuitive controls and advanced technology, you can
            input a voice sample and generate the same voice tone across your
            projects, ensuring consistency and quality.
          </p>
        </div>

        <div className="grid justify-center items-center lg:w-1/2">
          <img src="./voice-over-min.png" alt="" className="w-fit" />
        </div>
      </div>
    </div>
  );
};

export default VoiceExperience;
