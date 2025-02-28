export default function AboutUs() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Sobre nós</h2>
          <p className="mt-4 text-lg text-gray-500">
          Com mais de 10 anos de experiência em reparo de computadores, temos orgulho de fornecer serviço de primeira linha aos nossos clientes. Nossa equipe de técnicos certificados está comprometida em resolver seus problemas de tecnologia de forma rápida e eficiente.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900">Experiência</h3>
              <p className="mt-2 text-gray-500">Mais de 10 anos no mercado</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900">Certificado</h3>
              <p className="mt-2 text-gray-500">Técnicos profissionais</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900">Satisfação</h3>
              <p className="mt-2 text-gray-500">100% garantido</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}