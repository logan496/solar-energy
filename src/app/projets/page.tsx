"use client"

import React, { useState, useEffect } from "react";
import { BarChart3, Lightbulb, Sun, ChevronLeft, ChevronRight, X, Calendar, MapPin, Zap } from "lucide-react";
import {Footer} from "@/components/layout/footer";

// Définir les couleurs
const COLORS = {
    vertEnergie: "#4CAF50",
    jauneSolaire: "#FFC107"
};

// Types
interface NavigationItem {
    label: string;
    href: string;
}

interface Project {
    id: string;
    images: string[];
    title: string;
    description: string;
    category: string;
    location: string;
    date: string;
    power: string;
    details: string;
}

interface ProjectCardProps {
    project: Project;
    onViewMore: (project: Project) => void;
}

interface ProjectModalProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}

// Fonction helper pour les couleurs de catégorie
const getCategoryColor = (category: string): string => {
    switch (category) {
        case 'Résidentiel': return '#4CAF50';
        case 'Commercial': return '#2196F3';
        case 'Industriel': return '#FF9800';
        case 'Éducation': return '#9C27B0';
        case 'Santé': return '#F44336';
        default: return '#6B7280';
    }
};

// Composant NavBar simplifié (à remplacer par votre NavBar)
const SimpleNavBar: React.FC<{ navigationItems: NavigationItem[] }> = ({ navigationItems }) => {
    return (
        <nav className="bg-white shadow-sm py-4 fixed w-full top-0 z-40">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-green-600">SOLAR ENERGY OPTIONS</div>
                <div className="hidden md:flex gap-6">
                    {navigationItems.map((item, index) => (
                        <a key={index} href={item.href} className="text-gray-700 hover:text-green-600">
                            {item.label}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

// Composant ProjectCard avec carrousel
const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewMore }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    };

    const prevImage = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    };

    return (
        <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
            {/* Carrousel d'images */}
            <div className="relative h-64 overflow-hidden bg-gray-200">
                {project.images[currentImageIndex] ? (
                    <img
                        src={project.images[currentImageIndex]}
                        alt={`${project.title} - Image ${currentImageIndex + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                        <Sun className="w-20 h-20 text-white opacity-50" />
                    </div>
                )}

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Boutons navigation */}
                {project.images.length > 1 && (
                    <>
                        <button
                            onClick={prevImage}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
                            type="button"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
                            type="button"
                        >
                            <ChevronRight size={20} />
                        </button>

                        {/* Indicateurs */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                            {project.images.map((_, index) => (
                                <div
                                    key={index}
                                    className={`h-2 rounded-full transition-all duration-300 ${
                                        index === currentImageIndex ? 'w-8 bg-white' : 'w-2 bg-white/50'
                                    }`}
                                />
                            ))}
                        </div>
                    </>
                )}

                {/* Badge catégorie */}
                <div
                    className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium text-white shadow-md"
                    style={{ backgroundColor: getCategoryColor(project.category) }}
                >
                    {project.category}
                </div>
            </div>

            {/* Contenu */}
            <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3 gap-4 flex-wrap">
                    <div className="flex items-center">
                        <MapPin size={16} className="mr-1" />
                        <span>{project.location}</span>
                    </div>
                    <div className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        <span>{project.date}</span>
                    </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors duration-300 line-clamp-2">
                    {project.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-2">
                    {project.description}
                </p>

                <div className="flex items-center justify-between">
                    <div className="flex items-center text-green-600 font-semibold">
                        <Zap size={18} className="mr-1" />
                        <span>{project.power}</span>
                    </div>

                    <button
                        onClick={() => onViewMore(project)}
                        className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300 flex items-center gap-2"
                        type="button"
                    >
                        Voir plus
                        <ChevronRight size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
};

// Composant ProjectModal
const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    useEffect(() => {
        setCurrentImageIndex(0);
    }, [project]);

    if (!isOpen || !project) return null;

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-black bg-opacity-60 transition-opacity duration-300"
                onClick={onClose}
            />
            <div className="relative bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all duration-300">
                <button
                    onClick={onClose}
                    className="sticky top-4 float-right z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow mr-4"
                    type="button"
                >
                    <X size={24} className="text-gray-600" />
                </button>

                {/* Carrousel d'images en grand */}
                <div className="relative h-96 overflow-hidden bg-gray-200">
                    {project.images[currentImageIndex] ? (
                        <img
                            src={project.images[currentImageIndex]}
                            alt={`${project.title} - Image ${currentImageIndex + 1}`}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                            <Sun className="w-32 h-32 text-white opacity-50" />
                        </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                    {/* Navigation carrousel */}
                    {project.images.length > 1 && (
                        <>
                            <button
                                onClick={prevImage}
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300"
                                type="button"
                            >
                                <ChevronLeft size={24} />
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300"
                                type="button"
                            >
                                <ChevronRight size={24} />
                            </button>

                            {/* Indicateurs */}
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                                {project.images.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentImageIndex(index)}
                                        className={`h-3 rounded-full transition-all duration-300 ${
                                            index === currentImageIndex ? 'w-12 bg-white' : 'w-3 bg-white/50 hover:bg-white/75'
                                        }`}
                                        type="button"
                                    />
                                ))}
                            </div>
                        </>
                    )}

                    {/* Infos en overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
                        <div
                            className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-3"
                            style={{ backgroundColor: getCategoryColor(project.category) }}
                        >
                            {project.category}
                        </div>
                        <h1 className="text-3xl sm:text-4xl font-bold mb-3 leading-tight">{project.title}</h1>
                        <div className="flex items-center gap-4 text-sm opacity-90 flex-wrap">
                            <div className="flex items-center">
                                <MapPin size={18} className="mr-2" />
                                <span>{project.location}</span>
                            </div>
                            <div className="flex items-center">
                                <Calendar size={18} className="mr-2" />
                                <span>{project.date}</span>
                            </div>
                            <div className="flex items-center">
                                <Zap size={18} className="mr-2" />
                                <span>{project.power}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contenu détaillé */}
                <div className="p-6 sm:p-8 lg:p-12">
                    {/* Description courte */}
                    <div className="mb-8 p-5 bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-500 rounded-r-lg shadow-sm">
                        <p className="text-xl text-gray-900 font-semibold leading-relaxed">
                            {project.description}
                        </p>
                    </div>

                    {/* Détails complets */}
                    <div className="article-content">
                        <style jsx>{`
                            .article-content :global(h2) {
                                font-size: 2rem !important;
                                font-weight: 700 !important;
                                margin-top: 3rem !important;
                                margin-bottom: 1.5rem !important;
                                color: #111827 !important;
                                padding-bottom: 0.75rem !important;
                                border-bottom: 3px solid #10b981 !important;
                                line-height: 1.3 !important;
                            }

                            .article-content :global(h2:first-of-type) {
                                margin-top: 0 !important;
                            }

                            .article-content :global(p) {
                                margin-bottom: 1.75rem !important;
                                line-height: 2 !important;
                                color: #111827 !important;
                                font-size: 1.125rem !important;
                                font-weight: 400 !important;
                            }

                            .article-content :global(ul),
                            .article-content :global(ol) {
                                margin: 2rem 0 !important;
                                padding-left: 2rem !important;
                            }

                            .article-content :global(li) {
                                margin-bottom: 1rem !important;
                                line-height: 1.9 !important;
                                color: #111827 !important;
                                font-size: 1.0625rem !important;
                            }

                            .article-content :global(strong) {
                                color: #000000 !important;
                                font-weight: 700 !important;
                            }
                        `}</style>
                        <div dangerouslySetInnerHTML={{ __html: project.details }} />
                    </div>

                    {/* CTA */}
                    <div className="mt-12 p-6 sm:p-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl text-white text-center shadow-lg">
                        <h3 className="text-xl sm:text-2xl font-bold mb-3">Vous avez un projet similaire ?</h3>
                        <p className="mb-6 opacity-95 text-base sm:text-lg">
                            Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé
                        </p>
                        <button
                            onClick={() => window.location.href = '/contact'}
                            className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-md hover:shadow-lg transform hover:scale-105 transition-transform"
                            type="button"
                        >
                            Demander un devis gratuit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function ProjectsRealizationsPage() {
    const navigationItems: NavigationItem[] = [
        { label: 'Accueil', href: '/' },
        { label: 'À propos', href: '/about' },
        { label: 'Nos Services', href: '/services' },
        { label: 'projets & Réalisations', href: '/projets' },
        { label: 'Blog / Conseils énergie', href: '/tips' },
        { label: 'Contact', href: '/contact' }
    ];

    const [activeFilter, setActiveFilter] = useState("Tous");
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const filters = ["Tous", "Résidentiel", "Commercial", "Industriel", "Éducation", "Santé"];

    const projects: Project[] = [
        {
            id: "1",
            images: [
                "/images/residentiel-solar-1.png",
                "/images/residentiel-solar-2.png",
                "/images/residentiel-solar-3.png",
                "/images/residentiel-solar-4.png",
            ],
            title: "Villa Moderne - Douala",
            description: "Installation solaire résidentielle complète avec système de monitoring intelligent pour une famille de 6 personnes.",
            category: "Résidentiel",
            location: "Douala, Cameroun",
            date: "Mars 2024",
            power: "8 kW",
            details: `
                <h2>Description du projet</h2>
                <p>Installation complète d'un système photovoltaïque de 8 kW sur une villa moderne à Douala. Le système comprend 20 panneaux solaires de 400W chacun, un onduleur hybride et un système de batteries de 10 kWh.</p>
                
                <h2>Objectifs</h2>
                <p>Réduire la dépendance au réseau électrique et diminuer les factures d'électricité de 70%. Assurer une alimentation électrique stable même pendant les coupures.</p>
                
                <h2>Solution mise en place</h2>
                <p>Nous avons installé des panneaux solaires monocristallins haute performance sur le toit, optimisés pour maximiser la production d'énergie. Le système est équipé d'un monitoring en temps réel accessible via smartphone.</p>
                
                <h2>Résultats</h2>
                <p>Réduction de 75% des factures d'électricité. Production moyenne de 35 kWh par jour. Autonomie complète pendant 8 heures en cas de coupure. Retour sur investissement estimé à 6 ans.</p>
            `
        },
        {
            id: "2",
            images: [
                "/images/commercial-solar-1.png",
                "/images/commercial-solar-2.png"
            ],
            title: "Centre Commercial Akwa",
            description: "Système commercial de 50kW installé sur le toit d'un centre commercial avec retour sur investissement de 5 ans.",
            category: "Commercial",
            location: "Yaoundé, Cameroun",
            date: "Janvier 2024",
            power: "50 kW",
            details: `
                <h2>Contexte du projet</h2>
                <p>Le centre commercial Akwa souhaitait réduire ses coûts énergétiques élevés et améliorer son image écologique auprès de ses clients.</p>
                
                <h2>Installation</h2>
                <p>Installation de 125 panneaux solaires de 400W sur une surface de 350m². Système triphasé avec 3 onduleurs de 17kW. Intégration avec le système électrique existant.</p>
                
                <h2>Bénéfices</h2>
                <p>Économies annuelles de 15 millions FCFA. Réduction de 60% de la consommation du réseau. Image de marque écologique renforcée. Production de 180 kWh par jour en moyenne.</p>
            `
        },
        {
            id: "3",
            images: [
                "/images/solar-farm-1.png",
                "/images/solar-farm-2.png",
            ],
            title: "Ferme Solaire Communautaire",
            description: "Développement d'une ferme solaire de 2MW pour alimenter une communauté rurale entière.",
            category: "Industriel",
            location: "Région du Littoral",
            date: "Novembre 2023",
            power: "2 MW",
            details: `
                <h2>Vision du projet</h2>
                <p>Apporter l'électricité à une communauté rurale de 5000 habitants précédemment non desservie par le réseau électrique national.</p>
                
                <h2>Infrastructure</h2>
                <p>5000 panneaux solaires installés sur un terrain de 4 hectares. 10 onduleurs industriels de 200kW. Réseau de distribution local de 15 km. Système de stockage de 500 kWh.</p>
                
                <h2>Impact social</h2>
                <p>Électrification de 800 foyers. Création de 15 emplois locaux permanents. Développement économique de la région. Accès à l'éducation et aux soins amélioré.</p>
            `
        },
        {
            id: "4",
            images: [
                "/images/industrial-solar-1.png",
                "/images/industrial-solar-2.png"
            ],
            title: "Usine Textile - Garoua",
            description: "Installation industrielle de panneaux solaires pour une usine textile avec réduction de 60% des coûts énergétiques.",
            category: "Industriel",
            location: "Garoua, Cameroun",
            date: "Septembre 2023",
            power: "150 kW",
            details: `
                <h2>Défi énergétique</h2>
                <p>L'usine textile faisait face à des coûts énergétiques insoutenables qui menaçaient sa rentabilité.</p>
                
                <h2>Solution</h2>
                <p>Installation de 375 panneaux solaires de 400W. Système hybride combinant solaire et réseau. Optimisation de la consommation pendant les heures de production.</p>
                
                <h2>Performance</h2>
                <p>Réduction de 62% des coûts énergétiques. Production de 550 kWh par jour. Amélioration de la compétitivité de l'entreprise. ROI de 4,5 ans.</p>
            `
        },
        {
            id: "5",
            images: [
                "/images/school-solar-1.png",
                "/images/school-solar-2.png",
            ],
            title: "École Primaire Les Lauriers",
            description: "Installation de 15kW pour une école primaire, permettant l'éclairage et l'alimentation des équipements informatiques.",
            category: "Éducation",
            location: "Douala, Cameroun",
            date: "Août 2023",
            power: "15 kW",
            details: `
                <h2>Objectif éducatif</h2>
                <p>Fournir une électricité stable pour permettre l'utilisation d'équipements informatiques et améliorer les conditions d'apprentissage.</p>
                
                <h2>Réalisation</h2>
                <p>38 panneaux solaires installés sur les toits des bâtiments. Système de batterie de 15 kWh. Salle informatique alimentée en priorité. Éclairage LED dans toutes les salles.</p>
                
                <h2>Résultats</h2>
                <p>400 élèves bénéficiaires. Cours d'informatique possibles toute la journée. Réduction de 90% des factures d'électricité. Sensibilisation des enfants aux énergies renouvelables.</p>
            `
        },
        {
            id: "6",
            images: [
                "/images/hospital-solar-1.png",
                "/images/hospital-solar-2.png",
                '/images/hospital-solar-3.png'
            ],
            title: "Centre de Santé Intégré",
            description: "Système solaire hybride de 30kW avec batteries pour assurer l'alimentation continue d'un centre de santé.",
            category: "Santé",
            location: "Yaoundé, Cameroun",
            date: "Juin 2023",
            power: "30 kW",
            details: `
                <h2>Enjeu vital</h2>
                <p>Le centre de santé souffrait de coupures électriques fréquentes mettant en danger les patients et les équipements médicaux.</p>
                
                <h2>Solution critique</h2>
                <p>75 panneaux solaires de 400W. Système de batteries de 50 kWh pour 24h d'autonomie. Alimentation sans interruption des équipements critiques. Groupe électrogène de secours intégré.</p>
                
                <h2>Impact sanitaire</h2>
                <p>Zéro interruption de service depuis l'installation. Conservation fiable des vaccins et médicaments. 2000 patients servis mensuellement dans de meilleures conditions. Sauvetage de vies grâce à la fiabilité électrique.</p>
            `
        }
    ];

    const filteredProjects = activeFilter === "Tous"
        ? projects
        : projects.filter(project => project.category === activeFilter);

    const handleViewMore = (project: Project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <SimpleNavBar navigationItems={navigationItems} />

            {/* Hero Section */}
            <div
                className="pt-32 pb-16 text-white relative overflow-hidden"
                style={{ backgroundColor: COLORS.vertEnergie }}
            >
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">Projets & Réalisations</h1>
                    <p className="text-xl opacity-90 max-w-2xl">
                        Découvrez nos installations solaires réalisées avec succès à travers le Cameroun
                    </p>
                </div>
                <div className="absolute right-0 top-0 opacity-10">
                    <Sun size={300} />
                </div>
            </div>

            {/* Main Content */}
            <div className="py-12">
                <div className="container mx-auto px-4">
                    {/* Filters */}
                    <div className="flex flex-wrap gap-3 mb-8 justify-center">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                    activeFilter === filter
                                        ? 'bg-green-600 text-white shadow-md'
                                        : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                                }`}
                                type="button"
                            >
                                {filter}
                            </button>
                        ))}
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {filteredProjects.map((project, index) => (
                            <div
                                key={project.id}
                                className="animate-fade-in"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <ProjectCard
                                    project={project}
                                    onViewMore={handleViewMore}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Stats Section */}
                    <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-3xl p-8 lg:p-12 text-white mb-16">
                        <h2 className="text-3xl font-bold text-center mb-8">Nos Chiffres Clés</h2>
                        <div className="grid md:grid-cols-4 gap-8 text-center">
                            <div className="space-y-2">
                                <div className="text-4xl font-black">253+</div>
                                <div className="text-lg opacity-90">Projets Réalisés</div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-4xl font-black">53</div>
                                <div className="text-lg opacity-90">Personnes formées</div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-4xl font-black">93.8%</div>
                                <div className="text-lg opacity-90">Satisfaction Client</div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-4xl font-black">5+</div>
                                <div className="text-lg opacity-90">Années d&apos;Expérience</div>
                            </div>
                        </div>
                    </div>

                    {/* Types Section */}
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

                    {/* CTA Section */}
                    <div className="text-center">
                        <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Votre Projet Nous Intéresse !
                            </h2>
                            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                                Rejoignez nos clients satisfaits et commencez votre transition vers l&apos;énergie solaire dès aujourd&apos;hui
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
                                type="button"
                            >
                                Démarrer Mon Projet
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Project Modal */}
            <ProjectModal
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />

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

                .line-clamp-2 {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            `}</style>
        </div>
    );
}