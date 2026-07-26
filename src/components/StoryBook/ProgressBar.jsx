const ProgressBar = ({ current, total }) => {
  const progress = (current / (total - 1)) * 100;

  return (
    <div className="fixed top-6 left-1/2 z-50 w-64 -translate-x-1/2">
      <div className="relative h-1 rounded-full bg-white/20">
        <div
          className="absolute top-1/2 -translate-y-1/2 text-xl"
          style={{ left: `${progress}%`, transform: "translate(-50%, -50%)" }}
        >
          ❤️
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;