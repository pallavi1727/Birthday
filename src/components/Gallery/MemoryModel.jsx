import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MemoryModal = ({ memory, onClose }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (!memory) return;

    // Stop previous song
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    // Create new audio
    const audio = new Audio(memory.music);
    audio.loop = true;
    audio.volume = 0.5;

    audio
      .play()
      .catch((err) => console.log("Audio blocked:", err));

    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [memory]);

  const handleClose = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    onClose();
  };

  return (
    <AnimatePresence>
      {memory && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.7 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.7 }}
            transition={{ type: "spring" }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl rounded-2xl bg-white p-6 shadow-2xl"
          >
            <img
              src={memory.image}
              alt={memory.title}
              className="max-h-[70vh] w-full rounded-xl object-cover"
            />

            <h2 className="mt-5 text-center text-3xl font-bold text-pink-600">
              {memory.title}
            </h2>

            <p className="mt-3 text-center text-gray-600 leading-7">
              {memory.description}
            </p>

            {/* Music Controls */}
            {/* <div className="mt-6 flex justify-center gap-4">
              <button
                onClick={() => audioRef.current?.play()}
                className="rounded-full bg-pink-500 px-5 py-2 text-white hover:bg-pink-600"
              >
                ▶ Play Music
              </button> */}

              {/* <button
                onClick={() => audioRef.current?.pause()}
                className="rounded-full bg-gray-700 px-5 py-2 text-white hover:bg-gray-800"
              >
                ⏸ Pause
              </button>
            </div>

            <div className="mt-6 flex justify-center">
              <button
                onClick={handleClose}
                className="rounded-full bg-red-500 px-6 py-2 text-white hover:bg-red-600"
              >
                Close ❤️
              </button> */}
            {/* </div> */}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MemoryModal;