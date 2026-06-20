export default function PontosTuristicos() {
  return (
    <div className="space-y-8 py-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-extrabold text-red-600 uppercase tracking-wider">
          Principais Pontos Turísticos
        </h2>
        <p className="text-gray-600 text-sm mt-2">
          Conheça os 6 locais imperdíveis e mais famosos que definem a identidade de Blumenau.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-black border-l-4 border-yellow-500 pl-2">
             Parque Vila Germânica
            </h3>
            <p className="text-gray-600 text-xs leading-relaxed">
              O Parque Vila Germânica é o principal centro de eventos de Blumenau e o coração da famosa Oktoberfest. O local reúne arquitetura inspirada na cultura alemã, feiras, gastronomia típica e espaços de lazer o ano todo.
            </p>
          </div>
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6wryHBVyCHtxRhDwa8nFtghZowvB1sij1qjC4670Usy7_bnltCSjtVM8&s=10" 
            alt="Parque Vila Germânica" 
            className="rounded-lg w-full h-48 object-cover border-2 border-black"
          />
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-black border-l-4 border-yellow-500 pl-2">
              Prefeitura de Blumenau
            </h3>
            <p className="text-gray-600 text-xs leading-relaxed">
              A Prefeitura chama a atenção pela sua belíssima arquitetura em estilo enxaimel, inspirada nas construções tradicionais alemãs. É um dos prédios mais fotografados de Santa Catarina e um grande símbolo da imigração.
            </p>
          </div>
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6FLBXH96c8mdEy0lNGviRB6MiW62RsS2GBSfUiVEMrw&s=10" 
            alt="Prefeitura de Blumenau" 
            className="rounded-lg w-full h-48 object-cover border-2 border-black"
          />
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-black border-l-4 border-yellow-500 pl-2">
             Museu da Cerveja
            </h3>
            <p className="text-gray-600 text-xs leading-relaxed">
              Apresenta a trajetória da produção cervejeira na região. Blumenau é a Capital Brasileira da Cerveja, e o museu conta essa história por meio de equipamentos antigos, fotografias e documentos históricos.
            </p>
          </div>
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdjs6sXDWl5C00fJzuUMKNFK_QpJz_OhVHA6JefMTCRA&s=10" 
            alt="Museu da Cerveja" 
            className="rounded-lg w-full h-48 object-cover border-2 border-black"
          />
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-black border-l-4 border-yellow-500 pl-2">
            Rua XV de Novembro
            </h3>
            <p className="text-gray-600 text-xs leading-relaxed">
              A via mais tradicional do centro da cidade. Concentra o comércio local, prédios históricos com forte influência germânica e é o palco principal dos desfiles oficiais da Oktoberfest que encantam turistas.
            </p>
          </div>
          <img 
            src="https://pancho.com.br/wp-content/uploads/2020/09/20200926-rota-1024x682.jpg" 
            alt="Rua XV de Novembro" 
            className="rounded-lg w-full h-48 object-cover border-2 border-black"
          />
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-black border-l-4 border-yellow-500 pl-2">
            Catedral São Paulo Apóstolo
            </h3>
            <p className="text-gray-600 text-xs leading-relaxed">
              Com sua imponente torre de pedra e arquitetura moderna, a Catedral contrasta de forma linda com a tradição enxaimel da cidade. É um marco de fé, história e arquitetura localizado bem no coração do centro urbano.
            </p>
          </div>
          <img 
            src="https://www.plazahoteis.com.br/wp-content/uploads/2021/02/dsc06938-min-1024x576.jpg" 
            alt="Catedral São Paulo Apóstolo" 
            className="rounded-lg w-full h-48 object-cover border-2 border-black"
          />
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-black border-l-4 border-yellow-500 pl-2">
            Parque Ramiro Ruediger
            </h3>
            <p className="text-gray-600 text-xs leading-relaxed">
              A área de lazer e natureza preferida dos blumenauenses. Conta com um grande lago central, pista de caminhada, muito espaço verde e uma atmosfera tranquila, ideal para relaxar após um dia inteiro de passeios turísticos.
            </p>
          </div>
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIj3UDoXNWbfbsUaj18mOVYYhTsKTjUYjUi1VQ6tOcN0VW2pZDPO-X25E&s=10" 
            alt="Parque Ramiro Ruediger" 
            className="rounded-lg w-full h-48 object-cover border-2 border-black"
          />
        </div>

      </div>
    </div>
  );
}