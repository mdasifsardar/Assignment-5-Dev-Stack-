import develpment from "../../assets/banner-stack.png";

const DevelopmentSTack = () => {
  return (
    <section className="container mx-auto md:mt-[96px] mt-[31px] flex flex-col md:flex-row items-center justify-between md:mb-[112px]">
      {/* // left text */}
      <div className="text-center md:text-left">
        <h2 className="md:w-[600px] md:leading-[60px] leading-[35px] mb-[24px] font-extrabold text-[30px] md:text-[60px] ">
          Build Your Ideal <br />
          <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] text-transparent bg-clip-text">
            Development Stack
          </span>
        </h2>
        <p className="leading-[30px] w-[500px] text-[18px] text-[#475569] font-[400] mb-[40px]">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>

        <div className="space-x-2 md:text-left text-center">
          <button className="btn px-[16px] py-[15px] rounded-[12px] w-[170px] bg-linear-to-r from-[#F97316] to-[#EC4899] text-[#FFFFFF]">
            Explore Technologies
          </button>
          <button className="btn px-[16px] py-[15px] rounded-[12px] w-[170px] border border-[#E5E7EB] bg-[#FFFFFF]">
            Learn More
          </button>
        </div>
      </div>

      {/* // right image */}
      <div>
        <img src={develpment} alt="bannerImg" className="w-full" />
      </div>
    </section>
  );
};

export default DevelopmentSTack;
