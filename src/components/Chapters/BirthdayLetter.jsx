// import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Confetti from "react-confetti";
import { useState, useEffect, useRef } from "react";
import Background from "../Common/BackgroundGlow";
import Envelope from "../Letter/Envelope";
import LetterPaper from "../Letter/LetterPaper";

const BirthdayLetter = ({ onNext }) => {
  const [opened, setOpened] = useState(false);
  const [readMore, setReadMore] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
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
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  useEffect(() => {
    if (opened) {
      setShowConfetti(true);

      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [opened]);

  return (
    <section className="relative h-screen overflow-hidden">
      <Background />
      <audio ref={audioRef} loop>
        <source
          src="https://res.cloudinary.com/ddc8n2veu/video/upload/v1785136481/InShot_20260727_124125678_wewd1n.mp4"
          type="audio/mpeg"
        />
      </audio>

      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={1800}
          gravity={0.3}
        />
      )}

      <div className="relative z-10 flex h-screen items-center justify-center px-4">
        {!opened ? (
          <Envelope onOpen={() => setOpened(true)} />
        ) : (
          <LetterPaper>
            <h1
              className="text-center text-3xl text-rose-500"
              style={{ fontFamily: "Great Vibes" }}
            >
              Happiest Birthday To My Dear Husband ❤️
            </h1>

            <div
              className="mt-8 md:max-h-[60vh]  overflow-y-auto pr-3 text-lg leading-9 text-gray-700"
              style={{ fontFamily: "Gabriola" }}
            >
              <p>
                <strong>My Dear Husband,</strong>
                <br />
                <br />
                Em cheppali nee gurinchi... Naa life loki oka unexpected person
                la ochavu. Eppudu asal ninnu odhili undalenantha close aipoyav.
                Em chesavo thelidhu kani, nee presence lekapothe aa roju asalu
                complete anipinchatledhu.
                <br />
                <br />
                Asalu pelli chupullo just normal ga ocha... "Em undhi le, reject
                cheddham" ani anukunna. Kani ninnu chusaka ila attract avthanu ani
                assalu anukole.
                <br />
                <br />
                Okay cheppaka kuda chaala alochincha... "Nenu relationship ki
                ready ga unnana?" ani. Kani finally intha handsome boy ni miss
                chesthe malli ilaanti vaadu vasthado radho ani okay cheppesa. 😁
              </p>

              <AnimatePresence>
                {readMore && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.6 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-6 space-y-6">
                      <p>
                        Chaala anukunna... Insta account undhi kadha... endhuku
                        message cheyyatledhu ani. Naa account dorakatledhemo ani
                        profile picture kuda marchesa... aina no use! 😂
                      </p>

                      <p>
                        Sare numbers exchange cheskunnaka matladukunnam. Kani naa
                        feeling entante... pelli ayyaka ne manam ekkuva time spend
                        chesthunnam. Nijam cheppu... pelli ki mundhu okkasari kuda
                        video call cheyyali ani anipinchaledha? 🥺
                      </p>

                      <p>
                        Mana pelli fix ina dhaggara nunchi roju insta lo oka quote osthundhi, 
                        <strong>"Believe in god because he gives late but always gives but always gives better"</strong> ani, entha bagundho kadha......☺️
                        Ante devudu manam edharam kalvali ani gattiga anukunnadu🥹😘
                      </p>

                      <p>
                        Pelli tharvatha nunchi nee meedha naa prema inka
                        ekkuvaga perigindhi. Thank you for coming into my life
                        and making every day so special.
                      </p>

                      <p>
                        Urike Antav kadha nannu endhuku cheskunnanu anipinsthundha, oka manchi govt employee ni cheskunte bagundu anipisthundha ani,
                        Ala endhuku anipisthadhi abba, nenu ninnu ishtam thone kadha pelli chesukundi, edho ishtam lekunda cheskunnatu chesthunnav...
                        Plz inkosari alanti pichi pichi alochanalu manesi, peacefull ga positive thoughts tho undu. Be positive Abba😍🙂...
                        <strong>I Love You More Then Everything. Ani Neku eppudu ardham ithadhooo🤦‍♀️🥹❤️😘</strong>
                      </p>

                      <p>
                        Naku properties em avsaram ledhu nv na pakkana eppudu ela unte chaalu, Naku adhe veeyi kotla property ❤️
                        Na alochana motham nve
                        Mrng levagane modhati alochana, ngt ithe chivari alochana nve❤️
                      </p>

                      <p>
                        Your smile, your love, and your support mean the world
                        to me. Nuvvu naa husband maathrame kaadhu... naa best
                        buddy, naa strength, naa happiness, naa peace, naa home.
                      </p>

                      <p>
                        Finally... okkati cheppali. Naa life lo nenu teesukunna
                        best decision nuvvu. Enni birthdays vachina... nenu
                        ilage nee pakkane undi mana life journey ni complete
                        cheyyali anukuntunnanu.
                      </p>

                      <p>
                        <strong>
                          Make a promise that you'll be forever with me. 🙋‍♀️🤝🥰
                        </strong>
                      </p>

                      <p>
                        On your special day, I promise to stand by you through
                        every happiness and every challenge. Nee navvu naa
                        happiness... Nee baadha naa baadha.
                      </p>

                      <p>
                        And one last thing... the most precious gift a husband
                        can give his partner is his time, and I'm so lucky to
                        have yours. ❤️
                      </p>

                      <p>
                        I am so grateful to have you in my life. You are my
                        greatest blessing, and I love you more than words can
                        ever express.
                      </p>

                      <p>
                        Happy Birthday once again, my love! ❤️🎂🎈
                        <br />
                        Wishing you a day as amazing, wonderful, and special as
                        you are.
                      </p>

                      <p className="font-bold">
                        Thank You For Choosing Me 💚
                      </p>

                      <p className="font-bold">
                        I love you today, tomorrow, and forever. ❤️♾️
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="mt-4 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setReadMore(!readMore)}
                className="rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-8 py-3 text-white font-semibold transition duration-300 hover:scale-105"
              >
                {readMore ? "Close Letter 💌" : "Continue Reading 📖"}
              </button>

              {readMore && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  onClick={onNext}
                  className="rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 px-8 py-3 text-white font-semibold transition duration-300 hover:scale-105"
                >
                  Birthday Surprise 🎂
                </motion.button>
              )}
            </div>
          </LetterPaper>
        )}
      </div>
    </section>
  );
};

export default BirthdayLetter;