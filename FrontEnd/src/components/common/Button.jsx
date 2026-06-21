const Button = ({children, variant = "orange"}) => {
    const base = "px-8 py-3 font-bold rounded-full transition-all";

    const styles = {
        orange: "bg-amber-500 text-white hover:bg-amber-600 shadow-lg transform md:hover:scale-105",
        glass: "bg-gray-800/5 text-black hover:bg-gray-800/10 text-gray-800 backdrop-blur-sm border border-gray-800/20"
    }
  return (
    <button className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
};

export default Button;
