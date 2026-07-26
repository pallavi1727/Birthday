import { motion } from "framer-motion";

const rotations = [-4, 3, -2, 5];

const MemoryCard = ({ memory, index, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.05,
        rotate: 0,
        y: -10,
      }}
      transition={{ duration: 0.4 }}
      onClick={() => onClick(memory)}
      className="cursor-pointer"
      style={{
        rotate: `${rotations[index % rotations.length]}deg`,
      }}
    >
      <div className="rounded-lg bg-white p-3 shadow-2xl">
        <img
          src={memory.image}
          alt={memory.title}
          className="h-72 w-60 rounded object-cover"
        />

        <h3 className="mt-4 text-center text-lg font-semibold text-gray-800">
          {memory.title}
        </h3>

        <p className="mb-2 mt-2 text-center text-sm text-gray-500">
          {memory.description}
        </p>
      </div>
    </motion.div>
  );
};

export default MemoryCard;