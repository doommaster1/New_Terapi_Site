export default function Testimonial() {
  // Menyimpan data testimoni ke dalam array agar kode lebih rapi (DRY - Don't Repeat Yourself)
  const testimonials = [
    {
      id: 1,
      name: "AJI LAKSONO",
      text: "Terapinya bagus pelayanan juga,rekomendasi banget.",
      // Menggunakan placeholder image untuk contoh, nanti bisa diganti dengan URL foto asli
      image:
        "https://ui-avatars.com/api/?name=Sainem+Wiyono&background=e17100&color=fff",
    },
    {
      id: 2,
      name: "BUDI SANTOSO",
      text: "Layanan sangat profesional, terapis datang tepat waktu dan ramah.",
      image:
        "https://ui-avatars.com/api/?name=Budi+Santoso&background=e17100&color=fff",
    },
    {
      id: 3,
      name: "SITI AMINAH",
      text: "Badan terasa lebih ringan setelah terapi pertama. Terima kasih!",
      image:
        "https://ui-avatars.com/api/?name=Siti+Aminah&background=e17100&color=fff",
    },
    {
      id: 4,
      name: "AGUS PRASETYO",
      text: "Sangat direkomendasikan untuk yang mencari terapi tradisional higienis.",
      image:
        "https://ui-avatars.com/api/?name=Agus+Prasetyo&background=e17100&color=fff",
    },
  ];

  return (
    <section className="flex justify-center flex-col md:py-44 mb-52 p-5 w-full max-w-full bg-linear-to-b from-[#fff8f1] from-0% to-[#ffe8d6] to-90%">
      {/* Bagian Judul */}
      <div className="max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="font-bold text-2xl md:text-3xl text-[#e17100]">
          Kata Mereka tentang Kami
        </h1>
        <p className="text-gray-500 mt-2 text-sm md:text-base">
          Pengalaman nyata dari pelanggan setia kami
        </p>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Looping data dari array testimonials */}
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
          >
            {/* Foto Profil User */}
            <img
              src={item.image}
              alt={`Profile ${item.name}`}
              className="w-20 h-20 rounded-full object-cover border-4 border-[#e17100]/20 mb-4 shadow-sm"
            />

            {/* Teks Testimoni */}
            <p className="text-gray-600 italic text-sm md:text-base mb-4 flex-1">
              "{item.text}"
            </p>

            {/* Nama User */}
            <h3 className="font-bold text-gray-800 text-sm tracking-wide">
              {item.name}
            </h3>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}

