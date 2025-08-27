// components/ui/SolarButton.tsx
"use client";

import React from 'react';

// Couleurs personnalisées
export const COLORS = {
    vertEnergie: '#4CAF50',
    jauneSolaire: '#FFC107',
    blancPur: '#FFFFFF',
    bleuCiel: '#2196F3',
    grisNeutre: '#757575',
} as const;

interface SolarButtonProps {
    children?: React.ReactNode;
    text?: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    className?: string;
}

export const SolarButton: React.FC<SolarButtonProps> = ({
                                                            children,
                                                            text = "RBDIRIADËER UN PËCIE",
                                                            onClick = () => {},
                                                            variant = 'primary',
                                                            size = 'md',
                                                            disabled = false,
                                                            className = '',
                                                        }) => {
    // Classes de base
    const baseClasses = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none";

    // Variantes de couleur
    const variantClasses = {
        primary: `bg-[${COLORS.jauneSolaire}] hover:bg-[#FFB300] text-gray-900`,
        secondary: `bg-[${COLORS.vertEnergie}] hover:bg-[#43A047] text-white`,
        outline: `bg-transparent border-2 border-[${COLORS.vertEnergie}] text-[${COLORS.vertEnergie}] hover:bg-[${COLORS.vertEnergie}] hover:text-white`
    };

    // Tailles
    const sizeClasses = {
        sm: "px-4 py-2 text-sm",
        md: "px-8 py-4 text-lg",
        lg: "px-10 py-5 text-xl"
    };

    const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

    return (
        <button
            className={buttonClasses}
            onClick={onClick}
            disabled={disabled}
            style={{
                backgroundColor: variant === 'primary' ? COLORS.jauneSolaire :
                    variant === 'secondary' ? COLORS.vertEnergie : 'transparent',
                borderColor: variant === 'outline' ? COLORS.vertEnergie : 'transparent',
                color: variant === 'primary' ? '#1F2937' :
                    variant === 'secondary' ? COLORS.blancPur : COLORS.vertEnergie,
            }}
            onMouseEnter={(e) => {
                if (!disabled) {
                    if (variant === 'primary') {
                        e.currentTarget.style.backgroundColor = '#FFB300';
                    } else if (variant === 'secondary') {
                        e.currentTarget.style.backgroundColor = '#43A047';
                    } else if (variant === 'outline') {
                        e.currentTarget.style.backgroundColor = COLORS.vertEnergie;
                        e.currentTarget.style.color = COLORS.blancPur;
                    }
                }
            }}
            onMouseLeave={(e) => {
                if (!disabled) {
                    if (variant === 'primary') {
                        e.currentTarget.style.backgroundColor = COLORS.jauneSolaire;
                    } else if (variant === 'secondary') {
                        e.currentTarget.style.backgroundColor = COLORS.vertEnergie;
                    } else if (variant === 'outline') {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = COLORS.vertEnergie;
                    }
                }
            }}
        >
            {children || text}
        </button>
    );
};