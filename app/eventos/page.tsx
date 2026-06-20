export default function Eventos() {
  return (
    <div className="max-w-2xl mx-auto space-y-6 py-6 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      <div className="text-center border-b pb-4">
        <h2 className="text-3xl font-extrabold text-red-600 uppercase tracking-wider">
          Eventos e Festas
        </h2>
        <p className="text-gray-600 text-sm mt-1">
          Conheça as grandes celebrações culturais que movimentam o calendário de Blumenau.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-black border-l-4 border-yellow-500 pl-2 uppercase tracking-wide">
          Principais Eventos da Cidade
        </h3>
        
        <div className="grid grid-cols-1 gap-3">
          <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
            <h4 className="font-bold text-gray-900">Oktoberfest</h4>
            <p className="text-xs text-gray-600 mt-1">
              O evento mais famoso de Blumenau e a maior festa alemã das Américas. Realizada anualmente em outubro no Parque Vila Germânica, celebra as tradições germânicas com música típica, danças folclóricas, gastronomia, desfiles e cervejas artesanais.
            </p>
          </div>

          <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
            <h4 className="font-bold text-gray-900">Sommerfest</h4>
            <p className="text-xs text-gray-600 mt-1">
              Conhecida como a "Oktoberfest de Verão", a Sommerfest acontece normalmente nos primeiros meses do ano, no Parque Vila Germânica. O evento mantém as tradições alemãs com música, dança e gastronomia em um ambiente mais tranquilo e familiar.
            </p>
          </div>

          <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
            <h4 className="font-bold text-gray-900">Festival Brasileiro da Cerveja</h4>
            <p className="text-xs text-gray-600 mt-1">
              Considerado um dos principais eventos cervejeiros do país, reúne cervejarias de diversas regiões do Brasil para apresentar novos rótulos, promover degustações e divulgar a cultura artesanal, fortalecendo o título da cidade como capital nacional da cerveja.
            </p>
          </div>

          <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
            <h4 className="font-bold text-gray-900">Festitália</h4>
            <p className="text-xs text-gray-600 mt-1">
              A Festitália celebra a rica cultura italiana também presente na região do Vale do Itajaí. O evento oferece apresentações musicais, danças folclóricas, culinária típica italiana e diversas atividades que destacam a herança desses imigrantes.
            </p>
          </div>
        </div>
      </div>

      <div className="pt-4">
        <img 
          src="https://www.jucanabalada.com.br/wp-content/uploads/2020/03/Oktoberfest-Blumenau2-1.jpg" 
          alt="Celebração" 
          className="rounded-lg w-full h-64 object-cover border-2 border-black shadow-md"
        />
      </div>
    </div>
  );
}