import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import Background from "../Common/BackgroundGlow";
import Button from "../Common/Button";

const Intro = ({ onNext }) => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.volume = 0.3;

        audioRef.current.play().catch((err) => {
          console.log("Autoplay blocked:", err);
        });
      }
    }, 1200);

    return () => {
      clearTimeout(timer);

      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }

    setPlaying(!playing);
  };

  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden">
      <Background />

      {/* Background Music */}
      <audio ref={audioRef} loop>
        <source
          src="https://res.cloudinary.com/ddc8n2veu/video/upload/v1785083625/ReelAudio-97063_pizvcp.mp3"
          type="audio/mpeg"
        />
      </audio>

      {/* Music Toggle Button */}
      {/* <button
        onClick={toggleMusic}
        className="absolute top-6 right-6 z-20 rounded-full bg-white/20 px-4 py-2 text-white backdrop-blur-md transition hover:bg-white/30"
      >
        {playing ? "🔊 Music On" : "🔇 Music Off"}
      </button> */}

      <div className="relative z-10 max-w-2xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-light text-white md:text-6xl"
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