import { MapPinCheckInside } from "lucide-react";
import { Clock } from "lucide-react";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer className="bg-[#2f3542] text-gray-300 text-center md:text-left">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-15">
        {/* Logo & Deskripsi */}
        <div>
          <h2 className="text-2xl font-bold text-white">Terapi Lintah Sehat</h2>

          <p className="mt-4 text-sm leading-6 text-gray-400">
            Menyediakan layanan terapi pendukung dengan pendekatan alami,
            higienis, dan profesional untuk membantu menjaga kesehatan tubuh.
          </p>
        </div>

        {/* Navigasi */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Navigasi</h3>

          <ul className="space-y-3 text-sm">
            <li>
              <HashLink smooth to="/#home">
                Tentang Kami
              </HashLink>
            </li>

            <li>
              <HashLink smooth to="/OurService#layanans">
                Layanan Kami
              </HashLink>
            </li>

            <li>
              <HashLink smooth to="/#contact">
                Hubungi Kami
              </HashLink>
            </li>
          </ul>
        </div>

        {/* Kontak */}
        <div className="text-center mt-2 flex justify-center flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold text-white mb-4">Kontak</h3>

          <ul className="space-y-3 text-sm text-gray-400 text-center md:text-start">
            <li className="flex items-center gap-2 pb-2">
              {" "}
              <MapPinCheckInside color="#e17100" size={23} /> Depok, Indonesia
            </li>
            <li className="flex items-center gap-2 pb-2">
              <Phone color="#e17100" size={23} /> 085770171153
            </li>
            <li className="flex items-center gap-2 pb-2">
              <Mail color="#e17100" size={23} />
              stefanusslamer66@gmail.com
            </li>
            <li className="flex items-center gap-2 pb-2">
              <Clock color="#e17100" size={23} /> Senin - Sabtu (09.00 - 20.00)
            </li>
          </ul>
        </div>

        {/* Sosial Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Ikuti Kami</h3>

          <div className="flex gap-4 w-full justify-center md:justify-start">
            <a
              target="_blank"
              href="https://www.instagram.com/riniagustinn1/"
              className="hover:text-[#e17100] transition"
            >
              <i className="bi bi-instagram"></i>
            </a>

            <a
              target="_blank"
              href="https://www.tiktok.com/@puspitasri12"
              className="hover:text-[#e17100] transition"
            >
              <i className="bi bi-tiktok"></i>
            </a>

            <a
              target="_blank"
              href="https://wa.me/6285770171153?text=Halo%20Admin,%20saya%20ingin%20konsultasi%20mengenai%20Terapi%20Lintah."
              className="hover:text-[#e17100] transition"
            >
              <i className="bi bi-whatsapp"></i>
            </a>
          </div>

          <a
            target="_blank"
            href="https://wa.me/6285770171153?text=Halo%20Admin,%20saya%20ingin%20konsultasi%20mengenai%20Terapi%20Lintah."
          >
            <button className="mt-6 bg-[#e17100] hover:bg-[#854301] transition text-white px-5 py-3 rounded-2xl text-sm font-medium">
              Konsultasi Sekarang
            </button>
          </a>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm text-gray-500">
          <p>
            Terapi yang diberikan bersifat pendukung dan tidak menggantikan
            konsultasi maupun pengobatan medis profesional.
          </p>

          <p className="mt-3">
            © 2026 Stefanus Anthony Harry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
