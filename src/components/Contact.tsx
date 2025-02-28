export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Contate-nos</h2>
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900">Informações de contato</h3>
              <div className="mt-4 space-y-4">
                <p className="text-gray-500">
                  <strong>Endereço:</strong> Rua Elizio Fernandes, S/N - Leandro Bezerra - Caraúbas - RN
                </p>
                <p className="text-gray-500">
                  <strong>Phone:</strong> (84) 99899-3401
                </p>
                <p className="text-gray-500">
                  <strong>Email:</strong> info@jhinformatica.com
                </p>
                <p className="text-gray-500">
                  <strong>Horas:</strong> Seg-Sab: 8AM-6PM
                </p>
              </div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900">Envie-nos uma mensagem</h3>
              <form className="mt-4 space-y-4">
                <input
                  type="text"
                  placeholder="Seu Nome"
                  className="w-full px-4 py-2 border rounded-md"
                />
                <input
                  type="email"
                  placeholder="Seu Email"
                  className="w-full px-4 py-2 border rounded-md"
                />
                <textarea
                  placeholder="Sua Mensagem"
                  rows={4}
                  className="w-full px-4 py-2 border rounded-md"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}