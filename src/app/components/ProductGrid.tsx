import React, { useState } from 'react';
import { ProductCard } from './ProductCard';
import type { Product } from '../types/Product';

interface ProductGridProps {
    products: Product[];
    onAddToCart: (product: Product) => void;
    onQuickView: (product: Product) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products, onAddToCart, onQuickView }) => {
    const [selectedCategory, setSelectedCategory] = useState('Todas');

    const categories = ['Todas', ...Array.from(new Set(products.map(p => p.category)))];
    const filteredProducts = selectedCategory === 'Todas'
        ? products
        : products.filter(p => p.category === selectedCategory);

    return (
        <section id="products" className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Nossa coleção de softwares
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Explore softwares de alta qualidade para diversas plataformas e necessidades.
                        Cada produto é cuidadosamente selecionado para garantir desempenho e confiabilidade.
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-2 rounded-full font-medium transition-all ${selectedCategory === category
                                ? 'bg-blue-600 text-white shadow-lg'
                                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filteredProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onAddToCart={onAddToCart}
                            onQuickView={onQuickView}
                        />
                    ))}
                </div>

                {filteredProducts.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">Nenhum produto encontrado nessa categoria.</p>
                    </div>
                )}
            </div>
        </section>
    );
};