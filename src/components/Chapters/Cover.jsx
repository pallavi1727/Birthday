import { motion } from "framer-motion";
import Background from "../Common/BackgroundGlow";
import Button from "../Common/Button";
const Cover = ({ onNext }) => {
  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden">
      <Background />

      <div className="relative z-10 w-full max-w-2xl px-6 text-center">
        {/* Heart */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 120,
          }}
          className="mb-8 text-5xl"
        >
          ❤️
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-5xl md:text-7xl text-white"
          style={{
            fontFamily: "Great Vibes",
          }}
        >
          To The Love
          <br />
          Of My Life
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 text-lg leading-8 text-slate-300"
        >
          Every love story is beautiful...
          <br />
          But this one is my favorite.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="mt-14"
        >
          <Button onClick={onNext} className=' cursor-pointer'>
            Begin Our Story 💚
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Cover;