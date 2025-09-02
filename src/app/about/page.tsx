"use client"

import { NavBar } from "@/components/layout/NavBar";
import {NavigationItem} from "@/utilis/types";
import React, { useState } from "react";
import {Heart, Lightbulb, Settings, Sun, ChevronDown, ChevronUp} from "lucide-react";
import { COLORS } from "../COLORS";
import {Footer} from "@/components/layout/footer";

// Pas d'interface nécessaire pour cette page
// interface AboutPageProps peut être ajoutée plus tard si nécessaire

const AboutPage: React.FC = () => {
    const [expandedCards, setExpandedCards] = useState<{[key: string]: boolean}>({
        vision: false,
        expertise: false,
        values: false
    });

    const toggleCard = (cardName: string) => {
        setExpandedCards(prev => ({
            ...prev,
            [cardName]: !prev[cardName]
        }));
    };

    const navigationItems: NavigationItem[] = [
        { label: 'Accueil', href: '/' },
        { label: 'À propos', href: '/about' },
        { label: 'Nos Services', href: '/services' },
        { label: 'projets & Réalisations', href: '/projets' },
        { label: 'Blog / Conseils énergie', href: '/tips' },
        { label: 'Contact', href: '/contact' }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
            <NavBar navigationItems={navigationItems} logo="SOLAR ENERGY OPTIONS" />

            <main className="pt-20">
                <div className="container mx-auto px-4 py-12">
                    {/* Main Content Grid */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">

                        {/* Left Content - Company Description */}
                        <div className="space-y-6 animate-in fade-in slide-in-from-left duration-700">
                            <div className="mb-16 animate-in fade-in slide-in-from-top duration-700">
                                <h1 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6">
                                    À PROPOS DE NOUS
                                </h1>
                            </div>


                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Présentation de Solar Energy Options
                            </h2>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                Solar Energy Options est une entreprise camerounaise spécialisée dans l&apos;efficacité énergétique et
                                les solutions solaires durables. Nous répondons aux besoins énergétiques modernes en offrant
                                des services de qualité supérieure, conçus pour réduire l&apos;empreinte écologique tout en
                                améliorant l&apos;accès à l&apos;énergie.
                            </p>
                        </div>

                        {/* Right Content - Solar Panel Illustration */}
                        <div className="relative animate-in fade-in slide-in-from-right duration-700">
                            <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-8 relative overflow-hidden shadow-2xl">
                                {/* Sun Icon */}
                                <div className="absolute top-4 right-4">
                                    <div className="bg-yellow-400 p-3 rounded-full animate-pulse">
                                        <Sun className="w-8 h-8 text-yellow-800" />
                                    </div>
                                </div>

                                {/* Solar Panel Grid */}
                                <div className="grid grid-cols-4 gap-2 mt-8">
                                    {Array.from({ length: 16 }).map((_, i) => (
                                        <div
                                            key={i}
                                            className="aspect-square bg-blue-800/30 rounded border border-blue-300/20 animate-pulse"
                                            style={{ animationDelay: `${i * 100}ms` }}
                                        ></div>
                                    ))}
                                </div>

                                {/* Energy waves animation */}
                                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-yellow-400/10 to-yellow-300/20 pointer-events-none animate-pulse"></div>
                            </div>
                        </div>
                    </div>

                    {/* Values Section */}
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {/* Vision Card */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-in fade-in slide-in-from-bottom duration-700">
                            <div className="text-center mb-6">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
                                    <Lightbulb className="w-8 h-8 text-yellow-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Vision</h3>
                            </div>
                            <div className="text-gray-600 leading-relaxed">
                                <p className="text-center mb-4">
                                    Nous aspirons à devenir un acteur majeur de la transition énergétique en Afrique...
                                </p>
                                {expandedCards.vision && (
                                    <div className="space-y-4 text-left">
                                        <p>
                                            Notre ambition est de contribuer à bâtir un avenir où chaque foyer, chaque entreprise
                                            et chaque collectivité peut s&apos;alimenter en énergie fiable, durable et respectueuse de l&apos;environnement.
                                        </p>
                                        <p>
                                            Nous voulons démocratiser l&apos;accès à l&apos;énergie propre et participer activement au
                                            développement économique et social du continent africain.
                                        </p>
                                    </div>
                                )}
                                <div className="text-center">
                                    <button
                                        onClick={() => toggleCard('vision')}
                                        className="mt-4 inline-flex items-center gap-2 text-yellow-600 hover:text-yellow-700 font-medium transition-colors"
                                    >
                                        {expandedCards.vision ? (
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

                        {/* Expertise Card */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 animate-in fade-in slide-in-from-bottom duration-700" style={{ animationDelay: '150ms' }}>
                            <div className="text-center mb-6">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                                    <Settings className="w-8 h-8 text-green-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Expertise</h3>
                            </div>
                            <div className="text-gray-600 leading-relaxed">
                                <p className="text-center mb-4">
                                    Notre savoir-faire s&apos;étend de l&apos;installation de panneaux solaires aux infrastructures de recharge...
                                </p>
                                {expandedCards.expertise && (
                                    <div className="space-y-4 text-left">
                                        <p>
                                            Notre savoir-faire s&apos;étend de l&apos;installation de panneaux solaires à la mise en place
                                            d&apos;infrastructures de recharge pour véhicules électriques, en passant par des solutions
                                            complètes d&apos;efficacité énergétique.
                                        </p>
                                        <p>
                                            Grâce à l&apos;innovation technologique et à une équipe d&apos;experts passionnés, nous concevons
                                            des solutions personnalisées adaptées aux besoins résidentiels, commerciaux et industriels.
                                        </p>
                                    </div>
                                )}
                                <div className="text-center">
                                    <button
                                        onClick={() => toggleCard('expertise')}
                                        className="mt-4 inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors"
                                    >
                                        {expandedCards.expertise ? (
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

                        {/* Values Card */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 animate-in fade-in slide-in-from-bottom duration-700" style={{ animationDelay: '300ms' }}>
                            <div className="text-center mb-6">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                                    <Heart className="w-8 h-8 text-blue-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Valeurs</h3>
                            </div>
                            <div className="text-gray-600 leading-relaxed">
                                <p className="text-center mb-4">
                                    Nos valeurs fondamentales guident chacune de nos actions et décisions...
                                </p>
                                {expandedCards.values && (
                                    <div className="space-y-4 text-left">
                                        <div className="flex items-start gap-3">
                                            <div className="w-3 h-3 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                                            <p><span className="font-semibold text-gray-800">Durabilité :</span> nous plaçons la protection de l&apos;environnement au cœur de nos actions.</p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-3 h-3 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                                            <p><span className="font-semibold text-gray-800">Innovation :</span> nous misons sur la technologie pour offrir des solutions énergétiques modernes et efficaces.</p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-3 h-3 bg-yellow-500 rounded-full mt-1.5 flex-shrink-0"></div>
                                            <p><span className="font-semibold text-gray-800">Proximité :</span> nous accompagnons nos clients avec un service sur mesure et une écoute attentive.</p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-3 h-3 bg-purple-500 rounded-full mt-1.5 flex-shrink-0"></div>
                                            <p><span className="font-semibold text-gray-800">Impact social :</span> nous croyons que l&apos;accès à l&apos;énergie propre est un levier de développement pour les communautés.</p>
                                        </div>
                                    </div>
                                )}
                                <div className="text-center">
                                    <button
                                        onClick={() => toggleCard('values')}
                                        className="mt-4 inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                                    >
                                        {expandedCards.values ? (
                                            <>
                                                Réduire <ChevronUp className="w-4 h-4" />
                                            </>
                                        ) : (
                                            <>
                                                Voir nos valeurs <ChevronDown className="w-4 h-4" />
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Statistics Section */}
                    <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-3xl p-8 lg:p-12 text-white mb-16 animate-in fade-in slide-in-from-bottom duration-700">
                        <h2 className="text-3xl font-bold text-center mb-8">Nos Réalisations</h2>
                        <div className="grid md:grid-cols-4 gap-8 text-center">
                            <div>
                                <div className="text-4xl font-black mb-2">253+</div>
                                <div className="text-lg opacity-90">Installations</div>
                            </div>
                            <div>
                                <div className="text-4xl font-black mb-2">53</div>
                                <div className="text-lg opacity-90">Employés formés</div>
                            </div>
                            <div>
                                <div className="text-4xl font-black mb-2">93.8%</div>
                                <div className="text-lg opacity-90">Satisfaction Client</div>
                            </div>
                            <div>
                                <div className="text-4xl font-black mb-2">5+</div>
                                <div className="text-lg opacity-90">Années d&apos;Expérience</div>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="text-center animate-in fade-in slide-in-from-bottom duration-700">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Prêt à passer à l&apos;énergie solaire ?
                        </h2>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            Contactez-nous dès aujourd&apos;hui pour une consultation gratuite
                            et découvrez comment nous pouvons vous aider à réduire vos coûts énergétiques.
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
                            Demander un Devis
                        </button>
                    </div>
                </div>
            </main>
            <Footer/>

            <style jsx>{`
                .animate-in {
                    animation-fill-mode: both;
                }

                .fade-in {
                    animation: fadeIn 0.6s ease-out;
                }

                .slide-in-from-left {
                    animation: slideInFromLeft 0.8s ease-out;
                }

                .slide-in-from-right {
                    animation: slideInFromRight 0.8s ease-out;
                }

                .slide-in-from-top {
                    animation: slideInFromTop 0.8s ease-out;
                }

                .slide-in-from-bottom {
                    animation: slideInFromBottom 0.8s ease-out;
                }

                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @keyframes slideInFromLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes slideInFromRight {
                    from {
                        opacity: 0;
                        transform: translateX(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
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
};

export default AboutPage;