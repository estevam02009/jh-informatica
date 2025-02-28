export default function Hero() {
  return (
    <div className="pt-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Reparo profissional de computadores</span>
            <span className="block text-blue-600">Serviço rápido e confiável</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Serviços de reparo de computadores especializados para todas as suas necessidades tecnológicas. Tempos de resposta rápidos e preços competitivos.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a href="#contact" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                Fale com a nossa equipe
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}