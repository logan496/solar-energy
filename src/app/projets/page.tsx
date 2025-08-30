"use client"

import { NavigationItem } from "@/utilis/types";
import { NavBar } from "@/components/layout/NavBar";
import React from "react";
import { COLORS } from "../COLORS";
import {BarChart3, Lightbulb, Sun} from "lucide-react";

interface ProjectCardProps {
    image: string;
    title: string;
    description: string;
    category: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, description, category }) => {
    return (
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-2">
            {/* Image Container */}
            <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                {/* Simulation d'image avec panneau solaire */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid grid-cols-6 gap-1 p-4">
                        {Array.from({ length: 24 }).map((_, i) => (
                            <div
                                key={i}
                                className="w-6 h-6 bg-blue-800/40 rounded border border-blue-300/30"
                                style={{ animationDelay: `${i * 50}ms` }}
                            ></div>
                        ))}
                    </div>
                </div>
                {/* Badge catégorie */}
                <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {category}
                    </span>
                </div>
            </div>

            {/* Contenu */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                    {description}
                </p>
                <button
                    onClick={() => window.location.href = '/contact'}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                    Voir plus
                </button>
            </div>
        </div>
    );
};

export default function ProjectsRealizationsPage() {
    const navigationItems: NavigationItem[] = [
        { label: "Accueil", href: "/" },
        { label: "À propos", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Contact", href: "/contact" },
        { label: "Projets", href: "/projets" },
    ];

    const projects = [
        {
            image: "/residential-solar.jpg",
            title: "Residential Solar Installation",
            description: "Installation solaire résidentielle complète avec système de monitoring pour une famille de 6 personnes.",
            category: "Résidentiel"
        },
        {
            image: "/commercial-solar.jpg",
            title: "Commercial Solar Rooftop",
            description: "Système commercial de 50kW installé sur le toit d'un centre commercial avec retour sur investissement de 5 ans.",
            category: "Commercial"
        },
        {
            image: "/solar-farm.jpg",
            title: "Solar Farm Development",
            description: "Développement d'une ferme solaire de 2MW pour alimenter une communauté rurale entière.",
            category: "Industriel"
        },
        {
            image: "/industrial-solar.jpg",
            title: "Industrial Solar Panels",
            description: "Installation industrielle de panneaux solaires pour une usine textile avec réduction de 60% des coûts énergétiques.",
            category: "Industriel"
        },
        {
            image: "/school-solar.jpg",
            title: "École Primaire - Douala",
            description: "Installation de 15kW pour une école primaire, permettant l'éclairage et l'alimentation des équipements informatiques.",
            category: "Éducation"
        },
        {
            image: "/hospital-solar.jpg",
            title: "Centre de Santé - Yaoundé",
            description: "Système solaire hybride de 30kW avec batteries pour assurer l'alimentation continue d'un centre de santé.",
            category: "Santé"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            <NavBar navigationItems={navigationItems} logo="SOLAR ENERGY OPTIONS" />

            {/* Section principale */}
            <div className="pt-24 pb-16">
                <div className="container mx-auto px-4">
                    {/* En-tête */}
                    <div className="text-center mb-16 animate-in fade-in slide-in-from-top duration-700">
                        <h1 className="text-5xl font-bold text-gray-800 mb-6">
                            Projets & Réalisations
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-8"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Découvrez nos projets solaires réalisés avec succès pour nos clients résidentiels, commerciaux et industriels
                        </p>
                    </div>

                    {/* Grille des projets */}
                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
                        {projects.map((project, index) => (
                            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                                <ProjectCard
                                    image={project.image}
                                    title={project.title}
                                    description={project.description}
                                    category={project.category}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Section statistiques */}
                    <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-3xl p-8 lg:p-12 text-white mb-16 animate-in fade-in slide-in-from-bottom duration-700">
                        <h2 className="text-3xl font-bold text-center mb-8">Nos Chiffres Clés</h2>
                        <div className="grid md:grid-cols-4 gap-8 text-center">
                            <div className="space-y-2">
                                <div className="text-4xl font-black">50+</div>
                                <div className="text-lg opacity-90">Projets Réalisés</div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-4xl font-black">15MW</div>
                                <div className="text-lg opacity-90">Capacité Totale Installée</div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-4xl font-black">98%</div>
                                <div className="text-lg opacity-90">Satisfaction Client</div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-4xl font-black">5+</div>
                                <div className="text-lg opacity-90">Années d'Expérience</div>
                            </div>
                        </div>
                    </div>

                    {/* Section types de projets */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Types de Projets</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Sun className="w-8 h-8 text-yellow-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Résidentiel</h3>
                                <p className="text-gray-600">Installations solaires pour maisons individuelles et résidences</p>
                            </div>

                            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <BarChart3 className="w-8 h-8 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Commercial</h3>
                                <p className="text-gray-600">Solutions énergétiques pour entreprises et centres commerciaux</p>
                            </div>

                            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Lightbulb className="w-8 h-8 text-green-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Industriel</h3>
                                <p className="text-gray-600">Grandes installations pour usines et infrastructures publiques</p>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="text-center animate-in fade-in slide-in-from-bottom duration-700">
                        <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Votre Projet Nous Intéresse !
                            </h2>
                            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                                Rejoignez nos clients satisfaits et commencez votre transition vers l'énergie solaire dès aujourd'hui
                            </p>
                            <button
                                onClick={() => window.location.href = '/contact'}
                                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                                style={{ backgroundColor: COLORS.jauneSolaire }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = '#FFB300';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = COLORS.jauneSolaire;
                                }}
                            >
                                Démarrer Mon Projet
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
                    animation: slideInFromTop 0.8s ease-out;
                }

                .slide-in-from-bottom {
                    animation: slideInFromBottom 0.8s ease-out;
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

                @keyframes slideInFromBottom {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    );
}