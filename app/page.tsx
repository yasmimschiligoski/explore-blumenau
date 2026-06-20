export default function Home() {
  return (
    <div className="max-w-2xl mx-auto space-y-6 text-center py-6 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      <h2 className="text-3xl font-extrabold text-red-600 uppercase tracking-wider">
        Bem-vindo a Blumenau!
      </h2>
      
      <p className="text-base text-gray-600 leading-relaxed">
        Conheça um pedaço da Alemanha no sul do Brasil. Famosa por sua arquitetura enxaimel, 
        cultura rica, gastronomia marcante e, claro, a maior Oktoberfest das Américas.
      </p>
      
      {/* Imagem com tamanho fixo e borda grossa vermelha */}
      <div className="flex justify-center">
        <img 
          src="https://www.informeblumenau.com/wp-content/uploads/2025/11/blumenau.jpg" 
          alt="Vista cultural de Blumenau" 
          className="rounded-lg shadow-md w-full h-64 object-cover border-8 border-red-600"
        />
      </div>
    </div>
  );
}
