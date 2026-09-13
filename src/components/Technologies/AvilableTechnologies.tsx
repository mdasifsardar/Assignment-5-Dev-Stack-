import { useState } from "react";
import { Bounce, toast } from "react-toastify";
import type { ITechnologies } from "../../types/types";
import TechnologieCard from "./TechnologieCard";
import YourStack from "./YourStack";

interface IAvilableTechnologiesProps {
  allTechnologiesData: ITechnologies[];
}

const AvilableTechnologies = ({
  allTechnologiesData,
}: IAvilableTechnologiesProps) => {
  const [selectedTechnologies, setSelectedTechnologies] = useState<
    ITechnologies[]
  >([]);

  const handleSelectStack = (technologie: ITechnologies) => {
    setSelectedTechnologies((prev) => [...prev, technologie]);

    toast.success(`${technologie.name} added to stack`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };

  const handleRemoveStack = (id: string) => {
    setSelectedTechnologies((prev) =>
      prev.filter((technologie) => technologie.id !== id),
    );
  };

  const handleRemoveAllStack = () => {
    setSelectedTechnologies([]);
  };

  return (
    <div className="grid md:grid-cols-4 grid-cols-1 gap-7 mt-6">
      <div className="grid md:grid-cols-3 md:col-span-3 col-span-1 grid-cols-1 gap-6">
        {allTechnologiesData.map((technologie) => {
          const selectStack = selectedTechnologies.some(
            (item) => item.id === technologie.id,
          );

          return (
            <TechnologieCard
              key={technologie.id}
              technologie={technologie}
              handleSelectStack={handleSelectStack}
              selectStack={selectStack}
            />
          );
        })}
      </div>

      <div className="col-span-1">
        <YourStack
          selectedTechnologies={selectedTechnologies}
          handleRemoveStack={handleRemoveStack}
          handleRemoveAllStack={handleRemoveAllStack}
        />
      </div>
    </div>
  );
};

export default AvilableTechnologies;
