import { use } from "react";
import type { ITechnologies } from "../../types/types";
import AvilableTechnologies from "./AvilableTechnologies";

interface ITechnologiesDataProps {
  technologiesData: Promise<ITechnologies[]>;
}

const MainTechnologies = ({ technologiesData }: ITechnologiesDataProps) => {
  const allTechnologiesData = use(technologiesData);

  return (
    <div className="container mx-auto p-[16px] md:p-0">
      <div className="mb-[40px] font-extrabold md:text-left text-center">
        <h2 className="text-[36px]">
          Explore the{" "}
          <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>
        <p className="text-[#64748B] font-[400] text-[16px]">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>
      <AvilableTechnologies allTechnologiesData={allTechnologiesData} />
    </div>
  );
};

export default MainTechnologies;
