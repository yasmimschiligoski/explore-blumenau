export default function Gastronomia() {
  return (
    <div className="max-w-2xl mx-auto space-y-6 py-6 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      {/* Cabeçalho da Página */}
      <div className="text-center border-b pb-4">
        <h2 className="text-3xl font-extrabold text-red-600 uppercase tracking-wider">
          Gastronomia Típica
        </h2>
        <p className="text-gray-600 text-sm mt-1">
          Descubra os sabores tradicionais que definem a identidade de Blumenau.
        </p>
      </div>

      {/* Lista de Pratos Típicos */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-black border-l-4 border-yellow-500 pl-2 uppercase tracking-wide">
          Principais Pratos Típicos
        </h3>
        
        <div className="grid grid-cols-1 gap-3">
          <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
            <h4 className="font-bold text-gray-900">Marreco Recheado</h4>
            <p className="text-xs text-gray-600 mt-1">O marreco é assado e servido com repolho roxo, purê de maçã e batatas.</p>
          </div>

          <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
            <h4 className="font-bold text-gray-900">Eisbein (Joelho de Porco)</h4>
            <p className="text-xs text-gray-600 mt-1">Preparado cozido ou assado, puramente tradicional. Geralmente servido com chucrute.</p>
          </div>

          <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
            <h4 className="font-bold text-gray-900">Linguiça Blumenau</h4>
            <p className="text-xs text-gray-600 mt-1">Símbolo da cidade, possui sabor defumado único. Perfeita pura ou em receitas.</p>
          </div>

          <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
            <h4 className="font-bold text-gray-900">Kassler</h4>
            <p className="text-xs text-gray-600 mt-1">Lombo suíno defumado e grelhado, servido com acompanhamentos tradicionais.</p>
          </div>

          <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
            <h4 className="font-bold text-gray-900">Bratwurst</h4>
            <p className="text-xs text-gray-600 mt-1">A famosa salsicha alemã grelhada, muito popular nas festas de rua e restaurantes.</p>
          </div>

          <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
            <h4 className="font-bold text-gray-900">Bretzel</h4>
            <p className="text-xs text-gray-600 mt-1">Pão tradicional em formato de laço, com casca dourada e sal grosso salpicado.</p>
          </div>

          <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
            <h4 className="font-bold text-gray-900">Apfelstrudel</h4>
            <p className="text-xs text-gray-600 mt-1">Deliciosa sobremesa folhada recheada com maçãs quentes, açúcar e canela.</p>
          </div>

          <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
            <h4 className="font-bold text-gray-900">Cuca</h4>
            <p className="text-xs text-gray-600 mt-1">Massa macia com cobertura de farofa doce e frutas como banana ou uva.</p>
          </div>
        </div>
      </div>

      <div className="pt-4">
        <img 
          src="https://www.divvino.com.br/blog/wp-content/uploads/2019/10/o-que-%C3%A9-oktoberfest1.jpg" 
          alt="Prato típico" 
          className="rounded-lg w-full h-64 object-cover border-2 border-black shadow-md"
        />
      </div>
    </div>
  );
}