import React from "react";
import { ShieldCheck, User, TreeDeciduous } from "lucide-react";
import { useTheme } from "./themes.jsx";

// Estructura base para cada Card individual
const CardItem = ({ title, description, icon: Icon, tag, videoSrc, theme }) => (
  <div
    className={`w-full p-6 rounded-xl ${theme.bgGlass} ${theme.shadow} border ${theme.borderGlass} flex flex-col md:flex-row items-start md:items-center gap-6 group hover:shadow-md hover:border-[#d49b9b]/40 hover:-translate-y-1 transition-all duration-500`}
  >
    {/* Tag visible solo en móvil (arriba) */}
    {tag && (
      <div className="w-full flex justify-end md:hidden mb-2">
        <span
          className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${theme.accentText} border ${theme.borderGlass}`}
        >
          {tag}
        </span>
      </div>
    )}

    <Icon
      className={`${theme.accentText} transition-transform duration-500 group-hover:scale-110 shrink-0`}
      size={40}
    />

    <div className="flex-1">
      <div className="flex items-center gap-4 mb-2">
        <h3 className={`text-xl font-bold ${theme.textPrimary} tracking-tight`}>
          {title}
        </h3>
        {/* Tag visible en escritorio (junto al título) */}
        {tag && (
          <span
            className={`hidden md:inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${theme.accentText} border ${theme.borderGlass}`}
          >
            {tag}
          </span>
        )}
      </div>
      <p className={`${theme.textSecondary} text-sm leading-relaxed`}>
        {description}
      </p>
    </div>

    {videoSrc && (
      <div
        className={`w-full md:w-64 h-48 md:h-28 relative rounded-lg overflow-hidden border ${theme.borderGlass} shrink-0 mt-4 md:mt-0`}
      >
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
    )}
  </div>
);

function Cards() {
  const { theme } = useTheme();

  // Data para generar las tres cards solicitadas
  const cardsData = [
    {
      title: "You are the Most Valuable Human Being",
      description:
        "We Care for you growth, the tools in the palm of you hand, the jouney starts here.",
      icon: ShieldCheck,
      tag: "Phase 01",
    },
    {
      title: "The Time to make the changes you've been waitng for",
      description:
        "Come Join to Our Red and growth together with Physis.",
      icon: User,
      tag: "Phase 02",
    },
    {
      title: "Physis",
      description: "The power in the Palm of your Hand",
      icon: TreeDeciduous,
      tag: "Phase 03",
      videoSrc: "../src/vid/samplePhysis.mp4", // Asegúrate de colocar el nombre exacto de tu archivo aquí
    },
  ];

  return (
    <div className="flex flex-col gap-4 w-full">
      {cardsData.map((card, index) => (
        <CardItem key={index} {...card} theme={theme} />
      ))}
    </div>
  );
}

export default Cards;
