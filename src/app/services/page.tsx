"use client"

import { NavigationItem } from "@/utilis/types";
import {BarChart3, Search, Sun, Users } from "lucide-react";
import { COLORS } from "../COLORS";
import {NavBar} from "@/components/layout/NavBar";
import React from "react";

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    color: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, color }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group hover:-translate-y-2">
            <div className="flex items-start space-x-4">
                <div
                    className="p-4 rounded-full flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: color + '20' }}
                >
                    <div style={{ color: color }}>
                        {icon}
                    </div>
                </div>
                <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors duration-300">
                        {title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

// Composant principal
export default function ServicesPage() {
    const navigationItems: NavigationItem[] = [
        { label: "Accueil", href: "/" },
        { label: "À propos", href: "/about" },
        { label: "Service", href: "/services" },
        { label: "Contact", href: "/Contact" }
    ];

    const services = [
        {
            icon: <Search size={32} />,
            title: "Audit énergétique",
            description: "Nous établissons un diagnostic énergétique précis et proposons des solutions d'optimisation pour améliorer l'efficacité énergétique de votre installation.",
            color: COLORS.jauneSolaire
        },
        {
            icon: <Sun size={32} />,
            title: "Conception et installation solaire",
            description: "Notre équipe conçoit et installe des systèmes solaires sur mesure adaptés à vos besoins spécifiques et aux contraintes de votre site.",
            color: COLORS.bleuCiel
        },
        {
            icon: <BarChart3 size={32} />,
            title: "Efficacité énergétique",
            description: "Nous analysons votre consommation énergétique et mettons en place des stratégies d'optimisation pour réduire vos coûts énergétiques.",
            color: COLORS.jauneSolaire
        },
        {
            icon: <Users size={32} />,
            title: "Formation et conseil",
            description: "Nous proposons des formations personnalisées et des conseils d'experts pour optimiser l'utilisation de vos installations énergétiques.",
            color: COLORS.bleuCiel
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            <NavBar navigationItems={navigationItems} />

            {/* Section principale */}
            <div className="pt-24 pb-16">
                <div className="container mx-auto px-4">
                    {/* En-tête de la section */}
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-bold text-gray-800 mb-6">
                            Nos services
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-8"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Découvrez notre gamme complète de services dédiés à l'énergie solaire et à l'efficacité énergétique
                        </p>
                    </div>

                    {/* Grille des services */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {services.map((service, index) => (
                            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                                <ServiceCard
                                    icon={service.icon}
                                    title={service.title}
                                    description={service.description}
                                    color={service.color}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Section CTA */}
                    <div className="text-center mt-16">
                        <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-8 max-w-4xl mx-auto text-white">
                            <h2 className="text-3xl font-bold mb-4">
                                Prêt à passer à l'énergie solaire ?
                            </h2>
                            <p className="text-xl mb-8 opacity-90">
                                Contactez nos experts pour un devis personnalisé et gratuit
                            </p>
                            <button className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg">
                                Obtenir un devis
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes fadeIn {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }

        .animate-fade-in {
          opacity: 0;
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
        </div>
    );
}