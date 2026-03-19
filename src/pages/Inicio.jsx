// import React from "react";
// import AsideNews from "../components/AsideNews.jsx";
// import Footer from "../components/Footer.jsx";

// function Inicio() {
//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center">
//       <div className="container mx-auto flex items-center justify-start p-8 gap-8">
//         <aside className="w-80">
//           <AsideNews />
//         </aside>

//         <main className="flex-1 bg-white shadow-xl rounded-2xl p-10">
//           <h1 className="text-5xl font-bold text-blue-600 mb-4">
//             ¡Physis vive!
//           </h1>
//           <p className="text-gray-500 text-lg">
//             El entorno de React + Tailwind está configurado correctamente.
//           </p>
//         </main>
//       </div>

//       <div>
//         <Footer/>
//       </div>

// import React from 'react';
// import NavInicio from '../components/NavInicio';

// function Inicio() {
//   return (
//     <div className="min-h-[200vh] bg-[#f8f9fa]"> {/* min-h-200vh para permitir el scroll */}
//       <NavInicio />

//       {/* Contenido de prueba para ver el efecto */}
//       <main className="pt-32 px-4 flex flex-col items-center">
//         <div className="max-w-2xl text-center space-y-8">
//           <h1 className="text-6xl font-bold text-[#faacd4] drop-shadow-sm">
//             Bienvenido a Physis
//           </h1>
//           <p className="text-gray-600 text-xl leading-relaxed">
//             Baja para ver cómo la Navbar desaparece suavemente y sube para que el difuminado rosa te acompañe.
//           </p>

//           {/* Bloques de relleno para el scroll */}
//           <div className="h-64 w-full bg-gradient-to-b from-[#faacd4]/20 to-transparent rounded-3xl"></div>
//           <div className="h-64 w-full bg-gray-200 rounded-3xl"></div>
//           <div className="h-64 w-full bg-[#faacd4]/10 rounded-3xl"></div>
//         </div>

//       </main>
//     </div>

//   );
// }

// export default Inicio;

import React from "react";
import NavInicio from "../components/NavInicio";
import AsideNews from "../components/AsideNews.jsx";
import Footer from "../components/Footer.jsx";

function Inicio() {
  return (
    <div className="min-h-[220vh] bg-[#f8f9fa] flex flex-col">
      <NavInicio />

      <div className="container mx-auto flex flex-col lg:flex-row items-start justify-start p-8 gap-8">
        <aside className="lg:w-80 w-full sticky top-24">
          <AsideNews />
        </aside>

        <main className="flex-1 bg-white shadow-xl rounded-2xl p-10 space-y-8">
          <section className="space-y-4">
            <h1 className="text-5xl font-bold text-blue-600">¡Physis vive!</h1>
            <p className="text-gray-600 text-lg">
              Desplázate hacia abajo para ver el efecto de aparición y
              desplazamiento del componente newsletter.
            </p>
          </section>

          <section className="space-y-6">
            <div className="h-72 rounded-3xl bg-gradient-to-b from-[#faacd4]/40 to-[#f8f9fa]" />
            <div className="h-72 rounded-3xl bg-gradient-to-b from-[#cdb4db]/40 to-[#f8f9fa]" />
            <div className="h-72 rounded-3xl bg-gradient-to-b from-[#bdb2ff]/40 to-[#f8f9fa]" />
            <div className="h-72 rounded-3xl bg-gradient-to-b from-[#ffc6ff]/40 to-[#f8f9fa]" />
          </section>
        </main>
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export default Inicio;
