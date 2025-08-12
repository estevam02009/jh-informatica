import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppSupportUrl } from '../utils/whatsapp';

export const WhatsAppButton: React.FC = () => {
    return (
        <a
            href={getWhatsAppSupportUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 z-40"
            title="Chat with us on WhatsApp"
        >
            <MessageCircle className="w-6 h-6" />
        </a>
    );
};