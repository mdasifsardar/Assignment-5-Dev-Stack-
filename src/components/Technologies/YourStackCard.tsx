import { RxCross1 } from "react-icons/rx";
import type { ITechnologies } from "../../types/types";

interface IYourStackCardProps {
  technologie: ITechnologies;
  handleRemoveStack: (id: string) => void;
}

const YourStackCard = ({
  technologie,
  handleRemoveStack,
}: IYourStackCardProps) => {
  return (
    <div className="flex justify-between items-center border border-[#E2E8F0] p-[10px] rounded-[15px]">
      {/* // Select player img div */}
      <div className="flex items-center gap-3 ">
        <img
          src={technologie.icon}
          alt="playerImg"
          className="w-[28px] h-[28px]   "
        />

        {/* // Select player text div */}
        <div>
          <h2 className="text-[15px] font-bold text-[#0F172A]  ">
            {technologie.name}
          </h2>
          <p className="text-[10px] text-[#94A3B8] font-bold ">
            {technologie.badge}
          </p>
        </div>
      </div>

      {/*  */}
      <span
        className="font-bold text-[#94A3B8] cursor-pointer "
        onClick={() => handleRemoveStack(technologie.id)}
      >
        <RxCross1 className="w-[24px] h-[24px]" />
      </span>
    </div>
  );
};

export default YourStackCard;
