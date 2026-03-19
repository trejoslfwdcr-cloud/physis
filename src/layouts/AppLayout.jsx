import React from 'react';
import NavInicio from '../components/NavInicio';
import Sidebar from '../components/Sidebar';

function AppLayout({ children, rol }) {
  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col">
      {/* Navbar con el nuevo rosa suave y sin bordes */}
      <NavInicio />

      <div className="flex flex-1 pt-16">
        {/* Sidebar fija a la izquierda */}
        <Sidebar rol={rol} />

        {/* Contenido desplazado 64px (256px) a la derecha */}
        <main className="flex-1 ml-64 p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}

export default AppLayout;