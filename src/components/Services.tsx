'use client'
import { motion } from 'framer-motion'

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Nossos Serviços</h2>
          <motion.div 
            className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                variants={cardVariants}
                whileHover={{ scale: 1.03 }}
              >
                <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                <p className="mt-2 text-gray-500">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
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