import { motion } from "framer-motion";

const LetterPaper = ({ children }) => {
    return (
        <motion.div
            initial={{ y: 250, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="
    w-[95%]
    max-w-4xl
    h-[85vh]
    rounded-3xl
    bg-[#FFF8E7]
    p-8
    shadow-2xl
    overflow-hidden
  "
        >
            <div className="h-full overflow-y-auto pr-3">
                {children}
            </div>
        </motion.div>
    );
};

export default LetterPaper;