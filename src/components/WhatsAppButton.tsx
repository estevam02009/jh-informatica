'use client'
import { motion } from 'framer-motion'

export default function WhatsAppButton() {
    const phoneNumber = '5584998993401' // Replace with your actual WhatsApp number
    const message = 'Olá! Gostaria de mais informações sobre seus serviços.'

    return (
        <motion.a
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full p-4 shadow-lg z-50 hover:bg-green-600 transition-colors"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
            >
                <path
                    d="M12 2C6.48 2 2 6.48 2 12c0 2.17.7 4.19 1.89 5.84L2.2 22l4.16-1.69c1.65 1.19 3.67 1.89 5.84 1.89 5.52 0 10-4.48 10-10S17.52 2 12 2zm.89 14.24l-.12.06c-.91.45-1.93.69-2.97.69-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7c0 1.04-.24 2.06-.69 2.97l.06.12-1.07 3.91-3.91-1.07z"
                />
            </svg>
        </motion.a>
    )
}