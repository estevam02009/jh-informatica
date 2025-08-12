import React from "react";
import { ShoppingCart, MessageCircle, Search } from "lucide-react";
import { getWhatsAppSupportUrl } from "../utils/whatsapp";

interface HeaderProps {
  cartItemsCount: number
  onCartClick: () => void
}

export const Header: React.FC<HeaderProps> = ({ cartItemsCount, onCartClick }) => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
                {/* LOGO */}
                <div className="flex-shrink-0">
                    <h1 className="text-2xl font-bold text-gray-900">
                        JH <span className="text-blue-600">INFORMÁTICA</span>
                    </h1>
                </div>

                {/* NAVIGATION */}
            </div>
        </div>
    </header>
  );
};
