import { motion } from "framer-motion";

const StoryCard = ({ story }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7 }}
      className="w-full max-w-xl rounded-3xl border border-white/10 bg-white/10 md:p-8 pl-4 pr-4 backdrop-blur-xl shadow-2xl"
    >
      <div className="text-5xl text-center">
        {story.emoji}
      </div>

      <h2 className="mt-6 text-center md:text-3xl text-2xl font-semibold text-white">
        {story.title}
      </h2>

      <p className="md:mt-8 md:whitespace-pre-line text-center md:text-lg text-sm leading-9 text-slate-200">
        {story.text}
      </p>
    </motion.div>
  );
};

export default StoryCard;