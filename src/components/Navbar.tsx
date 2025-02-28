import Link from "next/link"

export default function Navbar() {
    return (
      <nav className="bg-white shadow-md fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-blue-600">JH INFORMÁTICA</Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600">Sobre Nós</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600">Serviços</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600">Contato</a>
              <a href="/login" className="text-gray-700 hover:text-blue-600">Login</a>
              <a href="/register" className="text-gray-700 hover:text-blue-600">Registrar</a>
            </div>
          </div>
        </div>
      </nav>
    )
  }