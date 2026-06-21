import {
  HeartPulse,
  Brain,
  Bone,
  Droplets,
  Soup,
  Ear,
  Eye,
  Venus,
  ShieldPlus,
  Sparkles,
  Ribbon,
} from "lucide-react";
import Button from "../common/Button";

export default function FullDiseases() {
  const diseases = [
    {
      id: 1,
      icon: <HeartPulse className="text-center" size={42} color="#e17100" />,
      category: "Pernapasan & Jantung",
      // Menggunakan placeholder image untuk contoh, nanti bisa diganti dengan URL foto asli
      information:
        "Terapi pendukung untuk membantu mengurangi keluhan terkait saraf, keseimbangan tubuh, dan gangguan neurologis tertentu.",
    },
    {
      id: 2,
      icon: <Brain className="text-center" size={42} color="#e17100" />,
      category: "Saraf & Neurologi",
      // Menggunakan placeholder image untuk contoh, nanti bisa diganti dengan URL foto asli
      information:
        "Membantu mendukung kesehatan sistem pernapasan dan sirkulasi darah untuk meningkatkan kenyamanan serta kualitas aktivitas sehari-hari.",
    },
    {
      id: 3,
      icon: <Bone className="text-center" size={42} color="#e17100" />,
      category: "Gangguan Tulang, Sendi & Otot",

      // Menggunakan placeholder image untuk contoh, nanti bisa diganti dengan URL foto asli
      information:
        "Membantu meredakan ketegangan otot, nyeri sendi, dan keluhan pada sistem gerak tubuh agar aktivitas lebih nyaman.",
    },

  {
    id: 4,
    icon: <Droplets size={42} color="#e17100" />,
    category: "Diabetes & Metabolik",
    information:
      "Pendekatan terapi alami untuk membantu menjaga sirkulasi darah dan mendukung kesehatan metabolisme tubuh.",
  },

  {
    id: 5,
    icon: <Soup size={42} color="#e17100" />,
    category: "Pencernaan & Organ Dalam",
    information:
      "Membantu mendukung kesehatan sistem pencernaan dan organ dalam untuk menjaga fungsi tubuh tetap optimal.",
  },

  {
    id: 6,
    icon: <Ear size={42} color="#e17100" />,
    category: "THT & Sinus",
    information:
      "Membantu mengurangi ketidaknyamanan pada area hidung, tenggorokan, dan telinga akibat gangguan tertentu.",
  },

  {
    id: 7,
    icon: <Eye size={42} color="#e17100" />,
    category: "Kesehatan Mata",
    information:
      "Terapi pendukung untuk membantu menjaga kenyamanan dan kesehatan area mata dari berbagai keluhan ringan.",
  },

  {
    id: 8,
    icon: <Venus size={42} color="#e17100" />,
    category: "Kesehatan Reproduksi Wanita",
    information:
      "Membantu mendukung kesehatan reproduksi wanita dan mengurangi berbagai keluhan kewanitaan tertentu.",
  },

  {
    id: 9,
    icon: <ShieldPlus size={42} color="#e17100" />,
    category: "Imun & Alergi",
    information:
      "Membantu meningkatkan kenyamanan tubuh terhadap reaksi alergi dan mendukung sistem pertahanan alami tubuh.",
  },

  {
    id: 10,
    icon: <Sparkles size={42} color="#e17100" />,
    category: "Kecantikan & Wellness",
    information:
      "Perawatan alami untuk membantu menjaga kebugaran, relaksasi, dan penampilan tubuh secara menyeluruh.",
  },

  {
    id: 11,
    icon: <Ribbon size={42} color="#e17100" />,
    category: "Kondisi Khusus",
    information:
      "Pendekatan terapi pendukung untuk membantu meningkatkan kenyamanan dan kualitas hidup pada kondisi tertentu.",
  },
  ];
  return (
    <section className="bg-linear-to-r from-[#ffffff] from-10% via-[#fff8f1] via-30% to-[#ffe8d6] to-90% py-12">
      <div className="flex mt-52 justify-center items-center text-center max-w-6xl mx-auto flex-col mb-2">
        <div className="mb-8">
          <h1 className="font-bold text-3xl mb-4 text-[#e17100]">
            Penyakit yang diatasi
          </h1>
          <p className="font-light text-lg">
            Temukan berbagai kondisi kesehatan yang dapat dibantu melalui terapi
            lintah dengan pendekatan tradisional dan perawatan yang higienis
            serta profesional.
          </p>
        </div>

        <div className="grid gap-12 grid-cols-1 md:grid-cols-3 place-items-center p-5 mb-18">
          {diseases.map((item) => (
            <div
              key={item.id}
              className="flex justify-center items-center flex-col w-full h-auto md:min-h-75 rounded-3xl bg-[#ced6e0] p-5"
            >
              {item.icon}
              <h1 className="font-bold p-4 text-xl">{item.category}</h1>
              <p className="pb-4">{item.information}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
