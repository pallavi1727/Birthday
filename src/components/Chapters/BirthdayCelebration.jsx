import { motion } from "framer-motion";
import Background from "../Common/BackgroundGlow";
import Button from "../Common/Button";
import Confetti from "react-confetti";

const BirthdayCelebration = ({ onNext }) => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <Background />

      <Confetti
        recycle={false}
        numberOfPieces={300}
      />

      <div className="relative z-10 px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl uppercase tracking-widest text-white"
        >
          Today is all about...
        </motion.h2>

        <motion.h1
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-6 text-7xl text-rose-400 md:text-8xl"
          style={{ fontFamily: "Great Vibes" }}
        >
          Happy Birthday
        </motion.h1>

        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-6 text-4xl text-white"
        >
          My Love ❤️
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mx-auto mt-10 max-w-2xl text-lg leading-8 text-slate-300"
        >
          Every birthday reminds me how lucky I am to have you.
          <br />
          Thank you for filling my life with love, laughter,
          happiness and endless beautiful memories.
        </motion.p>

        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
          }}
          className="mt-8 text-6xl"
        >
          ❤️
        </motion.div>

        {/* NEXT PAGE BUTTON */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="mt-12"
        >
          <Button onClick={onNext}>
            One Last Surprise 🎁
          </Button>
        </motion.div>

      </div>
    </section>
  );
};

export default BirthdayCelebration;