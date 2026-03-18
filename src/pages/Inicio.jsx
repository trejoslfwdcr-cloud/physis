import React from "react";
import AsideNews from "../components/AsideNews.jsx";
import Footer from "../components/Footer.jsx";

function Inicio() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center">
      <div className="container mx-auto flex items-center justify-start p-8 gap-8">
        <aside className="w-80">
          <AsideNews />
        </aside>

        <main className="flex-1 bg-white shadow-xl rounded-2xl p-10">
          <h1 className="text-5xl font-bold text-blue-600 mb-4">
            ¡Physis vive!
          </h1>
          <p className="text-gray-500 text-lg">
            El entorno de React + Tailwind está configurado correctamente.
          </p>
        </main>
      </div>
      
      <div>
        <Footer/>
      </div>
    </div>


  );
}

export default Inicio;
