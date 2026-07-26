import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Cover from "../Chapters/Cover";
import Intro from "../Chapters/Intro";
import LoveStory from "../Chapters/LoveStory";
import Gallery from "../Chapters/Gallery";
import BirthdayLetter from "../Chapters/BirthdayLetter";
import BirthdayCelebration from "../Chapters/BirthdayCelebration";
import FinalSurprise from "../Chapters/FinalSurprise";

const StoryBook = () => {
  const [page, setPage] = useState(0);

  const nextPage = () => {
    setPage((prev) => prev + 1);
  };

  const restartStory = () => {
    setPage(0);
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={page}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {page === 0 && <Cover onNext={nextPage} />}
        {page === 1 && <Intro onNext={nextPage} />}
        {page === 2 && <LoveStory onNext={nextPage} />}
        {page === 3 && <Gallery onNext={nextPage} />}
        {page === 4 && <BirthdayLetter onNext={nextPage} />}
        {page === 5 && <BirthdayCelebration onNext={nextPage} />}
        {page === 6 && (
          <FinalSurprise onRestart={restartStory} />
          
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default StoryBook;