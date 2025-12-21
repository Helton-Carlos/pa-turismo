import Image from 'next/image';
import Link from 'next/link';
import { LogIn } from 'lucide-react';

export default function PAFooter() {
  return (
    <footer className="bg-blue-900 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-3">
          <Image
            src="/image/logo-pa-turismo.png"
            alt="Logomarca PA Turismo"
            width={45}
            height={45}
            priority
            className="object-contain"
          />
          <h1 className="text-2xl font-bold hidden md:block">
            PA Turismo
          </h1>
        </div>

        <nav className="flex items-center gap-8">
          <ul className="hidden lg:flex items-center gap-6 text-sm font-semibold">
            <li>
              <Link
                href="/roteiros"
                className="hover:text-blue-600 transition-colors"
              >
                Roteiros
              </Link>
            </li>
            <li>
              <Link
                href="/pontos-turisticos"
                className="hover:text-blue-600 transition-colors"
              >
                Atrativos
              </Link>
            </li>
            <li>
              <Link
                href="/eventos"
                className="hover:text-blue-600 transition-colors"
              >
                Eventos
              </Link>
            </li>
          </ul>

          <div className="hidden lg:block h-6 w-px bg-gray-200"></div>

          <Link
            href="/login"
            className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition-all shadow-md active:scale-95"
          >
            <LogIn size={18} />
            <span>Logar</span>
          </Link>
        </nav>
      </div>
    </footer>
  )
} 