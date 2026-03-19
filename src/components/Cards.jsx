import React from "react";
import { ShieldCheck, User, TreeDeciduous } from "lucide-react";

// Estructura base para cada Card individual
const CardItem = ({ title, description, icon: Icon, bgColor, videoSrc }) => (
  <div
    className={`p-8 rounded-3xl bg-gradient-to-b ${bgColor} to-white shadow-xl shadow-gray-200/50 border border-white/50 flex flex-col items-center text-center space-y-4 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300`}
  >
    <div className="p-4 bg-white/60 backdrop-blur-sm rounded-2xl shadow-sm mb-2">
      <Icon className="text-gray-700" size={32} />
    </div>
    <h3 className="text-2xl font-bold text-gray-800 tracking-tight">{title}</h3>
    <p className="text-gray-500 leading-relaxed">{description}</p>
    {videoSrc && (
      <div className="w-full mt-4 rounded-xl overflow-hidden border border-white/60 shadow-sm">
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto object-cover"
        />
      </div>
    )}
  </div>
);

function Cards() {
  // Data para generar las tres cards solicitadas
  const cardsData = [
    {
      title: "Seguridad Garantizada",
      description:
        "Protegemos tu información con los más altos estándares de encriptación y privacidad.",
      icon: ShieldCheck,
      bgColor: "from-[#faacd4]/40", // Rosa pastel
    },
    {
      title: "Comunidad Activa",
      description:
        "Únete a nuestra red para compartir ideas, aprender y crecer junto a otros usuarios.",
      icon: User,
      bgColor: "from-[#cdb4db]/40", // Morado pastel
    },
    {
      title: "Physis",
      description: "The power in the Palm of your Hand",
      icon: TreeDeciduous,
      bgColor: "from-[#bdb2ff]/40", // Azul pastel
      videoSrc: "../src/vid/samplePhysis.mp4", // Asegúrate de colocar el nombre exacto de tu archivo aquí
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
      {cardsData.map((card, index) => (
        <CardItem key={index} {...card} />
      ))}
    </div>
  );
}

export default Cards;
