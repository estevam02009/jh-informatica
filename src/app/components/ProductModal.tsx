import React, { useState } from 'react';
import { X, Plus, Minus, ShoppingCart, MessageCircle } from 'lucide-react';
import type { Product, CartItem } from '../types/Product';

interface ProductModalProps {
    product: Product | null;
    isOpen: boolean;
    onClose: () => void;
    onAddToCart: (item: Omit<CartItem, 'product'> & { product: Product }) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose, onAddToCart }) => {
    const [selectedLicenseType, setSelectedLicenseType] = useState('');
    const [selectedPlatform, setSelectedPlatform] = useState('');
    const [quantity, setQuantity] = useState(1);

    if (!isOpen || !product) return null;

    const handleAddToCart = () => {
        if (!selectedLicenseType || !selectedPlatform) {
            alert('Selecione o tipo de licença e a plataforma');
            return;
        }

        onAddToCart({
            product,
            licenseType: selectedLicenseType,
            platform: selectedPlatform,
            quantity
        });

        onClose();
    };

    const handleWhatsAppOrder = () => {
        if (!selectedLicenseType || !selectedPlatform) {
            alert('Selecione o tipo de licença e a plataforma');
            return;
        }

        const businessPhone = '+5584998993401';
        const message = `🛍️ Olá! Gostaria de adquirir:\n\n*${product.name}*\nDesenvolvedor: ${product.developer || 'Não especificado'}\nTipo de Licença: ${selectedLicenseType}\nPlataforma: ${selectedPlatform}\nQuantidade: ${quantity}\nPreço: R$${product.price}\n\nVocê poderia me ajudar com a compra?`;

        window.open(`https://wa.me/${businessPhone}?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="sticky top-0 bg-white border-b p-4 flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-gray-900">{product.name}</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
                    {/* Product Image */}
                    <div className="aspect-square bg-gray-50 rounded-xl overflow-hidden">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Product Details */}
                    <div className="space-y-6">
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-3xl font-bold text-blue-600">R${product.price}</span>
                                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                                    {product.category}
                                </span>
                            </div>
                            <p className="text-gray-600 leading-relaxed">{product.description}</p>
                            
                            {/* Developer and Release Date */}
                            <div className="mt-4 space-y-2">
                                {product.developer && (
                                    <div className="flex items-center">
                                        <span className="text-sm font-semibold text-gray-700 mr-2">Desenvolvedor:</span>
                                        <span className="text-sm text-gray-600">{product.developer}</span>
                                    </div>
                                )}
                                {product.releaseDate && (
                                    <div className="flex items-center">
                                        <span className="text-sm font-semibold text-gray-700 mr-2">Lançamento:</span>
                                        <span className="text-sm text-gray-600">{product.releaseDate}</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* License Type Selection */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-900 mb-3">Tipo de Licença</label>
                            <div className="flex flex-wrap gap-2">
                                {product.licenseTypes.map((licenseType) => (
                                    <button
                                        key={licenseType}
                                        onClick={() => setSelectedLicenseType(licenseType)}
                                        className={`px-4 py-2 border rounded-lg font-medium transition-all ${selectedLicenseType === licenseType
                                                ? 'border-blue-600 bg-blue-600 text-white'
                                                : 'border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600'
                                            }`}
                                    >
                                        {licenseType}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Platform Selection */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-900 mb-3">Plataforma</label>
                            <div className="flex flex-wrap gap-3">
                                {product.platforms.map((platform) => (
                                    <button
                                        key={platform}
                                        onClick={() => setSelectedPlatform(platform)}
                                        className={`flex items-center space-x-2 px-4 py-2 border rounded-lg transition-all ${selectedPlatform === platform
                                                ? 'border-blue-600 bg-blue-50'
                                                : 'border-gray-300 hover:border-gray-400'
                                            }`}
                                    >
                                        <div className="flex items-center justify-center w-5 h-5">
                                            {platform === 'Windows' && <span className="text-blue-600">🪟</span>}
                                            {platform === 'macOS' && <span className="text-gray-800">🍎</span>}
                                            {platform === 'Linux' && <span className="text-black">🐧</span>}
                                            {platform === 'iOS' && <span className="text-gray-800">📱</span>}
                                            {platform === 'Android' && <span className="text-green-600">🤖</span>}
                                            {platform === 'Web' && <span className="text-blue-600">🌐</span>}
                                            {platform === 'PC' && <span className="text-gray-800">💻</span>}
                                            {!['Windows', 'macOS', 'Linux', 'iOS', 'Android', 'Web', 'PC'].includes(platform) && <span>📊</span>}
                                        </div>
                                        <span className="text-sm font-medium">{platform}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Quantity */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-900 mb-3">Quantidade</label>
                            <div className="flex items-center space-x-3">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:border-gray-400 transition-colors"
                                >
                                    <Minus className="w-4 h-4" />
                                </button>
                                <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:border-gray-400 transition-colors"
                                >
                                    <Plus className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="space-y-3">
                            <button
                                onClick={handleAddToCart}
                                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                            >
                                <ShoppingCart className="w-5 h-5 mr-2" />
                                Adicionar ao Carrinho
                            </button>

                            <button
                                onClick={handleWhatsAppOrder}
                                className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center"
                            >
                                <MessageCircle className="w-5 h-5 mr-2" />
                                Comprar pelo WhatsApp
                            </button>
                        </div>

                        <div className="border-t pt-6">
                            <h4 className="font-semibold text-gray-900 mb-2">Características do Software</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Código otimizado e eficiente</li>
                                <li>• Atualizações regulares e suporte</li>
                                <li>• Interface intuitiva e amigável</li>
                                <li>• Compatível com múltiplas plataformas</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};