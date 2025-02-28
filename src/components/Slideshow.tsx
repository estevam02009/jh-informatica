'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Slideshow() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const slides = [
        {
            image: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg',
            title: 'Serviços de Qualidade',
            description: 'Manutenção e reparo de computadores com excelência'
        },
        {
            image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg',
            title: 'Atendimento Profissional',
            description: 'Equipe especializada para melhor atender você'
        },
        {
            image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg',
            title: 'Soluções Completas',
            description: 'Do hardware ao software, cuidamos de tudo'
        }
    ]

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prevSlide) => 
                prevSlide === slides.length - 1 ? 0 : prevSlide + 1
            )
        }, 5000)

        return () => clearInterval(timer)
    }, [])

    return (
        <div className="relative h-screen w-full overflow-hidden pt-16">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <div className="relative w-full h-full">
                        <Image
                            src={slide.image}
                            alt={slide.title}
                            fill
                            style={{ objectFit: 'cover' }}
                            priority
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40">
                            <div className="flex flex-col items-center justify-center h-full text-white">
                                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                                    {slide.title}
                                </h1>
                                <p className="text-xl md:text-2xl">
                                    {slide.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${
                            index === currentSlide ? 'bg-white' : 'bg-white/50'
                        }`}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>
        </div>
    )
}