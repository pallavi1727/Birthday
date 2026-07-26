const buttonLabels = [
  "Let's Begin ❤️",
  "Turn the Page 📖",
  "Our Story 💕",
];

const Navigation = ({ current, total, next, previous }) => {
  return (
    <div className="fixed bottom-8 left-0 right-0 flex justify-center gap-4">
      {current > 0 && (
        <button
          onClick={previous}
          className="rounded-full border border-white/20 px-6 py-3 text-white backdrop-blur-md transition hover:bg-white/10"
        >
          ← Back
        </button>
      )}

      {current < total - 1 && (
        <button
          onClick={next}
          className="rounded-full bg-pink-500 px-8 py-3 text-white transition hover:scale-105 hover:bg-pink-600"
        >
          {buttonLabels[current]}
        </button>
      )}
    </div>
  );
};

export default Navigation;