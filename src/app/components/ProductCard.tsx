import React from 'react';
import { Plus, Heart } from 'lucide-react';
import type { Product } from '../types/Product';

interface ProductCardProps {
    product: Product;
    onAddToCart: (product: Product) => void;
    onQuickView: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onQuickView }) => {
    return (
        <div className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
            <div className="relative aspect-square overflow-hidden bg-gray-50">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Overlay actions */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="flex space-x-3">
                        <button
                            onClick={() => onQuickView(product)}
                            className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                        >
                            Ver
                        </button>
                        <button
                            onClick={() => onAddToCart(product)}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center"
                        >
                            <Plus className="w-4 h-4 mr-1" />
                            Add ao Carrinho
                        </button>
                    </div>
                </div>

                {/* Wishlist button */}
                <button className="absolute top-3 right-3 bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-100">
                    <Heart className="w-4 h-4 text-gray-600" />
                </button>

                {/* Featured badge */}
                {product.featured && (
                    <div className="absolute top-3 left-3 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        Destaque
                    </div>
                )}
                
                {/* Developer badge */}
                {product.developer && (
                    <div className="absolute bottom-3 left-3 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        {product.developer}
                    </div>
                )}
            </div>

            <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {product.name}
                    </h3>
                    <span className="text-xl font-bold text-blue-600">R${product.price}</span>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>

                <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                        <div className="text-xs text-gray-500 mb-1">Plataformas:</div>
                        <div className="flex space-x-1">
                            {product.platforms.map((platform, index) => (
                                <span
                                    key={index}
                                    className="inline-flex items-center px-2 py-1 rounded-md bg-gray-100 text-xs font-medium text-gray-800"
                                    title={platform}
                                >
                                    {platform}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="text-sm text-gray-500">
                        {product.releaseDate && (
                            <span className="inline-block">
                                Lançamento: {product.releaseDate}
                            </span>
                        )}
                        {product.licenseTypes.length} licenças
                    </div>
                </div>
            </div>
        </div>
    );
};