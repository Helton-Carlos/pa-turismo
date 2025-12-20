
import PAMain from "@/app/components/PAMain";
import PACardHome from '@/app/components/PACardHome';

export default function Home() {
  return (
    <div>
      <PAMain />

      <section className="p-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <PACardHome
          imageUrl="/home/canions.jpg"
          titulo="Cânions do São Francisco"
          descricao="Navegue pelas águas esmeraldas e contemple os paredões de granito esculpidos pelo tempo."
          textoBotao="Explorar Roteiro"
        />

        <PACardHome
          imageUrl="/home/chesf.jpg"
          titulo="Complexo Hidrelétrico"
          descricao="Conheça a engenharia por trás da força das águas e a história da integração do Nordeste."
          textoBotao="Agendar Visita"
        />

        <PACardHome
          imageUrl="/home/serra.jpg"
          titulo="Serra do Umbuzeiro"
          descricao="A melhor vista 360º de Paulo Afonso. Ideal para trilhas e amantes da fotografia."
          textoBotao="Ver Mapa"
        />
      </section>
    </div>
  );
}
