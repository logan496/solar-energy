"use client"

import React, {useEffect, useState} from "react";
import { Phone, Mail, MapPin, Menu, X, Search, Sun, Wind, Home, Zap } from "lucide-react";
import Image from "next/image";
import {Footer} from "@/components/layout/footer";

// Couleurs définies
const COLORS = {
    vertEnergie: "#4CAF50",
    bleuSolaire: "#2196F3",
    jauneEnergie: "#FFC107"
};

// Types
interface NavigationItem {
    label: string;
    href: string;
}

interface TipCard {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    color: string;
    category: string;
}

// Interface pour les props de NavBar
interface NavBarProps {
    navigationItems: NavigationItem[];
    logo?: string;
}

// Composant NavBar
const NavBar: React.FC<NavBarProps> = ({
                                           navigationItems,
                                       }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const style = document.createElement('style');
        style.textContent = `
      @keyframes spin-slow {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
      .animate-spin-slow {
        animation: spin-slow 8s linear infinite;
      }
    `;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };
    }, []);

    return (
        <div className="w-full bg-white shadow-sm border-b">
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-2">
                            <div className="relative">
                                <Sun className="w-12 h-12 text-yellow-500 animate-spin-slow" />
                                <div className="absolute inset-0 bg-yellow-400 rounded-full blur-lg opacity-20" style={{
                                    animation: 'pulse 2s ease-in-out infinite'
                                }}></div>
                            </div>
                            <div className="flex flex-col items-center">
                                <Image
                                    src="/images/logo-solar.png"
                                    alt="Logo Solar Energy Options"
                                    width={72}
                                    height={64}
                                    className="h-16 w-18"
                                />
                            </div>
                        </div>
                    </div>

                    <nav className="hidden lg:flex space-x-8">
                        {navigationItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className="text-gray-700 hover:text-green-600 transition-colors duration-300 text-sm font-medium relative group"
                            >
                                {item.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
                            </a>
                        ))}
                    </nav>

                    <div className="hidden lg:flex items-center space-x-4">
                        <Search className="w-5 h-5 text-gray-600 hover:text-green-600 cursor-pointer transition-colors" />
                    </div>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
                    >
                        {isMenuOpen ? <X className="w-6 h-6 text-gray-600" /> : <Menu className="w-6 h-6 text-gray-600" />}
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
                        <nav className="flex flex-col space-y-3 mt-4">
                            {navigationItems.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    className="text-gray-700 hover:text-green-600 transition-colors duration-300 text-sm font-medium py-2"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                )}
            </div>
        </div>
    );
};

// Composant TipCard
const TipCard: React.FC<TipCard> = ({ title, description, icon, color }) => {
    return (
        <div className="flex items-start space-x-4 p-6 bg-white rounded-lg hover:shadow-md transition-all duration-300 group cursor-pointer">
            <div
                className="w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: color }}
            >
                <div className="text-white">
                    {icon}
                </div>
            </div>
            <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-green-600 transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
};

// Composant FilterButton
interface FilterButtonProps {
    label: string;
    isActive: boolean;
    onClick: () => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({ label, isActive, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                isActive
                    ? 'bg-green-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
        >
            {label}
        </button>
    );
};

// Composant principal
export default function EnergyTipsPage() {
    const navigationItems: NavigationItem[] = [
        { label: 'Accueil', href: '/' },
        { label: 'À propos', href: '/about' },
        { label: 'Nos Services', href: '/services' },
        { label: 'projets & Réalisations', href: '/projets' },
        { label: 'Blog / Conseils énergie', href: '/tips' },
        { label: 'Contact', href: '/contact' }
    ];

    const [activeFilter, setActiveFilter] = useState("All");

    const filters = ["All", "Solar Panels", "Renewable Energy", "Conservation", "Installation"];

    const tips: TipCard[] = [
        {
            id: "1",
            title: "The benefits of Solar Energy",
            description: "Discover how solar energy can save you money while helping the environment and reducing your carbon footprint.",
            icon: <Sun size={24} />,
            color: COLORS.jauneEnergie,
            category: "Solar Panels"
        },
        {
            id: "2",
            title: "How to Maintain Your Solar Panels",
            description: "Learn essential tips for keeping your solar panels in top condition and maximizing their efficiency.",
            icon: <Zap size={24} />,
            color: COLORS.bleuSolaire,
            category: "Solar Panels"
        },
        {
            id: "3",
            title: "Top 8 Renewable Energy Sources",
            description: "Explore the most promising renewable energy systems and their benefits for a sustainable future.",
            icon: <Wind size={24} />,
            color: COLORS.jauneEnergie,
            category: "Renewable Energy"
        },
        {
            id: "4",
            title: "Tips for Reducing Home Energy Use",
            description: "Simple and effective strategies to lower your home energy consumption and reduce utility bills.",
            icon: <Home size={24} />,
            color: COLORS.bleuSolaire,
            category: "Conservation"
        }
    ];

    const filteredTips = activeFilter === "All"
        ? tips
        : tips.filter(tip => tip.category === activeFilter);


    return (
        <div className="min-h-screen bg-gray-50">
            <NavBar navigationItems={navigationItems} />

            {/* Hero Section */}
            <div
                className="py-16 text-white"
                style={{ backgroundColor: COLORS.vertEnergie }}
            >
                <div className="container mx-auto px-4">
                    <h1 className="text-5xl font-bold mb-4">Energy Tips</h1>
                </div>
            </div>

            {/* Main Content */}
            <div className="py-12">
                <div className="container mx-auto px-4">
                    {/* Filter Buttons */}
                    <div className="flex flex-wrap gap-3 mb-8">
                        {filters.map((filter) => (
                            <FilterButton
                                key={filter}
                                label={filter}
                                isActive={activeFilter === filter}
                                onClick={() => setActiveFilter(filter)}
                            />
                        ))}
                    </div>

                    {/* Tips Grid */}
                    <div className="space-y-6 max-w-4xl">
                        {filteredTips.map((tip, index) => (
                            <div key={tip.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                                <TipCard {...tip} />
                            </div>
                        ))}
                    </div>

                    {/* No results message */}
                    {filteredTips.length === 0 && (
                        <div className="text-center py-12">
                            <div className="text-gray-400 mb-4">
                                <Search size={48} className="mx-auto" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-600 mb-2">No tips found</h3>
                            <p className="text-gray-500">Try selecting a different category filter.</p>
                        </div>
                    )}

                    {/* CTA Section */}
                    <div className="mt-16 text-center">
                        <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-8 max-w-3xl mx-auto text-white">
                            <h2 className="text-3xl font-bold mb-4">
                                Need Personalized Energy Advice?
                            </h2>
                            <p className="text-xl mb-8 opacity-90">
                                Our experts are here to help you optimize your energy consumption
                            </p>
                            <button className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg">
                                Get Expert Consultation
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

            <style jsx>{`
        @keyframes fadeIn {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }

        .animate-fade-in {
          opacity: 0;
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
        </div>
    );
}

