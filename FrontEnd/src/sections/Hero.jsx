import { Link } from "react-router-dom";
const Hero = ({children ,image, text = "light" }) => {
  const colorStyles = {
    dark: "text-gray-900",
    light: "text-white",
  };

  return (
    <div
      className="relative w-full h-[80vh] bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${image})` }}
      id="home"
    >
      <div className="flex flex-col items-center justify-center text-center h-full absolute inset-0">
        <div className="absolute inset-0 bg-black/30 -z-10"></div>
        <h2 className={`${colorStyles[text]} md:text-white text-4xl font-bold md:shadow-lg`}>
          Layanan Terapi Terpercaya
        </h2>
        <p className="mt-4 text-md px-3 text-sm md:text-xl font-semibold text-white md:text-gray-100 max-w-3xl drop-shadow-md">
          {children}
        </p>
        <div className="mt-8 flex flex-col md:flex-row gap-4">
          <Link to = "#"> 
          <button className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-full transition-all shadow-lg transform hover:scale-105">
            Konsultasi Sekarang
          </button>
          </Link>
          <Link to = "/OurService">
          <button className="px-8 py-3 bg-white/20 hover:bg-white/30 text-white font-bold rounded-full backdrop-blur-sm border border-white/50 transition-all">
            Lihat Layanan
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
