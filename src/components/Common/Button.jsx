const Button = ({ children, onClick, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="
        rounded-full
        bg-gradient-to-r
        from-pink-500
        to-rose-500
        px-7
        py-3
        font-semibold
        text-white
        shadow-lg
        transition-all
        duration-300
        hover:scale-105
        hover:shadow-pink-500/40
      "
    >
      {children}
    </button>
  );
};

export default Button;