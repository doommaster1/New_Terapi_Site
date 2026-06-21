import { MessageCircle, Smartphone, Activity, Droplet, ShieldCheck } from "lucide-react";

const Stepper = () => {
  // Array data untuk memudahkan kita jika ingin menambah/mengubah langkah nanti
  const steps = [
    // { 
    //   id: 1, 
    //   title: "Konsultasi", 
    //   desc: "Diskusikan keluhan kesehatan Anda kepada terapis kami.", 
    //   icon: MessageCircle 
    // },
    { 
      id: 2, 
      title: "Konsultasi & Booking via WA", 
      desc: "Diskusikan keluhan kesehatan Anda dan atur jadwal kedatangan", 
      icon: MessageCircle 
    },
    { 
      id: 3, 
      title: "Proses Terapi", 
      desc: "Pemasangan lintah pada titik anatomi yang tepat.", 
      icon: Activity 
    },
    { 
      id: 4, 
      title: "Bekam", 
      desc: "Pengeluaran sisa darah kotor (jika diperlukan).", 
      icon: Droplet 
    },
    { 
      id: 5, 
      title: "Pembersihan", 
      desc: "Sterilisasi area terapi dan observasi pasca tindakan.", 
      icon: ShieldCheck 
    },
  ];

  return (
    <div className="w-full py-32 max-w mx-auto px-6 bg-gradient-to-b from-white via-[#fafbfd] to-[#dbe9f2] flex justify-center items-center flex-col">
      {/* Judul Section */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-black mb-4">Cara Kerja Kami</h2>
        <p className="text-[#535c68] text-lg">Proses terapi yang aman, terstruktur, dan profesional</p>
      </div>

      {/* Container Stepper */}
      <div className="flex flex-col md:flex-row justify-between items-center relative max-w-7xl w-full">
        
        {/* Garis Horizontal Background (Hanya Muncul di Desktop) */}
        <div className="hidden md:block absolute top-8 left-[10%] w-[80%] h-1 bg-gray-200 z-0"></div>

        {/* Mapping data steps */}
        {steps.map((step, index) => (
          <div key={step.id} className="relative z-10 flex flex-col items-center text-center w-full md:w-1/5 mb-8 md:mb-0">
            
            {/* Lingkaran Ikon */}
            <div className="w-16 h-16 rounded-full bg-white border-4 border-[#e17100] flex items-center justify-center text-[#e17100] shadow-md transition-transform duration-300 hover:scale-110 mb-4">
              <step.icon size={28} />
            </div>
            
            {/* Teks Konten */}
            <h3 className="font-bold text-lg text-gray-800">{step.title}</h3>
            <p className="text-sm text-gray-500 mt-2 px-4">{step.desc}</p>
            
            {/* Garis Vertikal (Hanya Muncul di Mobile sebagai penghubung ke bawah) */}
            {index !== steps.length - 1 && (
              <div className="block md:hidden h-10 w-1 bg-gray-200 mt-6 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stepper;