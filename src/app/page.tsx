'use client'
import  React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductGrid } from './components/ProductGrid';
import { ProductModal } from './components/ProductModal';
import { Cart } from './components/Cart';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Footer } from './components/Footer';
import { products } from './data/product';
import type { Product, CartItem } from './types/Product';

export default function Home() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);

  const handleAddToCart = (product: Product) => {
    // For quick add, use default selections
    const newItem: CartItem = {
      product,
      licenseType: product.licenseTypes[0],
      platform: product.platforms[0],
      quantity: 1
    };
    
    const existingItemIndex = cartItems.findIndex(
      item => item.product.id === product.id && 
               item.licenseType === newItem.licenseType && 
               item.platform === newItem.platform
    );
    
    if (existingItemIndex >= 0) {
      const updatedItems = [...cartItems];
      updatedItems[existingItemIndex].quantity += 1;
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, newItem]);
    }
  };

  const handleAddToCartFromModal = (item: CartItem) => {
    const existingItemIndex = cartItems.findIndex(
      cartItem => cartItem.product.id === item.product.id && 
                   cartItem.licenseType === item.licenseType && 
                   cartItem.platform === item.platform
    );
    
    if (existingItemIndex >= 0) {
      const updatedItems = [...cartItems];
      updatedItems[existingItemIndex].quantity += item.quantity;
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, item]);
    }
  };

  const handleQuickView = (product: Product) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  };

  const handleUpdateQuantity = (index: number, quantity: number) => {
    const updatedItems = [...cartItems];
    updatedItems[index].quantity = quantity;
    setCartItems(updatedItems);
  };

  const handleRemoveItem = (index: number) => {
    const updatedItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedItems);
  };

  const cartItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white">
      <Header 
        cartItemsCount={cartItemsCount}
        onCartClick={() => setIsCartOpen(true)}
      />
      
      <Hero />
      
      <ProductGrid
        products={products}
        onAddToCart={handleAddToCart}
        onQuickView={handleQuickView}
      />
      
      <ProductModal
        product={selectedProduct}
        isOpen={isProductModalOpen}
        onClose={() => setIsProductModalOpen(false)}
        onAddToCart={handleAddToCartFromModal}
      />
      
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
      
      <Footer />
      
      <WhatsAppButton />
    </div>
  );
}
