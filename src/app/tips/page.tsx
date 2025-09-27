"use client"

import React, { useEffect, useState } from "react";
import { Phone, Mail, Menu, X, Search, Sun, Wind, Home, Zap, Calendar, User, ArrowRight } from "lucide-react";
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

interface Article {
    id: string;
    title: string;
    summary: string;
    content: string;
    image: string;
    category: string;
    date: string;
    author: string;
    readTime: string;
}

interface NavBarProps {
    navigationItems: NavigationItem[];
}

interface ArticleCardProps {
    article: Article;
    onReadMore: (article: Article) => void;
}

interface ArticleModalProps {
    article: Article | null;
    isOpen: boolean;
    onClose: () => void;
}

// Composant NavBar
const NavBar: React.FC<NavBarProps> = ({ navigationItems }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes spin-slow {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
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
                                <div className="h-16 w-18  flex items-center justify-center text-white font-bold text-sm">
                                    <img
                                        src="/images/logo-solar.png"
                                        alt="logo de solar"
                                    />
                                </div>
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

// Composant ArticleCard
const ArticleCard: React.FC<ArticleCardProps> = ({ article, onReadMore }) => {
    const getCategoryColor = (category: string) => {
        switch (category) {
            case 'Solaire': return COLORS.jauneEnergie;
            case 'Efficacité énergétique': return COLORS.vertEnergie;
            case 'Mobilité électrique': return COLORS.bleuSolaire;
            default: return '#6B7280';
        }
    };

    const getCategoryIcon = (category: string) => {
        switch (category) {
            case 'Solaire': return <Sun size={24} />;
            case 'Efficacité énergétique': return <Zap size={24} />;
            case 'Mobilité électrique': return <Wind size={24} />;
            default: return <Home size={24} />;
        }
    };

    return (
        <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
            <div className="relative overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                    <div className="text-gray-400">
                        {getCategoryIcon(article.category)}
                    </div>
                </div>
                <div
                    className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium text-white"
                    style={{ backgroundColor: getCategoryColor(article.category) }}
                >
                    {article.category}
                </div>
            </div>

            <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar size={16} className="mr-2" />
                    <span className="mr-4">{article.date}</span>
                    <User size={16} className="mr-2" />
                    <span className="mr-4">{article.author}</span>
                    <span>{article.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors duration-300 line-clamp-2">
                    {article.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.summary}
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                    <button
                        onClick={() => onReadMore(article)}
                        className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300 flex items-center justify-center group"
                    >
                        Lire la suite
                        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button className="flex-1 border border-green-600 text-green-600 px-4 py-2 rounded-lg hover:bg-green-50 transition-colors duration-300">
                        Conseil personnalisé
                    </button>
                </div>
            </div>
        </div>
    );
};

// Composant ArticleModal
const ArticleModal: React.FC<ArticleModalProps> = ({ article, isOpen, onClose }) => {
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

    if (!isOpen || !article) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
                onClick={onClose}
            />
            <div className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all duration-300 scale-100 opacity-100">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
                >
                    <X size={24} className="text-gray-600" />
                </button>

                <div className="relative h-64 sm:h-80 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                    <Sun size={80} className="text-gray-400" />
                    <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end">
                        <div className="p-8 text-white">
                            <h1 className="text-3xl sm:text-4xl font-bold mb-2">{article.title}</h1>
                            <div className="flex items-center text-sm opacity-90">
                                <Calendar size={16} className="mr-2" />
                                <span className="mr-4">{article.date}</span>
                                <User size={16} className="mr-2" />
                                <span className="mr-4">{article.author}</span>
                                <span>{article.readTime}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-8">
                    <div className="prose max-w-none">
                        <div dangerouslySetInnerHTML={{ __html: article.content }} />
                    </div>

                    <div className="mt-8 p-6 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl text-white text-center">
                        <h3 className="text-xl font-bold mb-2">Besoin d'un conseil personnalisé ?</h3>
                        <p className="mb-4 opacity-90">Nos experts sont là pour vous accompagner dans votre projet énergétique</p>
                        <button className="bg-white text-green-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                            Demander un conseil
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};



// Composant principal
export default function BlogConseilsEnergie() {
    const navigationItems: NavigationItem[] = [
        { label: 'Accueil', href: '/' },
        { label: 'À propos', href: '/about' },
        { label: 'Nos Services', href: '/services' },
        { label: 'projets & Réalisations', href: '/projets' },
        { label: 'Blog / Conseils énergie', href: '/tips' },
        { label: 'Contact', href: '/contact' }
    ];

    const [activeFilter, setActiveFilter] = useState("Tous");
    const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [email, setEmail] = useState("");

    const filters = ["Tous", "Solaire", "Efficacité énergétique", "Mobilité électrique", "Conseils pratiques"];

    const articles: Article[] = [
        {
            id: "1",
            title: "5 astuces pour réduire vos factures d'électricité",
            summary: "Découvrez des méthodes simples et efficaces pour diminuer votre consommation énergétique et réaliser des économies substantielles sur vos factures.",
            content: `
                <h2>Introduction</h2>
                <p>Réduire ses factures d'électricité est devenu une priorité pour de nombreux foyers. Voici 5 astuces pratiques et facilement applicables.</p>
                
                <h2>1. Optimiser l'éclairage</h2>
                <p>Remplacez vos ampoules traditionnelles par des LED. Elles consomment jusqu'à 80% d'énergie en moins et durent 25 fois plus longtemps.</p>
                
                <h2>2. Améliorer l'isolation</h2>
                <p>Une bonne isolation peut réduire vos besoins de chauffage de 30%. Concentrez-vous sur les combles, les murs et les fenêtres.</p>
                
                <h2>3. Utiliser des appareils économes</h2>
                <p>Privilégiez les appareils électroménagers de classe A+++ qui consomment significativement moins d'énergie.</p>
                
                <h2>4. Réguler le chauffage</h2>
                <p>Baissez la température de 1°C peut réduire votre facture de 7%. Utilisez un thermostat programmable pour optimiser la température selon vos horaires.</p>
                
                <h2>5. Débrancher les appareils en veille</h2>
                <p>Les appareils en veille représentent jusqu'à 10% de votre consommation électrique. Utilisez des multiprises avec interrupteur.</p>
            `,
            image: "/images/conseils-electricite.jpg",
            category: "Efficacité énergétique",
            date: "15 Mars 2024",
            author: "Sophie Martin",
            readTime: "5 min de lecture"
        },
        {
            id: "2",
            title: "Installation de panneaux solaires : guide complet 2024",
            summary: "Tout ce que vous devez savoir avant d'installer des panneaux solaires chez vous : coûts, démarches, rentabilité et conseils d'experts.",
            content: `
                <h2>Pourquoi choisir l'énergie solaire ?</h2>
                <p>L'installation de panneaux solaires représente un investissement durable qui permet de réduire considérablement vos factures d'électricité.</p>
                
                <h2>Étapes de l'installation</h2>
                <p>1. Étude de faisabilité<br/>
                2. Dimensionnement de l'installation<br/>
                3. Démarches administratives<br/>
                4. Installation proprement dite<br/>
                5. Raccordement au réseau</p>
                
                <h2>Coûts et rentabilité</h2>
                <p>Le coût moyen d'une installation résidentielle varie entre 9 000€ et 15 000€. Avec les aides de l'État, la rentabilité est atteinte en 8 à 12 ans.</p>
                
                <h2>Maintenance</h2>
                <p>Les panneaux solaires nécessitent peu de maintenance : un nettoyage annuel et une vérification technique tous les 4 ans suffisent.</p>
            `,
            image: "/images/panneaux-solaires.jpg",
            category: "Solaire",
            date: "10 Mars 2024",
            author: "Jean Dupont",
            readTime: "8 min de lecture"
        },
        {
            id: "3",
            title: "Voiture électrique : comment optimiser l'autonomie",
            summary: "Maximisez l'autonomie de votre véhicule électrique avec ces conseils pratiques d'éco-conduite et d'entretien adaptés.",
            content: `
                <h2>Les bases de l'éco-conduite électrique</h2>
                <p>L'éco-conduite électrique diffère de la conduite traditionnelle. Voici les principes fondamentaux.</p>
                
                <h2>Gestion de la température</h2>
                <p>Le chauffage et la climatisation peuvent réduire l'autonomie de 20 à 40%. Utilisez le préchauffage pendant la charge.</p>
                
                <h2>Planification des trajets</h2>
                <p>Utilisez les applications de navigation spécialisées qui intègrent l'emplacement des bornes de recharge et optimisent votre itinéraire.</p>
                
                <h2>Entretien spécifique</h2>
                <p>Vérifiez régulièrement la pression des pneus, entretenez les freins et contrôlez l'état de la batterie.</p>
            `,
            image: "/images/voiture-electrique.jpg",
            category: "Mobilité électrique",
            date: "5 Mars 2024",
            author: "Marie Dubois",
            readTime: "6 min de lecture"
        },
        {
            id: "4",
            title: "LED vs ampoules traditionnelles : le match",
            summary: "Comparatif détaillé entre éclairage LED et ampoules classiques en termes de consommation, durabilité et qualité d'éclairage.",
            content: `
                <h2>Consommation énergétique</h2>
                <p>Les LED consomment 80% d'énergie en moins que les ampoules à incandescence pour un éclairage équivalent.</p>
                
                <h2>Durée de vie</h2>
                <p>Une LED dure en moyenne 25 000 heures contre 1 000 heures pour une ampoule traditionnelle.</p>
                
                <h2>Qualité de la lumière</h2>
                <p>Les LED modernes offrent une large gamme de températures de couleur et un excellent rendu des couleurs.</p>
                
                <h2>Impact environnemental</h2>
                <p>Moins de consommation électrique et durée de vie plus longue font des LED un choix écologique évident.</p>
            `,
            image: "/images/led-comparison.jpg",
            category: "Conseils pratiques",
            date: "1 Mars 2024",
            author: "Pierre Lambert",
            readTime: "4 min de lecture"
        },
        {
            id: "5",
            title: "Bornes de recharge à domicile : installation et coûts",
            summary: "Guide pratique pour installer une borne de recharge électrique chez soi : types, installation, prix et aides disponibles.",
            content: `
                <h2>Types de bornes de recharge</h2>
                <p>Il existe plusieurs types de bornes : prise renforcée, wallbox 7kW, et borne rapide 22kW selon vos besoins.</p>
                
                <h2>Installation</h2>
                <p>L'installation doit être réalisée par un électricien qualifié IRVE pour garantir sécurité et conformité.</p>
                
                <h2>Coûts et aides</h2>
                <p>Comptez entre 500€ et 2000€ selon le type. Le crédit d'impôt de 75% est plafonné à 300€.</p>
            `,
            image: "/images/borne-recharge.jpg",
            category: "Mobilité électrique",
            date: "25 Février 2024",
            author: "Thomas Rousseau",
            readTime: "7 min de lecture"
        },
        {
            id: "6",
            title: "Autoconsommation solaire : maximiser ses économies",
            summary: "Optimisez votre autoconsommation photovoltaïque avec des stratégies intelligentes de gestion de l'énergie solaire produite.",
            content: `
                <h2>Principe de l'autoconsommation</h2>
                <p>L'autoconsommation consiste à consommer directement l'électricité produite par ses panneaux solaires.</p>
                
                <h2>Optimisation de la consommation</h2>
                <p>Programmez vos appareils électroménagers pendant les heures d'ensoleillement pour maximiser l'autoconsommation.</p>
                
                <h2>Stockage d'énergie</h2>
                <p>Les batteries domestiques permettent de stocker l'excédent pour une utilisation nocturne.</p>
            `,
            image: "/images/autoconsommation.jpg",
            category: "Solaire",
            date: "20 Février 2024",
            author: "Claire Moreau",
            readTime: "6 min de lecture"
        }
    ];

    const filteredArticles = activeFilter === "Tous"
        ? articles
        : articles.filter(article => article.category === activeFilter);

    const handleReadMore = (article: Article) => {
        setSelectedArticle(article);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedArticle(null);
    };

    const handleNewsletterSubmit = () => {
        if (email && email.includes('@')) {
            alert(`Inscription réussie pour : ${email}`);
            setEmail("");
        } else {
            alert('Veuillez saisir une adresse email valide');
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <NavBar navigationItems={navigationItems} />

            {/* Hero Section */}
            <div
                className="py-16 text-white relative overflow-hidden"
                style={{ backgroundColor: COLORS.vertEnergie }}
            >
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">Blog & Conseils Énergie</h1>
                    <p className="text-xl opacity-90 max-w-2xl">
                        Découvrez nos articles et conseils d'experts pour optimiser votre consommation énergétique et adopter les solutions durables.
                    </p>
                </div>
                <div className="absolute right-0 top-0 opacity-10">
                    <Sun size={300} className="animate-spin-slow" />
                </div>
            </div>

            {/* Main Content */}
            <div className="py-12">
                <div className="container mx-auto px-4">
                    {/* Filters and Newsletter */}
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
                        <div className="flex flex-wrap gap-3">
                            {filters.map((filter) => (
                                <button
                                    key={filter}
                                    onClick={() => setActiveFilter(filter)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                        activeFilter === filter
                                            ? 'bg-green-600 text-white shadow-md'
                                            : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                                    }`}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>

                        {/* Newsletter Signup */}
                        <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
                            <input
                                type="email"
                                placeholder="Votre email pour nos conseils"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent flex-1 lg:w-64"
                            />
                            <button
                                onClick={handleNewsletterSubmit}
                                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
                            >
                                S'inscrire
                            </button>
                        </div>
                    </div>

                    {/* Articles Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredArticles.map((article, index) => (
                            <div
                                key={article.id}
                                className="animate-fade-in"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <ArticleCard
                                    article={article}
                                    onReadMore={handleReadMore}
                                />
                            </div>
                        ))}
                    </div>

                    {/* No results */}
                    {filteredArticles.length === 0 && (
                        <div className="text-center py-12">
                            <Search size={48} className="mx-auto text-gray-400 mb-4" />
                            <h3 className="text-xl font-semibold text-gray-600 mb-2">Aucun article trouvé</h3>
                            <p className="text-gray-500">Essayez de sélectionner une autre catégorie.</p>
                        </div>
                    )}

                    {/* CTA Section */}
                    <div className="mt-16 text-center">
                        <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-8 max-w-4xl mx-auto text-white">
                            <h2 className="text-3xl font-bold mb-4">
                                Une question sur votre projet énergétique ?
                            </h2>
                            <p className="text-xl mb-8 opacity-90">
                                Nos experts analysent votre situation et vous proposent les meilleures solutions adaptées à vos besoins.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg">
                                    Consultation gratuite
                                </button>
                                <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-all duration-300">
                                    Nos réalisations
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Article Modal */}
            <ArticleModal
                article={selectedArticle}
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

                .line-clamp-3 {
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                .prose h2 {
                    font-size: 1.5rem;
                    font-weight: bold;
                    margin-top: 2rem;
                    margin-bottom: 1rem;
                    color: #1f2937;
                }

                .prose p {
                    margin-bottom: 1rem;
                    line-height: 1.7;
                    color: #4b5563;
                }
            `}</style>
        </div>
    );
}

