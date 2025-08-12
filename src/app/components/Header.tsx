import React from 'react';
import { ShoppingCart, MessageCircle, Search } from 'lucide-react';
import { getWhatsAppSupportUrl } from '../utils/whatsapp';

interface HeaderProps {
    cartItemsCount: number;
    onCartClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ cartItemsCount, onCartClick }) => {
    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <h1 className="text-2xl font-bold text-blue-900">JH INFORMÁTICA</h1>
                    </div>

                    {/* Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
                        <a href="#products" className="text-gray-700 hover:text-blue-600 transition-colors">Softwares</a>
                        <a href="#categories" className="text-gray-700 hover:text-blue-600 transition-colors">Categorias</a>
                        <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Serviços</a>
                        <a href="#support" className="text-gray-700 hover:text-blue-600 transition-colors">Suporte</a>
                        <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">Sobre Nós</a>
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center space-x-4">
                        <button className="text-gray-700 hover:text-blue-600 transition-colors">
                            <Search className="w-5 h-5" />
                        </button>

                        <a
                            href={getWhatsAppSupportUrl()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-green-600 transition-colors"
                            title="WhatsApp Support"
                        >
                            <MessageCircle className="w-5 h-5" />
                        </a>

                        <button
                            onClick={onCartClick}
                            className="relative text-gray-700 hover:text-blue-600 transition-colors"
                        >
                            <ShoppingCart className="w-5 h-5" />
                            {cartItemsCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                    {cartItemsCount}
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};