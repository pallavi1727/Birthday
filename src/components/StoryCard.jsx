import { motion } from "framer-motion";

const StoryCard = ({ story }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7 }}
      className="w-full max-w-xl rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl shadow-2xl"
    >
      <div className="text-5xl text-center">
        {story.emoji}
      </div>

      <h2 className="mt-6 text-center text-3xl font-semibold text-white">
        {story.title}
      </h2>

      <p className="mt-8 whitespace-pre-line text-center text-lg leading-9 text-slate-200">
        {story.text}
      </p>
    </motion.div>
  );
};

export default StoryCard;