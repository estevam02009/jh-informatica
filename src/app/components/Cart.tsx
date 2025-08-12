import React from 'react';
import { X, Plus, Minus, Trash2, MessageCircle, ShoppingCart } from 'lucide-react';
import type { CartItem } from '../types/Product';
import { formatWhatsAppOrder } from '../utils/whatsapp';

interface CartProps {
    isOpen: boolean;
    onClose: () => void;
    items: CartItem[];
    onUpdateQuantity: (index: number, quantity: number) => void;
    onRemoveItem: (index: number) => void;
}

export const Cart: React.FC<CartProps> = ({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem }) => {
    if (!isOpen) return null;

    const total = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

    const handleWhatsAppCheckout = () => {
        if (items.length === 0) return;

        const orderUrl = formatWhatsAppOrder(items);
        window.open(orderUrl, '_blank');
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-end">
            <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />

            <div className="relative bg-white h-full w-full max-w-md shadow-2xl">
                <div className="flex items-center justify-between p-6 border-b">
                    <h2 className="text-xl font-bold text-gray-900">Carrinho de Compras</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6">
                    {items.length === 0 ? (
                        <div className="text-center py-12">
                            <div className="text-gray-400 mb-4">
                                <ShoppingCart className="w-16 h-16 mx-auto" />
                            </div>
                            <p className="text-gray-500 text-lg mb-2">Seu carrinho está vazio</p>
                            <p className="text-gray-400">Adicione alguns softwares incríveis para começar!</p>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {items.map((item, index) => (
                                <div key={index} className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg">
                                    <img
                                        src={item.product.image}
                                        alt={item.product.name}
                                        className="w-16 h-16 object-cover rounded-lg"
                                    />

                                    <div className="flex-1 min-w-0">
                                        <h4 className="font-semibold text-gray-900 truncate">{item.product.name}</h4>
                                        <p className="text-sm text-gray-600">
                                            {item.licenseType} • {item.platform}
                                        </p>
                                        <p className="text-sm font-medium text-blue-600">${item.product.price}</p>
                                    </div>

                                    <div className="flex items-center space-x-2">
                                        <button
                                            onClick={() => onUpdateQuantity(index, Math.max(1, item.quantity - 1))}
                                            className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:border-gray-400 transition-colors"
                                        >
                                            <Minus className="w-3 h-3" />
                                        </button>
                                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                                        <button
                                            onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                                            className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:border-gray-400 transition-colors"
                                        >
                                            <Plus className="w-3 h-3" />
                                        </button>
                                    </div>

                                    <button
                                        onClick={() => onRemoveItem(index)}
                                        className="text-red-500 hover:text-red-700 transition-colors"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {items.length > 0 && (
                    <div className="border-t p-6 space-y-4">
                        <div className="flex items-center justify-between text-xl font-bold">
                            <span>Total:</span>
                            <span className="text-blue-600">${total.toFixed(2)}</span>
                        </div>

                        <button
                            onClick={handleWhatsAppCheckout}
                            className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center"
                        >
                            <MessageCircle className="w-5 h-5 mr-2" />
                            Pedir via WhatsApp
                        </button>

                        <p className="text-xs text-gray-500 text-center">
                            Você será redirecionado para o WhatsApp para completar seu pedido
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};