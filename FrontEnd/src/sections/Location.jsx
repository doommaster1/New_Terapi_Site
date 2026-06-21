import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import Button from "../components/common/Button";

const Location = () => {
  return (
    <div
      className="w-full max-w-7xl mx-auto py-16 px-6 mb:30 md:mb-56 md:-mt-40"
      id="contact"
    >
      {/* Judul Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#e17100] mb-4">
          Lokasi & Kontak
        </h2>
        <p className="text-gray-600 text-lg">
          Kunjungi klinik kami atau hubungi kami untuk konsultasi dan reservasi.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Kolom Kiri: Informasi Kontak */}
        <div className="bg-white p-8 rounded-3xl shadow-xl flex flex-col space-y-6 order-last md:order-first">
          <div className="flex items-start gap-4">
            <div className="bg-amber-100 p-3 rounded-full text-[#e17100]">
              <MapPin size={28} />
            </div>
            <div>
              <h3 className="font-bold text-xl text-gray-800">
                Alamat Praktek
              </h3>
              <p className="text-gray-600 mt-1 leading-relaxed">
                Jl. Singgalang Raya No.15 blok 15, RT.3/RW.17, Mekarsari, <br />
                Kec. Cimanggis, Kota Depok, Jawa Barat 16452
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-amber-100 p-3 rounded-full text-[#e17100]">
              <Clock size={28} />
            </div>
            <div>
              <h3 className="font-bold text-xl text-gray-800">
                Jam Operasional
              </h3>
              <p className="text-gray-600 mt-1">
                Senin - Minggu: 09.00 - 21.00 WIB
              </p>
              <p className="text-[#eb4d4b] font-medium text-sm">
                Pastikan sudah melakukan booking melalui WhatsApp
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-amber-100 p-3 rounded-full text-[#e17100]">
              <Phone size={28} />
            </div>
            <div>
              <h3 className="font-bold text-xl text-gray-800">Kontak</h3>
              <p className="text-gray-600 mt-1">+62 857-7017-1153</p>
            </div>
          </div>

          {/* Tombol CTA WhatsApp */}
          <div className="pt-4">
            <a
              href="https://wa.me/6285770171153?text=Halo%20Admin,%20saya%20ingin%20konsultasi%20mengenai%20Terapi%20Lintah."
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <Button className="w-full flex items-center justify-center gap-2">
                <MessageCircle size={18} className="relative top-[1px]" />
                <span>Hubungi via WhatsApp</span>
              </Button>
            </a>
          </div>
        </div>

        {/* Kolom Kanan: Google Maps iframe */}
        <div className="w-full h-85 md:h-112.5 rounded-3xl overflow-hidden shadow-xl border-4 border-white">
          <iframe
            title="Lokasi Terapi Lintah Mekarsari"
            // GANTI LINK DI BAWAH INI DENGAN LINK EMBED MAPS KAMU
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.278287673032!2d106.86155408384319!3d-6.358014145762297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ed14caa4bcd9%3A0x7a787462ad7942c4!2sTerapi%20Lintah%2C%20Akupuntur%20dan%20Bekam%20mekarsari%20Depok!5e0!3m2!1sid!2sid!4v1778514678206!5m2!1sid!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Location;
