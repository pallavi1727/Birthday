import { FaHeart } from "react-icons/fa";
import { motion } from "framer-motion"; 

const colors = [
  "#ff1744",
  "#ff4081",
  "#ff69b4",
  "#ff1493",
  "#ff4d6d",
  "#ff85a2",
  "#ff758f",
];

const hearts = Array.from({ length: 80 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  delay: Math.random() * 5,
  duration: Math.random() * 4 + 9,
  size: Math.random() * 18 + 6,
  color: colors[Math.floor(Math.random() * colors.length)],
}));

const LoveConfetti = () => {
  return (
    <>
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="fixed top-0 pointer-events-none z-[9999]"
          style={{ left: `${heart.left}%` }}
          initial={{
            y: -100,
            rotate: 0,
            opacity: 1,
          }}
          animate={{
            y: window.innerHeight + 100,
            rotate: 360,
            x: [0, -30, 30, -20, 20, 0],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <FaHeart
            size={heart.size}
            color={heart.color}
          />
        </motion.div>
      ))}
    </>
  );
};

export default LoveConfetti;