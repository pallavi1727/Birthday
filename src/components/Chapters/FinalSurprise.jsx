import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import Background from "../Common/BackgroundGlow";
import Button from "../Common/Button";

// import finalPhoto from "../../assets/images/last.png";
// import birthdayMusic from "../../assets/music/birthday.mp4";
import Confetti from "react-confetti";
import LoveConfetti from "../Common/LoveConfetti";
const FinalSurprise = ({ onRestart }) => {
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
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <>
        <LoveConfetti /> 
      </>

      <Background />

      {/* Audio */}
      <audio ref={audioRef} loop>
        <source src={'https://res.cloudinary.com/ddc8n2veu/video/upload/v1785082728/Insta_Saver__bhoomi_official_27_audio__%EF%B8%8F_%EF%B8%8F_%EF%B8%8F_jf5u6p.mp3'} type="audio/mpeg" />
      </audio>

      {/* Music Button */}
      {/* <button
        onClick={toggleMusic}
        className="absolute right-6 top-6 z-20 rounded-full bg-white/20 px-4 py-2 text-white backdrop-blur-md transition hover:bg-white/30"
      >
        {playing ? "🔊 Music On" : "🔇 Music Off"}
      </button> */}

      <div className="relative z-10 max-w-4xl text-center">

        {/* Floating Heart */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [-5, 5, -5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="md:mb-8 mb-5 text-6xl"
        >
          ❤️
        </motion.div>

        {/* Photo */}
        <motion.img
          src={'https://res.cloudinary.com/ddc8n2veu/image/upload/v1785133178/Screenshot_2026-07-27_114851_vnt01d.png'}
          alt="Together Forever"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mx-auto h-50 w-50 rounded-full border-4 border-pink-400 object-cover shadow-[0_20px_60px_rgba(255,0,100,.4)]"
        />

        {/* Line 1 */}
        {/* <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="mt-10 text-3xl text-white"
        >
          You unexpectedly entered my life...
        </motion.h2>

        {/* Line 2 */}
        {/* <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3 }}
          className="mt-6 text-6xl md:text-7xl text-pink-300"
          style={{ fontFamily: "Great Vibes" }}
        >
          Now You Are My Whole World ❤️
        </motion.h1> */}

        {/* Message */}


        {/* Birthday Wish */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="md:mt-12 md:text-5xl text-2xl text-rose-400"
          style={{ fontFamily: "Great Vibes" }}
        >
          Happy Birthday
          <br />
          My Dear Husband 🎂❤️
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="mx-auto md:mt-10 max-w-2xl md:text-xl text-md leading-10 text-slate-300"
        >
          If I had the chance to live a thousand lives...
          
          I'd still search for you.
          
          I'd still choose you.
          
          Every single time. ❤️
        </motion.p>

        {/* Replay Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="md:mt-12"
        >
          <Button onClick={onRestart}>
            Replay Our Story 📖
          </Button>
        </motion.div>

      </div>
    </section>
  );
};

export default FinalSurprise;