import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Background from "../Common/BackgroundGlow";
import Envelope from "../Letter/Envelope";
import LetterPaper from "../Letter/LetterPaper";
import Button from "../Common/Button";

const SECRET_PASSWORD = "HariPallavi@2227";

const BirthdayLetter = ({ onNext }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [opened, setOpened] = useState(false);
  const [readMore, setReadMore] = useState(false);

  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(true);

  // =========================================================
  // PLAY LETTER SONG WHEN LETTER OPENS
  // =========================================================

  useEffect(() => {
    if (!opened) return;

    const timer = setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.volume = 0.3;

        audioRef.current.play().catch((err) => {
          console.log("Autoplay blocked:", err);
          setPlaying(false);
        });
      }
    }, 500);

    return () => {
      clearTimeout(timer);

      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, [opened]);

  // =========================================================
  // MUSIC TOGGLE
  // =========================================================

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play().catch(() => {});
      setPlaying(true);
    }
  };

  // =========================================================
  // OPEN PASSWORD POPUP
  // =========================================================

  const handleOpenSecret = () => {
    setPassword("");
    setError("");
    setShowPassword(true);
  };

  // =========================================================
  // PASSWORD CHECK
  // =========================================================

  const handlePasswordSubmit = (e) => {
    e.preventDefault();

    if (password === SECRET_PASSWORD) {
      setShowPassword(false);
      setOpened(true);
      setReadMore(false);
      setError("");
    } else {
      setError("Wrong password 😜");
    }
  };

  // =========================================================
  // CONTINUE WITHOUT LETTER
  // =========================================================

  const continueWithoutLetter = () => {
    setShowPassword(false);
    setPassword("");
    setError("");

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    onNext();
  };

  // =========================================================
  // CANCEL PASSWORD
  // =========================================================

  const handleCancel = () => {
    setShowPassword(false);
    setPassword("");
    setError("");
  };

  // =========================================================
  // CONTINUE READING
  // =========================================================

  const handleContinueReading = () => {
    setReadMore(true);
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      <Background />

      {/* =====================================================
          LETTER SONG
      ====================================================== */}

      <audio ref={audioRef} loop>
        <source
          src="https://res.cloudinary.com/ddc8n2veu/video/upload/v1786418390/letterSongs_ijjn8m.mp3"
          type="audio/mpeg"
        />
      </audio>

      {/* =====================================================
          ENVELOPE PAGE
      ====================================================== */}

      {!opened ? (
        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-2xl text-center"
          >

            {/* TITLE */}

            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mt-10 my-5 text-4xl text-white md:text-6xl"
              style={{ fontFamily: "Great Vibes" }}
            >
              A Secret Letter For You 💌
            </motion.h1>

            {/* ENVELOPE */}

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.5,
                duration: 0.8,
              }}
            >
              <Envelope onOpen={handleOpenSecret} />
            </motion.div>

            {/* BUTTONS */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="mt-5 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >

              <Button onClick={handleOpenSecret}>
                🔐 Open Secret Letter
              </Button>

              <button
                onClick={onNext}
                className="
                  rounded-full
                  border
                  border-white/30
                  bg-white/10
                  px-7
                  py-3
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:bg-white/20
                "
              >
                ➡️ Skip Letter
              </button>

            </motion.div>

            <p className="mt-5 text-sm text-slate-400">
              Some memories are meant to be unlocked... ❤️
            </p>

          </motion.div>
        </div>
      ) : (

        /* =====================================================
           LETTER PAGE
        ====================================================== */

        <div className="relative z-10 flex min-h-screen items-center justify-center px-4 pt-6">

          <LetterPaper>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full"
            >

              {/* =================================================
                  TITLE
              ================================================== */}

              <h1
                className="text-center text-2xl text-rose-500 md:text-3xl"
                style={{ fontFamily: "Great Vibes" }}
              >
                HAPPIEST BIRTHDAY TO MY DEAR HUSBAND ❤️
              </h1>

              {/* MUSIC BUTTON */}

              <div className="mt-3 flex justify-center">

                {/* <button
                  onClick={toggleMusic}
                  className="
                    rounded-full
                    bg-rose-100
                    px-5
                    py-2
                    text-sm
                    font-semibold
                    text-rose-600
                    transition
                    hover:scale-105
                    hover:bg-rose-200
                  "
                >
                  {playing ? "🔊 Music Playing" : "🔇 Play Music"}
                </button> */}

              </div>

              {/* =================================================
                  FIRST PART OF LETTER
              ================================================== */}

              <div
                className="
                  mt-4
                  text-lg
                  leading-6
                  text-gray-700
                "
                style={{ fontFamily: "Gabriola" }}
              >

                <p>
                  <strong>My Dear Husband,</strong>
                </p>

                <br />

                <p>
                  Em cheppali nee gurinchi... Naa life loki oka unexpected
                  person la ochavu. Eppudu asal ninnu odhili undalenantha
                  close aipoyav. Em chesavo thelidhu kani, nee presence
                  lekapothe aa roju asalu complete anipinchadhu.
                </p>

                <br />

                <p>
                  Asalu pelli chupullo just normal ga ocha...
                  "Em undhi le, reject cheddham" ani anukunna.
                  Kani ninnu chusaka ila attract avthanu ani assalu
                  anukole.
                  Okay cheppaka kuda chaala alochincha...
                  "Nenu relationship ki ready ga unnana?" ani.
                  Kani eppudaina pelli chesukunedhe kadha...
                  intha handsome boy ni miss chesthe malli ilaanti vaadu
                  vasthado radho ani finally okay cheppesa. 😁
                </p>

                <br />

                <p>
                  Enthalaa attract ayyav ante... intlo nenu nee pere
                  kalvaristhunna thelsa. Ashadam vellinappudu kuda,
                  evaraina ee topic theesthe chaalu...
                  "Maa aayana... maa aayana... maa aayana" antunta.
                  Normal ga "Hari" ani cheppochu ga...
                  aha, ala asal osthale. 😂❤️
                </p>

                <br />

                <p>
                  Vinnu em antundho thelsa...
                  "Neku mee aayana okadu unte saripothadhi kadha"
                  ani antundhi. 😂
                  Ante endhuku ala antunnav ante, pelli ki mundhu
                  ala lenanta nenu.
                  Asal em chesavo thelidhu kani, nuvvu lekapothe
                  nenu ela untano uhinchukodanike elano undhi.
                  Vammo... nenu undanu kavochu.
                  Don't leave me. 🥺🫂😚
                </p>

                <br />

                <p>
                  Chaala anukunna...
                  "Insta account undhi kadha, andhulo message cheyochu
                  kadha? Endhuku cheyyatledhu?" ani.
                  Naa account dorakatledhemo ani naa profile picture kuda
                  marchesa... aina no use!
                  Asalu chudaledu. 😂
                </p>

                <br />

                <p>
                  Sare, numbers exchange cheskunnaka matladukunnam.
                  Kani naa feeling entante, pelli ayyaka ne manam ekkuva
                  time spend chesthunnam.
                  Nijam cheppu... pelli ki mundhu okkasari kuda video call
                  cheyyali ani anipinchaledha? 🥺
                  Emo... andharu pelli ki mundhu ekkuva matladukuntaru,
                  manam matram pelli tharvatha anni start chesam.
                </p>

                <br />

                <p>
                  Pelli tharvatha nunchi nee meedha naa prema inka ekkuvaga
                  perigindhi.
                  Thank you for coming into my life and making every day
                  so special.
                  Your smile, your love, and your support mean the world to me.
                  I pray that you always stay by my side. 💕
                </p>

                {/* =================================================
                    CONTINUE READING BUTTON
                ================================================== */}

                {!readMore && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-8 flex justify-center"
                  >
                    <button
                      onClick={handleContinueReading}
                      className="
                        rounded-full
                        bg-gradient-to-r
                        from-pink-500
                        to-rose-500
                        px-8
                        py-3
                        font-semibold
                        text-white
                        shadow-lg
                        transition
                        duration-300
                        hover:scale-105
                      "
                    >
                      Continue Reading 📖
                    </button>
                  </motion.div>
                )}

              </div>

              {/* =================================================
                  REMAINING LETTER
              ================================================== */}

              <AnimatePresence>
                {readMore && (

                  <motion.div
                    initial={{
                      opacity: 0,
                      height: 0,
                    }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                    }}
                    transition={{
                      duration: 0.8,
                    }}
                    className="overflow-hidden"
                  >

                    <div
                      className="
                        mt-2
                        text-lg
                        leading-6
                        text-gray-700
                      "
                      style={{ fontFamily: "Gabriola" }}
                    >

                      <p>
                        Nuvvu naa husband maathrame kaadhu...
                        naa best buddy, naa strength, naa happiness,
                        naa peace, naa home.
                        Naa jeevitham antha neetho kalisi andamaina memories
                        create chesukuntu, prathi kastanni kalisi edurukoni,
                        prathi santhoshanni kalisi celebrate cheyyalani
                        korukuntunnanu.
                      </p>

                      <br />

                      <p>
                        Ammayilu mee dhaggara nunchi em pedda peddavi
                        korukoru.
                        Meeru maaku iche time, caring, chinna chinna
                        edho oka happy chese panulu chesthe chaalu.
                        Adhe maaku pedda achievement.
                        Nuvvu iche chinna chinna happiness kuda naaku
                        chaala special ga anipisthayi. ❤️
                      </p>

                      <br />

                      <p>
                        Netho oka roju matladakapoyina oka samvatsaram la
                        anipisthundhi.
                        Edho naa nunchi dhooram ga vellinattu...
                        "Neku nenu gurthunnana?" ani naa aathma aduguthundhi.
                        Pichi pichi thoughts osthayi.
                        Andhuke nuvvu message cheyyakapoyina nene chestha.
                        Nuvvu ante antha ishtam naaku. ❣️
                      </p>

                      <br />

                      <p>
                        Nenu okarini pranam kante ekkuva anukoni ishtapadithe,
                        vaalla gurinche ekkuva alochistha.
                        Enthala ante... oka message cheyyakapoyina,
                        call rakapoyina,
                        "Em ayyindho? Naa gurinchi emanna negative ga
                        anukuntunnara?" ani overthink chestha.
                        Pichi lesthadhi ega... night nidra kuda sarigga
                        pattadhu. 🥺
                      </p>

                      <br />

                      <p>
                        Finally, okkati cheppali...
                        Naa life lo nenu teesukunna best decision nuvvu.
                        Enni birthdays vachina, enni years gadichina,
                        nenu ilage nee pakkane undi, nee cheyyi pattukoni
                        mana life journey ni complete cheyyali
                        anukuntunnanu.
                      </p>

                      <br />

                      <p>
                        On your special day, I promise to stand by you
                        through every happiness and every challenge.
                        Nee navvu naa happiness... nee baadha naa baadha.
                        Nuvvu happy ga unte chaalu, adhe naa biggest gift.
                        May all your dreams come true, and may you always
                        have countless reasons to smile.
                      </p>

                      <br />

                      <p>
                        So don't avoid me please. 🥺
                        Overthinking manedham ani anukuntunna...
                        kani ithale adhi.
                        Nenu kuda try chestha, konchem konchem control
                        cheskuntanu.
                        Kani nuvvu nannu avoid cheyyaku okay na?
                        Maa manchi mogudu kadha... cheyyadu. 🥰😚🫂
                      </p>

                      <br />

                      <p>
                        And one last thing...
                        the most precious gift a husband can give his
                        partner is his time, and I'm so lucky to have yours.
                        ❤️
                      </p>

                      <br />
                      <p> Neku nenu Birthday gift pelli tharvatha ashadam lone e matter antha rasanu. Kani ela express chesthe anna marthav ani rasthunna.
If I'm wrong, forgive me. If I'm correct change your behaviour. 
Andharitho unnaru natho undoddhu ani anukunna, nijam gaane andharitho unnatu natho undattle. Naki nenu anukunnadi okati nv chesedhi okati, nannu andharikante special ga treat cheiyali anukunna kani nv asal naku correct output esthalev.
Oka stranger la anipisthundhi ne life lo nenu. Naku ne behaviour ala ne anipisthundhi. Hyd lo ithe mari ekkuva. Ega ne estam I'm your wife or stranger adhi neke theliyali. Neku chaala EGO undhi adhi pakkaki petti alochinchu neku nenu cheppedi ardham avthadhi. Nv entha chesina end of the day nv natho oka mata manchiga matladina. Entha varaki chepinavi anni marchipoye, karigipotha. Nv ante Naku antha estam.
                      </p>

                      <br/>

                      <p>
                        I am so grateful to have you in my life.
                        You are my greatest blessing, and I love you more
                        than words can ever express.
                        I can't wait to celebrate many more birthdays
                        with you and create countless beautiful memories
                        together.
                      </p>

                      <br />

                      <p>
                        Happy Birthday once again, my love! ❤️🎂🎈
                      </p>

                      <p>
                        Wishing you a day as amazing, wonderful, and special
                        as you are.
                      </p>

                      <br />

                      <p>
                        <strong>
                          Thank You For Choosing Me 💚
                        </strong>
                      </p>

                      <br />

                      <p className="font-bold">
                        I love you today, tomorrow, and forever. ❤️♾️
                      </p>

                    </div>

                    {/* =================================================
                        NEXT BUTTON — ONLY AFTER CONTINUE READING
                    ================================================== */}

                    <motion.div
                      initial={{
                        opacity: 0,
                        scale: 0.8,
                        y: 20,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: 0.5,
                        duration: 0.5,
                      }}
                      className="mt-8 flex justify-center pb-4"
                    >
                      <Button onClick={onNext}>
                        Continue Our Story ❤️
                      </Button>
                    </motion.div>

                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>

          </LetterPaper>

        </div>
      )}

      {/* =====================================================
          PASSWORD POPUP
      ====================================================== */}

      <AnimatePresence>
        {showPassword && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              z-[100]
              flex
              items-center
              justify-center
              bg-black/70
              px-5
              backdrop-blur-sm
            "
          >

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
              }}
              className="
                w-full
                max-w-md
                rounded-3xl
                bg-white
                p-8
                text-center
                shadow-2xl
              "
            >

              <div className="mb-4 text-5xl">
                🔐
              </div>

              <h2
                className="text-3xl text-rose-500"
                style={{ fontFamily: "Great Vibes" }}
              >
                Secret Letter
              </h2>

              <p className="mt-3 text-gray-600">
                Enter the secret password to unlock my letter ❤️
              </p>

              <form
                onSubmit={handlePasswordSubmit}
                className="mt-6"
              >

                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError("");
                  }}
                  placeholder="Enter password..."
                  autoFocus
                  className="
                    w-full
                    rounded-full
                    border
                    border-pink-200
                    px-5
                    py-3
                    text-center
                    outline-none
                    transition
                    focus:border-pink-400
                    focus:ring-2
                    focus:ring-pink-200
                  "
                />

                {error && (
                  <motion.p
                    initial={{
                      opacity: 0,
                      y: -5,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    className="mt-3 font-semibold text-red-500"
                  >
                    {error}
                  </motion.p>
                )}

                <div className="mt-6 flex flex-col gap-3">

                  <Button type="submit">
                    🔓 Unlock Letter
                  </Button>

                  <button
                    type="button"
                    onClick={continueWithoutLetter}
                    className="
                      rounded-full
                      bg-rose-100
                      px-6
                      py-3
                      font-semibold
                      text-rose-600
                      transition
                      hover:scale-105
                      hover:bg-rose-200
                    "
                  >
                    ➡️ Continue Without Letter
                  </button>

                  <button
                    type="button"
                    onClick={handleCancel}
                    className="
                      rounded-full
                      border
                      border-gray-300
                      px-6
                      py-3
                      text-gray-600
                      transition
                      hover:bg-gray-100
                    "
                  >
                    ❌ Cancel
                  </button>

                </div>

              </form>

            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default BirthdayLetter;
