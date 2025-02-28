'use client'
import { motion } from 'framer-motion'

export default function AboutUs() {
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
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Sobre Nós</h2>
          <motion.p 
            className="mt-4 text-lg text-gray-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Com mais de 10 anos de experiência em reparo de computadores, nos orgulhamos de fornecer serviço de alta qualidade aos nossos clientes. Nossa equipe de técnicos certificados está comprometida em resolver seus problemas tecnológicos de forma rápida e eficiente.
          </motion.p>
          <motion.div 
            className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-blue-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold text-gray-900">Experiência</h3>
              <p className="mt-2 text-gray-500">10+ anos no mercado</p>
            </motion.div>
            <motion.div 
              className="bg-blue-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold text-gray-900">Certificados</h3>
              <p className="mt-2 text-gray-500">Técnicos profissionais</p>
            </motion.div>
            <motion.div 
              className="bg-blue-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold text-gray-900">Satisfação</h3>
              <p className="mt-2 text-gray-500">100% garantida</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}