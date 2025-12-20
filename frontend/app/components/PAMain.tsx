import { ChevronRight } from 'lucide-react';

export default function PAMain() {
  return (
    <main className="relative bg-[url('/home/main-image.png')] bg-cover bg-center min-h-screen flex flex-col items-center justify-center text-white px-4">
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      <div className="relative z-10 text-center max-w-3xl">
        <h2 className="text-sm md:text-lg uppercase mb-4 text-blue-300 font-semibold">
          Descubra a Capital da Energia
        </h2>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-bartle leading-tight">
          Onde o Sertão vira Mar
        </h1>

        <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed">
          Explore a imponência dos Cânions do Rio São Francisco, sinta a força
          das nossas cachoeiras e mergulhe na história da energia que move o
          Nordeste. Paulo Afonso espera por você com aventuras inesquecíveis.
        </p>

        <button className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg mx-auto cursor-pointer">
          <span>SAIBA MAIS</span>
          <ChevronRight
            className="group-hover:translate-x-1 transition-transform"
            size={20}
          />
        </button>
      </div>

      <span className="absolute bottom-10 right-10 text-sm opacity-50 tracking-widest hidden md:block">
        PA TURISMO • BAHIA • BRASIL
      </span>
    </main>
  );
}
