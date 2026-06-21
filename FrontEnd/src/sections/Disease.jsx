import Button from "../components/common/Button";
import { HeartPulse, Bone, Brain, Droplet, Cross, Bandage } from "lucide-react";
import leech from "../img/leech.jpg";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const Disease = () => {
  return (
    <div className="flex justify-center py-16 px-4 md:px-8 bg-gradient-to-b from-[#ffe8d6] from-10% via-[#fff8f1] via-30% to-[#ffffff] to-90%">
      <div className="flex flex-col w-full max-w-7xl gap-16">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-2 w-full">
            <Cross className="text-[#eb4d4b]" />
            <h2 className="text-md md:text-lg font-bold text-gray-800 whitespace-nowrap">
              Tentang Kami
            </h2>
            <div className="flex-1 h-[2px] bg-gray-300 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
            <div className="text-left order-last md:order-first">
              <h3 className="text-[#e17100] font-bold text-xl md:text-2xl">
                Terapi Lintah Mekarsari
              </h3>
              <p className="my-6 text-lg text-gray-700 leading-relaxed text-justify w-full max-w-[28rem]">
                "Dengan pengalaman lebih dari 10 tahun, Terapi Lintah Mekarsari
                telah menjadi spesialis kesehatan tradisional terpercaya di
                Depok. Kami memadukan teknik klasik dengan pemahaman anatomi
                modern untuk melancarkan sirkulasi darah dan detoksifikasi
                secara alami. Dedikasi satu dekade ini merupakan bukti nyata
                keahlian kami dalam membantu ribuan pasien mencapai pemulihan
                kesehatan yang optimal."
              </p>
              <Link
                to="/OurService#layanans"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>
                  Learn More
                </Button>
              </Link>
            </div>

            <div className="flex justify-center md:justify-end">
              <img
                src={leech}
                alt="Lintah"
                className="w-full max-w-[38rem] h-auto object-cover rounded-xl shadow-md"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-2 w-full">
            <Bandage className="text-[#eb4d4b]" />
            <h2 className="text-md md:text-lg font-bold text-gray-800 whitespace-nowrap">
              Penyakit yang Dibantu
            </h2>
            <div className="flex-1 h-[2px] bg-gray-300 rounded-full"></div>
          </div>
          <div className="grid items-start grid-cols-2 md:grid-cols-4">
            <div className="flex flex-col w-full h-auto p-5 min-h-12 items-center text-center">
              <div>
                <HeartPulse className="text-center" size={42} color="#e17100" />
              </div>
              <h1 className="font-bold py-2 text-xl">Pernapasan & Jantung</h1>
              <p className="pb-4 text-sm">
                Terapi pendukung untuk membantu mengurangi keluhan terkait
                saraf, keseimbangan tubuh, dan gangguan neurologis tertentu.
              </p>
            </div>
            <div className="flex flex-col w-full h-auto p-5 min-h-12 items-center text-center">
              <div>
                <Brain className="text-center" size={42} color="#e17100" />
              </div>
              <h1 className="font-bold py-2 text-xl">Saraf & Neurologi</h1>
              <p className="pb-4 text-sm">
                Membantu mendukung kesehatan sistem pernapasan dan sirkulasi
                darah untuk meningkatkan kenyamanan serta kualitas aktivitas
                sehari-hari.
              </p>
            </div>
            <div className="flex flex-col w-full h-auto p-5 min-h-12 items-center text-center">
              <div>
                <Bone className="text-center" size={42} color="#e17100" />
              </div>
              <h1 className="font-bold py-2 text-xl">
                Gangguan Tulang, Sendi & Otot
              </h1>
              <p className="pb-4 text-sm">
                Membantu meredakan ketegangan otot, nyeri sendi, dan keluhan
                pada sistem gerak tubuh agar aktivitas lebih nyaman.
              </p>
            </div>
            <div className="flex flex-col w-full h-auto p-5 min-h-12 items-center text-center">
              <div>
                <Droplet className="text-center" size={42} color="#e17100" />
              </div>
              <h1 className="font-bold py-2 text-xl">Diabetes & Metabolik</h1>
              <p className="pb-4 text-sm">
                Pendekatan terapi alami untuk membantu menjaga sirkulasi darah
                dan mendukung kesehatan metabolisme tubuh.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disease;
