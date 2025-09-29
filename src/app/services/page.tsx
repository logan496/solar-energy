"use client"

import { NavigationItem } from "@/utilis/types";
import { ChevronDown, ChevronUp } from "lucide-react";
import { NavBar } from "@/components/layout/NavBar";
import React, { useState } from "react";

interface ServiceCardProps {
    id: string;
    imageUrl: string;
    imageAlt: string;
    title: string;
    subtitle: string;
    shortDescription: string;
    fullDescription: string;
    benefits: string[];
    ctaText: string;
    color: string;
    bgColor: string;
    isExpanded: boolean;
    onToggle: () => void;
    onCTAClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
                                                     id,
                                                     imageUrl,
                                                     imageAlt,
                                                     title,
                                                     subtitle,
                                                     shortDescription,
                                                     fullDescription,
                                                     benefits,
                                                     ctaText,
                                                     color,
                                                     bgColor,
                                                     isExpanded,
                                                     onToggle,
                                                     onCTAClick
                                                 }) => {
    return (
        <div id={id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group hover:-translate-y-2">
            <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-8">
                <div
                    className="w-40 h-32 lg:w-48 lg:h-36 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300 relative overflow-hidden shadow-md"
                    style={{ backgroundColor: `${bgColor}15` }}
                >
                    <img
                        src={imageUrl}
                        alt={imageAlt}
                        className="w-full h-full object-cover rounded-xl transition-all duration-300 group-hover:scale-110"
                        style={{
                            filter: 'none',
                            objectFit: 'cover'
                        }}
                        onError={(e) => {
                            // Image de fallback en cas d'erreur de chargement
                            const target = e.target as HTMLImageElement;
                            target.src = `data:image/svg+xml,${encodeURIComponent(`
                                <svg xmlns="http://www.w3.org/2000/svg" width="192" height="144" viewBox="0 0 24 24" fill="none" stroke="${bgColor}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                                    <circle cx="8.5" cy="8.5" r="1.5"/>
                                    <polyline points="21,15 16,10 5,21"/>
                                </svg>
                            `)}`;
                            target.style.padding = '32px';
                            target.style.backgroundColor = `${bgColor}20`;
                        }}
                    />
                    {/* Effet de superposition colorée au hover */}
                    <div
                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-all duration-300"
                        style={{ backgroundColor: bgColor }}
                    ></div>
                    {/* Effet de bordure colorée */}
                    <div
                        className="absolute inset-0 rounded-xl border-2 opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                        style={{ borderColor: bgColor }}
                    ></div>
                </div>
                <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors duration-300">
                        {title}
                    </h3>
                    <h4 className="text-lg font-semibold text-gray-700 mb-4" style={{ color: color }}>
                        {subtitle}
                    </h4>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        {shortDescription}
                    </p>

                    {isExpanded && (
                        <div className="space-y-4 animate-in fade-in slide-in-from-top duration-500">
                            <p className="text-gray-600 leading-relaxed">
                                {fullDescription}
                            </p>

                            {benefits.length > 0 && (
                                <div className="bg-gray-50 rounded-lg p-4">
                                    <h5 className="font-semibold text-gray-800 mb-3">Avantages :</h5>
                                    <ul className="space-y-2">
                                        {benefits.map((benefit, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: color }}></div>
                                                <span className="text-gray-600">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <button
                                onClick={onCTAClick}
                                className="inline-flex items-center px-6 py-3 font-bold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-white"
                                style={{ backgroundColor: color }}
                            >
                                {ctaText}
                            </button>
                        </div>
                    )}

                    <button
                        onClick={onToggle}
                        className="mt-4 inline-flex items-center gap-2 font-medium transition-colors hover:underline"
                        style={{ color: color }}
                    >
                        {isExpanded ? (
                            <>
                                Réduire <ChevronUp className="w-4 h-4" />
                            </>
                        ) : (
                            <>
                                Lire la suite <ChevronDown className="w-4 h-4" />
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

// Composant principal
export default function ServicesPage() {
    const [expandedServices, setExpandedServices] = useState<{[key: string]: boolean}>({});

    const toggleService = (serviceId: string) => {
        setExpandedServices(prev => ({
            ...prev,
            [serviceId]: !prev[serviceId]
        }));
    };

    const redirectToContact = () => {
        window.location.href = '/contact';
    };

    const navigationItems: NavigationItem[] = [
        { label: 'Accueil', href: '/' },
        { label: 'À propos', href: '/about' },
        { label: 'Nos Services', href: '/services' },
        { label: 'projets & Réalisations', href: '/projets' },
        { label: 'Blog / Conseils énergie', href: '/tips' },
        { label: 'Contact', href: '/contact' }
    ];

    const services = [
        {
            id: "audit-energetique",
            imageUrl: "/images/audi_energetique.jpeg",
            imageAlt: "Audit énergétique - Analyse complète de consommation",
            title: "Audit énergétique",
            subtitle: "Analyse complète pour réduire vos coûts",
            shortDescription: "Comprenez exactement où votre énergie est consommée et identifiez les économies possibles.",
            fullDescription: "Notre audit complet vous permet d'analyser votre consommation, identifier les sources de gaspillage et recevoir des recommandations personnalisées.",
            benefits: [
                "Meilleure efficacité énergétique",
                "Conseils sur mesure",
                "Retour sur investissement optimisé"
            ],
            ctaText: "Planifiez votre audit dès aujourd'hui !",
            color: "#FFC107",
            bgColor: "#FFC107"
        },
        {
            id: "conception-installation-solaire",
            imageUrl: "/images/conception_insertion_solaire.jpeg",
            imageAlt: "Installation panneaux solaires photovoltaïques",
            title: "Conception et installation solaire",
            subtitle: "Panneaux solaires sur mesure pour tous les besoins",
            shortDescription: "Passez à l'énergie solaire avec des solutions fiables et performantes.",
            fullDescription: "Nous installons vos panneaux photovoltaïques pour particuliers, entreprises et institutions publiques, incluant étude de faisabilité, dimensionnement, installation par des techniciens certifiés, mise en service et formation.",
            benefits: [
                "Réduction de vos factures",
                "Augmentation de votre autonomie énergétique",
                "Valorisation de votre patrimoine",
                "Contribution à la protection de l'environnement",
                "Retour sur investissement attractif"
            ],
            ctaText: "Demandez votre devis personnalisé !",
            color: "#2196F3",
            bgColor: "#2196F3"
        },
        {
            id: "eclairage-led-efficacite",
            imageUrl: "/images/eclairage_led.jpeg",
            imageAlt: "Solutions d'éclairage LED efficaces",
            title: "Éclairage LED et solutions d'efficacité énergétique",
            subtitle: "Optimisez votre consommation et modernisez vos installations",
            shortDescription: "Modernisez vos installations et réduisez votre consommation avec nos solutions LED et d'efficacité énergétique.",
            fullDescription: "Remplacez vos éclairages traditionnels, optimisez vos équipements et profitez d'un éclairage de qualité.",
            benefits: [
                "Diminution de vos factures",
                "Amélioration de votre confort",
                "Contribution à un environnement durable"
            ],
            ctaText: "Découvrez nos solutions dès maintenant !",
            color: "#FF9800",
            bgColor: "#FF9800"
        },
        {
            id: "bornes-recharge-electrique",
            imageUrl: "/images/bornes2.jpeg",
            imageAlt: "Bornes de recharge pour véhicules électriques",
            title: "Installation de bornes de recharge électrique",
            subtitle: "Recharge sécurisée pour véhicules électriques",
            shortDescription: "Rechargez vos véhicules électriques facilement grâce à nos bornes sécurisées et performantes.",
            fullDescription: "Nous assurons l&apos;installation complète, conforme aux normes IRVE, adaptée à vos besoins particuliers ou professionnels.",
            benefits: [
                "Mobilité durable",
                "Solution clé en main fiable",
                "Recharge sécurisée pour vos véhicules électriques"
            ],
            ctaText: "Demandez votre installation aujourd'hui !",
            color: "#4CAF50",
            bgColor: "#4CAF50"
        },
        {
            id: "formation-conseil",
            imageUrl: "/images/formation.jpeg",
            imageAlt: "Formation et conseil en énergie solaire",
            title: "Formation et conseil",
            subtitle: "Expertise et accompagnement personnalisé",
            shortDescription: "Maîtrisez l'énergie solaire et optimisez vos installations grâce à nos formations et conseils personnalisés.",
            fullDescription: "Nous accompagnons particuliers et professionnels pour maximiser les économies, prolonger la durée de vie des installations et améliorer l'efficacité énergétique globale.",
            benefits: [
                "Expertise concrète",
                "Conseils adaptés",
                "Impact tangible sur vos coûts et l'environnement"
            ],
            ctaText: "Planifiez votre formation maintenant !",
            color: "#9C27B0",
            bgColor: "#9C27B0"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            <NavBar navigationItems={navigationItems} logo="SOLAR ENERGY OPTIONS" />

            {/* Section principale */}
            <div className="pt-24 pb-16">
                <div className="container mx-auto px-4">
                    {/* En-tête de la section */}
                    <div className="text-center mb-16 animate-in fade-in slide-in-from-top duration-700">
                        <h1 className="text-5xl font-bold text-gray-800 mb-6">
                            Nos Services
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-8"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Découvrez notre gamme complète de services dédiés à l'énergie solaire et à l'efficacité énergétique
                        </p>
                    </div>

                    {/* Grille des services */}
                    <div className="space-y-8 max-w-6xl mx-auto">
                        {services.map((service, index) => (
                            <div key={service.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                                <ServiceCard
                                    {...service}
                                    isExpanded={expandedServices[service.id] || false}
                                    onToggle={() => toggleService(service.id)}
                                    onCTAClick={redirectToContact}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Section CTA */}
                    <div className="text-center mt-16 animate-in fade-in slide-in-from-bottom duration-700">
                        <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-8 max-w-4xl mx-auto text-white">
                            <h2 className="text-3xl font-bold mb-4">
                                Prêt à passer à l'énergie solaire ?
                            </h2>
                            <p className="text-xl mb-8 opacity-90">
                                Contactez nos experts pour un devis personnalisé et gratuit
                            </p>
                            <button
                                onClick={redirectToContact}
                                className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
                            >
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

                .animate-in {
                    animation-fill-mode: both;
                }

                .fade-in {
                    animation: fadeIn 0.6s ease-out;
                }

                .slide-in-from-top {
                    animation: slideInFromTop 0.5s ease-out;
                }

                @keyframes slideInFromTop {
                    from {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                /* Styles pour améliorer l'affichage des images */
                img {
                    image-rendering: auto;
                    image-rendering: crisp-edges;
                    image-rendering: -webkit-crisp-edges;
                    image-rendering: -moz-crisp-edges;
                }
            `}</style>
        </div>
    );
}