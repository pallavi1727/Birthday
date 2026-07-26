import { motion } from "framer-motion";

const Envelope = ({ onOpen }) => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <motion.div
        whileHover={{
          scale: 1.05,
          y: -5,
        }}
        whileTap={{ scale: 0.97 }}
        onClick={onOpen}
        className="cursor-pointer"
      >
        <div className="relative w-80 h-56">

          {/* Envelope Body */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-pink-200 to-rose-300 shadow-2xl" />

          {/* Top Flap */}
          <div
            className="absolute top-0 left-0 w-full h-28"
            style={{
              clipPath: "polygon(0 0,100% 0,50% 100%)",
              background: "#f9a8d4",
            }}
          />

          {/* Heart */}
          <div className="absolute inset-0 flex items-center justify-center text-5xl">
            💌
          </div>
        </div>

        <p className="mt-8 text-center text-white text-xl">
          Click to Open My Letter
        </p>
      </motion.div>
    </div>
  );
};

export default Envelope;