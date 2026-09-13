import { IoStarSharp } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import type { ITechnologies } from "../../types/types";

interface ITechnologieCardProps {
  technologie: ITechnologies;
  handleSelectStack: (technologie: ITechnologies) => void;
  selectStack: boolean;
}

const TechnologieCard = ({
  technologie,
  handleSelectStack,
  selectStack,
}: ITechnologieCardProps) => {
  return (
    <section
      className={`card bg-[#FFFFFF] border border-[#F1F5F9] shadow-sm  rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${selectStack === true ? "border border-pink-600" : ""}`}
    >
      <div className="card-body ">
        {/* // image and popular div */}
        <div className="flex justify-between">
          <div className="flex items-center gap-3">
            <img
              src={technologie.icon}
              alt="technologieIcon"
              className="w-[40px] h-[40px] "
            />

            <h2 className="text-[18px] font-bold text-[#0F172A] md:hidden ">
              {technologie.name}
            </h2>
          </div>
          <span className="badge badge-xs badge-warning px-[10px] py-[10px] text-[12px] rounded-full text-[#0EA5E9] bg-[#E0F2FE] border border-[#F0F9FF] font-semibold ">
            {technologie.badge}
          </span>
        </div>

        {/* // text div */}
        <div className="mt-[6px]">
          <h2 className="text-[18px] font-bold text-[#0F172A] hidden md:block">
            {technologie.name}
          </h2>
          <p className="text-[12px] leading-[20px] text-[#64748B] font-[400] ">
            {technologie.description}
          </p>
        </div>

        <div className="border border-[#F8FAFC] mb-[8px]" />

        <div className="flex justify-between items-center">
          <span className="bg-[#F1F5F9CC] text-[#475569] px-[10px] py-[4px] rounded-[7px] text-[11px] ">
            {technologie.category}
          </span>
          <span className="text-[#64748B] text-[11px] font-[500]">
            {technologie.difficulty}
          </span>
          <span className="font-semibold flex items-center gap-1 text-[#F59E0B] md:text-[#334155]">
            <IoStarSharp className="text-[#FBBF24] " />
            {technologie.rating}
          </span>
        </div>

        <div className="mt-[16px]">
          <button
            className={`btn py-[10px] rounded-[10px] w-full mt-auto ${
              selectStack === true
                ? "bg-[#DCFCE7] text-[#16A34A] border border-[#BBF7D0]"
                : "bg-[#0A0F1D] text-[#FFFFFF]"
            }`}
            onClick={() => handleSelectStack(technologie)}
            disabled={selectStack}
          >
            {selectStack === true ? (
              <span className="flex items-center justify-center gap-2">
                <FaCheck />
                Added to Stack
              </span>
            ) : (
              "Add to Stack"
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default TechnologieCard;
