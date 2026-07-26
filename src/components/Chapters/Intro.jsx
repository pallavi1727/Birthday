import { motion } from "framer-motion";
import Background from "../Common/BackgroundGlow";
import Button from "../Common/Button";

const Intro = ({ onNext }) => {
  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden">
      <Background />

      <div className="relative z-10 max-w-2xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-light text-white"
        >
          An Unexpected Hello
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-10 text-xl leading-9 text-slate-300"
        >
          You unexpectedly entered my life...
          <br />
          I never imagined...
          <br />
          You would become my whole world. ❤️
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="mt-14"
        >
          <Button onClick={onNext}>
            Turn The Page 📖
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;