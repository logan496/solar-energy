import React, { useState } from 'react';

export default function AnimatedAboutImage() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative group cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Effet de glow animé en arrière-plan */}
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 via-green-500 to-blue-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition duration-1000 animate-pulse"></div>

            {/* Container principal de l'image */}
            <div className="relative">
                {/* Bordure animée */}
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-green-400 to-blue-400 rounded-2xl opacity-0 group-hover:opacity-60 transition duration-500 animate-spin-slow"></div>

                {/* Image avec effets */}
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img
                        src="/images/a_propos.jpeg"
                        alt="images à propos"
                        className={`
              rounded-2xl w-full h-auto
              transform transition-all duration-700 ease-out
              ${isHovered ? 'scale-105' : 'scale-100'}
              filter ${isHovered ? 'brightness-110' : 'brightness-100'}
            `}
                    />

                    {/* Overlay avec gradient au survol */}
                    <div className={`
            absolute inset-0 bg-gradient-to-t from-green-900/40 via-transparent to-transparent
            transition-opacity duration-500
            ${isHovered ? 'opacity-100' : 'opacity-0'}
          `}></div>

                    {/* Particules solaires flottantes */}
                    {[...Array(8)].map((_, i) => (
                        <div
                            key={i}
                            className={`
                absolute w-1.5 h-1.5 bg-yellow-400 rounded-full
                transition-all duration-1000
                ${isHovered ? 'opacity-80' : 'opacity-0'}
              `}
                            style={{
                                left: `${10 + i * 12}%`,
                                top: `${15 + (i % 4) * 20}%`,
                                animation: isHovered ? `float ${2 + i * 0.3}s ease-in-out infinite` : 'none',
                                animationDelay: `${i * 0.15}s`,
                                boxShadow: '0 0 10px rgba(250, 204, 21, 0.8)'
                            }}
                        ></div>
                    ))}
                </div>
            </div>

            {/* Effet de reflet lumineux */}
            <div className={`
        absolute -bottom-16 left-0 right-0 h-16
        bg-gradient-to-b from-yellow-400/20 to-transparent
        rounded-2xl blur-2xl
        transition-opacity duration-500
        ${isHovered ? 'opacity-100' : 'opacity-40'}
      `}></div>

            <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-12px) translateX(4px);
          }
          50% {
            transform: translateY(-6px) translateX(-4px);
          }
          75% {
            transform: translateY(-10px) translateX(2px);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
      `}</style>
        </div>
    );
}