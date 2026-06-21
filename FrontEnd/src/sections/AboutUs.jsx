import Button from "../components/common/Button";
import { Leaf, CalendarHeart } from "lucide-react";
import leech from "../img/leech.jpg";
import mama from "../img/mama_jelek.jpg";
import lokasi1 from "../img/terapi1.jpg";
import lokasi2 from "../img/terapi2.jpg";
import { Link } from "react-router-dom"

const AboutUs = () => {
  return (
    <div className="flex justify-center py-24 px-4 md:px-8 bg-linear-to-b from-[#ffffff] from-10% to-[#fff8f1] via-90%">
      <div className="flex flex-col w-full max-w-7xl gap-16">
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
            <div className="text-left items-start gap-y-10 order-last md:order-first flex flex-col">
              <h3 className="text-[#e17100] font-extrabold text-xl md:text-2xl md:mb-3">
                Terapi Lintah Mekarsari
              </h3>
              <h3 className="text-[#e17100] font-extralight text-3xl md:mb-3 min-w-full">
                <span className="inline-flex items-center gap-1 whitespace-nowrap mb-1">
                  Sehat Lebih Alami, <Leaf />
                </span>

                <br />
                <span className="inline-flex items-center gap-1 whitespace-nowrap">
                  Nyaman Setiap Hari
                  <CalendarHeart />
                </span>
              </h3>
              <p className="md:mt-4 md:mb-6 text-md md:text-xl text-gray-700 leading-relaxed text-justify w-full max-w-md">
                Kami percaya kesehatan yang baik dimulai dari perawatan tubuh
                yang tepat. Melalui terapi lintah yang aman dan higienis, kami
                membantu Anda menjaga kebugaran, meningkatkan kenyamanan tubuh,
                dan menjalani aktivitas dengan lebih optimal.
              </p>
              <Link to ="/OurService">
              <Button className="w-fit">Learn More</Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 order-first md:order-last">
              {/* Gambar utama */}
              <div>
                <img
                  src={mama}
                  alt="Terapi lintah"
                  className="w-full h-[350px] object-cover rounded-xl shadow-md object-top"
                />
              </div>

              {/* Dua gambar samping */}
              <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
                <img
                  src={lokasi1}
                  alt="Lokasi terapi 1"
                  className="w-full h-full object-cover rounded-xl shadow-md"
                />

                <img
                  src={lokasi2}
                  alt="Lokasi terapi 2"
                  className="w-full h-full object-cover rounded-xl shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
