import { motion } from "framer-motion";

const Button = ({ children, onClick }) => {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 35px rgba(236,72,153,.45)",
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      className="
        rounded-full
        bg-gradient-to-r
        from-pink-500
        to-rose-500
        px-8
        py-4
        text-white
        font-semibold
        text-lg
        shadow-lg
      "
    >
      {children}
    </motion.button>
  );
};

export default Button;