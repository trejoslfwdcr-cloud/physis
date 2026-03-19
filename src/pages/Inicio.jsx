

function Inicio() {
  return (
    <div className="min-h-[200vh] bg-[#f8f9fa]"> {/* min-h-200vh para permitir el scroll */}
      <NavInicio />
      
      {/* Contenido de prueba para ver el efecto */}
      <main className="pt-32 px-4 flex flex-col items-center">
        <div className="max-w-2xl text-center space-y-8">
          <h1 className="text-6xl font-bold text-[#faacd4] drop-shadow-sm">
            Bienvenido a Physis
          </h1>
          <p className="text-gray-600 text-xl leading-relaxed">
            Baja para ver cómo la Navbar desaparece suavemente y sube para que el difuminado rosa te acompañe.
          </p>
          
          {/* Bloques de relleno para el scroll */}
          <div className="h-64 w-full bg-gradient-to-b from-[#faacd4]/20 to-transparent rounded-3xl"></div>
          <div className="h-64 w-full bg-gray-200 rounded-3xl"></div>
          <div className="h-64 w-full bg-[#faacd4]/10 rounded-3xl"></div>
        </div>
      </main>
    </div>
  );
}

export default Inicio;