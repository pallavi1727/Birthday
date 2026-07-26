import FloatingStars from "./FloatingStars";

const Background = () => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#020617]">
      {/* Pink Glow */}
      <div className="absolute top-20 left-10 h-80 w-80 rounded-full bg-pink-500/20 blur-[120px]" />

      {/* Purple Glow */}
      <div className="absolute bottom-0 right-10 h-96 w-96 rounded-full bg-violet-500/20 blur-[140px]" />

      <FloatingStars />
    </div>
  );
};

export default Background;