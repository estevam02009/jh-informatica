import React from "react";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { getWhatsAppSupportUrl } from "../utils/whatsapp";

export const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Company Info */}
                    <div>
                        <h3 className="text-2xl font-bold">JH INFORMÁTICA</h3>
                        <p className="text-gray-300 mb-6">
                            Softwares premium para cada necessidade e plataforma.
                            Nós nos comprometemos a fornecer soluções confiáveis, eficientes e inovadoras.
                        </p>
                        <a
                            href={getWhatsAppSupportUrl()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors inline-flex items-center"
                        >
                            <MessageCircle className="w-4 h-4 mr-2" />
                            Chat WhatsApp
                        </a>
                    </div>

                    {/* Links Rápidos */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li>
                                <a href="#home" className="hover:text-white transition-colors">Home</a>
                            </li>
                            <li>
                                <a href="#products" className="hover:text-white transition-colors">Softwares</a>
                            </li>
                            <li>
                                <a href="#categories" className="hover:text-white transition-colors">Categorias</a>
                            </li>
                            <li>
                                <a href="#services" className="hover:text-white transition-colors">Serviços</a>
                            </li>
                            <li>
                                <a href="#support" className="hover:text-white transition-colors">Suporte</a>
                            </li>
                            <li>
                                <a href="#about" className="hover:text-white transition-colors">Sobre Nós</a>
                            </li>
                        </ul>

                    </div>

                    {/* Categorias */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Categorias</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li>
                                <a href="#" className="hover:text-white transition-colors">Produtividade</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">Design e Criação</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">Sistemas Operacionais</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">Segurança</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">Desenvolvimento</a>
                            </li>

                        </ul>

                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Informações de Contato</h4>
                        <div className="space-y-3 text-gray-300">
                            <div className="flex items-center">
                                <Phone className="w-4 h-4 mr-2" />
                                <span>+55 (84) 998993401</span>
                            </div>
                            <div className="flex items-center">
                                <Mail className="w-4 h-4 mr-2" />
                                <span>info@jhsoftwares.com</span>
                            </div>
                            <div className="flex items-center">
                                <MapPin className="w-4 h-4 mr-2" />
                                <span>123 Tech Avenue, Digital City</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                    <p>&copy; 2025 JH SOFTWARES. Todos os direitos reservados. Desenvolvido com ❤️ por SmartCode.</p>
                </div>
            </div>
        </footer>
    );
}
