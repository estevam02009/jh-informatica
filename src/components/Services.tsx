export default function Services() {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Nossos Serviços</h2>
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                <p className="mt-2 text-gray-500">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const services = [
  {
    title: "Reparo de Hardware",
    description: "Reparo especializado para laptops, desktops e outros problemas de hardware de computador."
  },
  {
    title: "Remoção de vírus",
    description: "Remoção completa de vírus e malware para manter seu computador seguro."
  },
  {
    title: "Recuperação de dados",
    description: "Serviços profissionais de recuperação de dados para arquivos perdidos ou corrompidos."
  },
  {
    title: "Atualização do sistema",
    description: "Atualizações de hardware e software para melhorar o desempenho do seu computador."
  },
  {
    title: "Configuração de rede",
    description: "Serviços profissionais de instalação e configuração de redes."
  },
  {
    title: "Manutenção",
    description: "Manutenção regular para manter seu computador funcionando sem problemas."
  }
]