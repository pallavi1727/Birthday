import { useState } from "react";
import Background from "../Common/BackgroundGlow";
import Button from "../Common/Button";
import MemoryCard from "../Gallery/MemoryCard";
import MemoryModal from "../Gallery/MemoryModel";
import { memories } from "../data/memories";

const Gallery = ({ onNext }) => {
  const [selectedMemory, setSelectedMemory] = useState(null);

  return (
    <section className="relative h-screen overflow-hidden">
      <Background />

      <div className="relative z-10 flex h-full flex-col">

        {/* Heading */}
        <div className="pt-10 pb-6">
          <h1
            className="text-center text-5xl md:text-7xl text-white"
            style={{ fontFamily: "Great Vibes" }}
          >
            Our Beautiful Memories
          </h1>

          <p className="mt-4 text-center text-slate-300 text-lg">
            Every picture tells a story... ❤️
          </p>
        </div>

        {/* Scrollable Gallery */}
        <div className="flex-1 overflow-y-auto px-6 pb-12 pt-10">

          <div className="mx-auto grid max-w-6xl justify-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3">

            {memories.map((memory, index) => (
              <MemoryCard
                key={memory.id}
                memory={memory}
                index={index}
                onClick={setSelectedMemory}
              />
            ))}

          </div>

          {/* Button */}
          <div className="mt-16 mb-10 flex justify-center">
            <Button onClick={onNext}>
              Open My Letter 💌
            </Button>
          </div>

        </div>

      </div>

      {/* Popup */}
      <MemoryModal
        memory={selectedMemory}
        onClose={() => setSelectedMemory(null)}
      />
    </section>
  );
};

export default Gallery;