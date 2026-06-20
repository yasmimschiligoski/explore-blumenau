import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'Blumenau',
  description: 'Guia turístico oficial da cidade da Oktoberfest',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-100 text-gray-900 font-sans min-h-screen flex flex-col justify-between">
        
  
        <nav className="bg-black text-white p-4 shadow-md sticky top-0 z-50 border-b-4 border-yellow-500">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold text-yellow-400">Explore Blumenau</h1>
            <div className="space-x-4 font-semibold">
              <Link href="/" className="text-yellow-400 hover:text-white transition-colors">Início</Link>
              <Link href="/pontos-turisticos" className="text-yellow-400 hover:text-white transition-colors">Pontos Turísticos</Link>
              <Link href="/gastronomia" className="text-yellow-400 hover:text-white transition-colors">Gastronomia</Link>
              <Link href="/eventos" className="text-yellow-400 hover:text-white transition-colors">Eventos</Link>
            </div>
          </div>
        </nav>

        <main className="max-w-4xl mx-auto p-6 flex-grow w-full">
          {children}
        </main>

        <footer className="bg-red-600 text-white text-center p-4 border-t-4 border-black">
          <p className="font-medium">© 2026 Guia Explore Blumenau - Tópicos Avançados em Web</p>
        </footer>
      </body>
    </html>
  );
}
