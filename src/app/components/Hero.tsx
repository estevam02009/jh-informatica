import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
    const scrollToProducts = () => {
        document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="relative bg-gradient-to-br from-blue-600 to-purple-700 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                            Softwares para Todos os Negócios
                        </h1>
                        <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                            Descubra nossa coleção de softwares profissionais e de alta qualidade. De ferramentas de produtividade a soluções empresariais,
                            encontre o software perfeito para impulsionar seu negócio.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={scrollToProducts}
                                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center group"
                            >
                                Explorar Softwares
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                                Solicitar Demonstração
                            </button>
                        </div>
                    </div>

                    <div className="relative">
                        <img
                            src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt="Software Solutions"
                            className="rounded-lg shadow-2xl"
                        />
                        <div className="absolute -bottom-4 -right-4 bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold">
                            Suporte Técnico Gratuito!
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};