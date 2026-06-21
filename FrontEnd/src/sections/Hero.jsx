import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
const Hero = ({ children, image, text = "light", link}) => {
  const colorStyles = {
    dark: "text-gray-900",
    light: "text-white",
  };

  const links = {
    home: "/OurService#service_page",
    service: "/OurService#layanans"
  }

  return (
    <div
      className="relative w-full h-[80vh] bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${image})` }}
      id="home"
    >
      <div className="flex flex-col items-center justify-center text-center h-full absolute inset-0">
        <div className="absolute inset-0 bg-black/30 -z-10"></div>
        <h2
          className={`${colorStyles[text]} md:text-white text-4xl font-bold md:shadow-lg`}
        >
          Layanan Terapi Terpercaya
        </h2>
        <p className="mt-4 text-md px-3 text-sm md:text-xl font-bold text-white md:text-gray-100 max-w-3xl drop-shadow-md">
          {children}
        </p>
        <div className="mt-8 flex flex-col md:flex-row gap-4">
          <div>
            <a
              href="https://wa.me/6285770171153?text=Halo%20Admin,%20saya%20ingin%20konsultasi%20mengenai%20Terapi%20Lintah."
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <button className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-full transition-all shadow-lg transform hover:scale-105">
                Konsultasi Sekarang
              </button>
            </a>
          </div>
          <HashLink smooth to={links[link]}>
            <button className="px-8 py-3 bg-white/20 hover:bg-white/30 text-white font-bold rounded-full backdrop-blur-sm border border-white/50 transition-all">
              Lihat Layanan
            </button>
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default Hero;
