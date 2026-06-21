import { Worm } from "lucide-react";
import { Siren } from "lucide-react";
import Hero from "../sections/Hero";
import FullDiseases from "../components/layout/FullDiseases";
import waterfallimg from "../img/waterfall.jpg";
import Navbar from "../components/layout/Navbar";
import { HashLink } from "react-router-hash-link";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const OurService = () => {
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100); 
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="w-full overflow-hidden"
    id="service_page">
      <Navbar text="light" scroll="dark" />
      <Hero image={waterfallimg}>
        Dari terapi lintah hingga penanganan berbagai kondisi kesehatan, kami
        menghadirkan layanan yang aman, higienis, dan disesuaikan dengan
        kebutuhan setiap pasien.
      </Hero>
      <div>
        <div
          className="flex flex-col justify-center items-center mt-36"
          id="layanans"
        >
          <h1 className="font-bold text-3xl md:mb-4 text-[#e17100] text-center">
            Metode Pengobatan yang Digunakan
          </h1>
        </div>
        {/* Bagian dengan Background Wave */}
        <div className="relative overflow-hidden w-full md:pb-10">
          {" "}
          <div className="hidden absolute bottom-0 left-0 w-full h-full z-0 md:flex items-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              className="w-full h-full"
              preserveAspectRatio="none" 
            >
              <path
                fill="#e17100"
                fillOpacity=".4"
                d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
          <div className="grid grid-cols-1 w-full md:grid-cols-4 place-items-center p-6 gap-4 relative z-10">
            <div className="grid self-start justify-items-center md:col-span-2 text-center md:text-left">
              <p className="font-extralight text-[#130f40] mb-4 p-3 text-lg bg-white/50 backdrop-blur-sm rounded-xl md:bg-transparent md:backdrop-blur-none text-left">
                Pendekatan terapi alami melalui terapi lintah dan bekam untuk
                membantu mendukung kesehatan tubuh, melancarkan sirkulasi darah,
                dan meningkatkan kualitas hidup. Terdapat{" "}
                <span className="text-[#e17100] font-bold">dua pengobatan</span>{" "}
                yang didapatkan, yaitu
              </p>
            </div>

            <div className="bg-[#badc58] flex flex-col justify-center items-center p-2 md:p-6 h-75 md:h-auto w-full md:col-span-1 rounded-2xl shadow-lg min-h-80 md:min-h-88">
              <Worm className="mb-4 text-4xl text-white" size={52} />
              <h1 className="font-bold text-3xl text-white">Terapi Lintah</h1>
              <p className="text-center text-white px-4 py-6 font-medium">
                Metode terapi tradisional yang menggunakan lintah medis untuk
                membantu melancarkan sirkulasi darah, mendukung proses pemulihan
                tubuh, dan membantu mengurangi berbagai keluhan kesehatan
                tertentu.
              </p>
            </div>

            <div className="bg-[#eb4d4b] flex flex-col justify-center items-center p-2 md:p-6 h-75 md:h-auto w-full md:col-span-1 rounded-2xl shadow-lg min-h-80 md:min-h-88">
              <Siren className="mb-4 text-white" size={52} />
              <h1 className="font-bold text-3xl text-white">Bekam</h1>
              <p className="text-center text-white px-4 py-6 font-medium">
                Teknik terapi dengan metode penyedotan pada titik tertentu tubuh
                untuk membantu mengurangi ketegangan otot, melancarkan peredaran
                darah, dan membantu meningkatkan kenyamanan tubuh.
              </p>
            </div>
          </div>
        </div>
      </div>
      <FullDiseases />
    </div>
  );
};

export default OurService;
