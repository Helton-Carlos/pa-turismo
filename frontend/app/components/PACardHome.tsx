import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { cardProps } from "@/app/types/cardProps";

export default function PACardHome({
  imageUrl,
  titulo,
  descricao,
  textoBotao,
  onClick
}: cardProps) {
  const isBase64 = imageUrl?.startsWith("data:image");

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
      <div className="relative h-64 w-full overflow-hidden bg-gray-100">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={titulo}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            unoptimized={isBase64}
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full text-gray-400 text-sm">
            Sem imagem
          </div>
        )}

        <div className="absolute top-4 left-4 bg-blue-600/90 backdrop-blur-sm text-white font-bold px-2 py-1 rounded uppercase tracking-wider">
          Destino PA
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-blue-950 mb-2 group-hover:text-blue-600 transition-colors">
          {titulo}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
          {descricao}
        </p>

        <button
          onClick={onClick}
          className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-gray-50 text-blue-950 font-semibold rounded-xl hover:underline transition-all duration-300 cursor-pointer"
        >
          {textoBotao}
          <ArrowUpRight size={18} />
        </button>
      </div>
    </div>
  );
}
