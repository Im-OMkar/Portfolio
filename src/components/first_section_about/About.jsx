import "./about.css";

const About = () => {
  return (
    <>
      <div className="px-5 max-w-[1560px] mx-auto min-h-screen pt-20 flex items-center justify-between flex-wrap">
        <div className=" w-10/12 sm:w-8/12 mx-auto">
          <h1 className="font-semibold text-[32px] text-white mb-3">
            <span className="text-white">Omkar Ingale</span>
          </h1>
          <span className="text-[#C778DD]">Full stack developer</span>
          <span className="text-white"> and{" "}</span>
          <span className="text-[#C778DD]">Prompt Engineer</span>
          <p className="text-[#ABB2BF] my-6">
            I am a digital craftsman, weaving together the threads of frontend and
            backend technologies to create beautiful, responsive, and functional web applications as a Fullstack
            Developer.
          </p>
          <button className="text-white font-medium py-2 px-4 border duration-200 border-[#C778DD] hover:bg-[#C778DD33]">
            Say Hello!!
          </button>
        </div>
        <div className="mx-auto">
          <div className="home__img"></div>
          <div className="border flex items-center gap-2 border-[#ABB2BF] p-2 text-[#ABB2BF]">
            <div className="w-4 h-4 bg-[#C778DD]"></div>
            <div className="">
              Currently working with <span className="text-white">Thoughtworks</span>
            </div>
          </div>
        </div>
      </div>
      <div className=" px-5 py-10">
        <img className="mx-auto" src={require("./imgs/quote.png")} alt="" />
      </div>
    </>
  );
};

export default About;
