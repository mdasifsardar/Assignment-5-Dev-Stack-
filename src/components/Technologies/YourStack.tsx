import type { ITechnologies } from "../../types/types";
import YourStackCard from "./YourStackCard";

interface IYourStackProps {
  selectedTechnologies: ITechnologies[];
  handleRemoveStack: (id: string) => void;
  handleRemoveAllStack: () => void;
}

const YourStack = ({
  selectedTechnologies,
  handleRemoveStack,
  handleRemoveAllStack,
}: IYourStackProps) => {
  return (
    <section className="bg-[#FFFFFF] border border-[#F1F5F9] shadow-sm rounded-2xl ">
      <div className="card-body">
        <h2 className="font-bold text-[16px]">Your Stack</h2>

        <h2 className="text-[#94A3B8] font-[400] text-[12px] mb-[12px]">
          {selectedTechnologies.length > 0
            ? ` ${selectedTechnologies.length} Technology Selected`
            : "No technologies selected yet"}
        </h2>

        {selectedTechnologies.length === 0 ? (
          <p className="text-[#94A3B8] text-[12px] text-center mt-5 border border-[#E2E8F0] p-7 rounded-2xl">
            Your Stack is Empty
          </p>
        ) : (
          <>
            {selectedTechnologies.map((technologie) => (
              <YourStackCard
                key={technologie.id}
                technologie={technologie}
                handleRemoveStack={handleRemoveStack}
              />
            ))}

            <button
              onClick={handleRemoveAllStack}
              className="w-full mt-4 border border-[#ED8C85] text-[#D82C20] py-2 rounded-lg font-bold text-[13px] cursor-pointer hover:bg-red-50"
            >
              Remove All
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default YourStack;
