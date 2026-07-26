import { useState } from "react";
import Background from "../Common/BackgroundGlow";
import StoryCard from "../StoryCard";
import Button from "../Common/Button";
import { storyData } from "../data/storyData";

const LoveStory = ({ onNext }) => {
  const [index, setIndex] = useState(0);

  const nextStory = () => {
    if (index < storyData.length - 1) {
      setIndex(index + 1);
    } else {
      onNext();
    }
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <Background />

      <div className="relative z-10 flex w-full max-w-2xl flex-col items-center">
        <h1
          className="mb-8 text-center text-5xl text-white"
          style={{ fontFamily: "Great Vibes" }}
        >
          Our Story
        </h1>

        <StoryCard story={storyData[index]} />

        <div className="mt-10">
          <Button onClick={nextStory}>
            {index === storyData.length - 1
              ? "Continue 🤍"
              : "Next Memory →"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LoveStory;