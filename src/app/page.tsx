"use client";

import React, { useState, useEffect, ReactNode } from 'react';
import { CheckCircle, Facebook, Linkedin, Menu, Sun, Twitter, X } from 'lucide-react';

// Types pour NavigationItem
interface NavigationItem {
  label: string;
  href: string;
}

// Define COLORS depuis les spécifications
const COLORS = {
  jauneSolaire: '#FFC107',
  vertEnergie: '#4CAF50',
  blancPur: '#FFFFFF'
};

// Define proper TypeScript interfaces
interface SolarButtonProps {
  children?: ReactNode;
  text?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
}

// Composant SolarButton amélioré
const SolarButton: React.FC<SolarButtonProps> = ({
                                                   children,
                                                   text = "DEMANDEZ UN DEVIS DÈS AUJOURD'HUI",
                                                   onClick = () => {},
                                                   variant = 'primary',
                                                   size = 'md',
                                                   disabled = false,
                                                   className = '',
                                                 }) => {
  const baseClasses = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none";

  const variantClasses: Record<string, string> = {
    primary: "text-gray-900",
    secondary: "text-white",
    outline: "bg-transparent border-2"
  };

  const sizeClasses: Record<string, string> = {
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

const SolarLandingPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // Ajouter les styles d'animation CSS
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

  // Hook pour les animations au scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('opacity-100', 'translate-y-0', 'translate-x-0');
              entry.target.classList.remove('opacity-0', 'translate-y-12', '-translate-x-12', 'translate-x-12');
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const navigationItems: NavigationItem[] = [
    { label: 'Accueil', href: '#' },
    { label: 'À propos', href: '/about' },
    { label: 'Nos Services', href: '/services' },
    { label: 'projets et réalisations', href: '/projets' },
    { label: 'Réglementations et contacts', href: '#regulations' },
    { label: 'Contact', href: '/contact' }
  ];

  const benefits: string[] = [
    'Réduisez significativement vos factures d\'électricité',
    'Gagnez en autonomie énergétique (partielle ou totale)',
    'Valorisez votre patrimoine immobilier',
    'Agissez pour la protection de l\'environnement',
    'Bénéficiez d\'un retour sur investissement attractif'
  ];

  return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
        {/* Header */}
        <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <Sun className="w-12 h-12 text-yellow-500 animate-spin-slow" />
                  <div className="absolute inset-0 bg-yellow-400 rounded-full blur-lg opacity-20" style={{
                    animation: 'pulse 2s ease-in-out infinite'
                  }}></div>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src="/images/logo-solar.png"
                    alt="Logo"
                    className="h-16 w-18"
                  />
                </div>
              </div>

              {/* Desktop Navigation */}
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

              {/* Mobile menu button */}
              <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="lg:hidden mt-4 pb-4 border-t border-gray-100">
                  <nav className="flex flex-col space-y-3 mt-4">
                    {navigationItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            className="text-gray-700 hover:text-green-600 transition-colors duration-300 text-sm font-medium py-2"
                        >
                          {item.label}
                        </a>
                    ))}
                  </nav>
                </div>
            )}
          </div>
        </header>

        {/* Main Content */}
        <main className="pt-20">
          {/* Hero Section */}
          <div className="container mx-auto px-4 py-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">

              {/* Left Content */}
              <div className="space-y-8">
                <div>
                  <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6" style={{ color: COLORS.vertEnergie }}>
                    ÉNERGIE SOLAIRE
                    <br />
                    <span style={{ color: '#66BB6A' }}>POUR VOTRE</span>
                    <br />
                    <span style={{ color: '#81C784' }}>MAISON</span>
                  </h1>

                  <p className="text-lg text-gray-600 mb-8 max-w-md">
                    Réduisez votre empreinte énergétique, améliorez
                    votre confort et renforcez votre impact environnemental
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <SolarButton
                        variant="primary"
                        size="md"
                        onClick={() => console.log('Devis clicked')}
                    />

                    <SolarButton
                        variant="outline"
                        size="md"
                        text="En savoir plus"
                        onClick={() => console.log('Learn more clicked')}
                    />
                  </div>
                </div>

                {/* Benefits List */}
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                      <div
                          key={index}
                          className="flex items-center space-x-3"
                      >
                        <div className="flex-shrink-0">
                          <CheckCircle className="w-6 h-6" style={{ color: COLORS.vertEnergie }} />
                        </div>
                        <span className="text-gray-800 font-medium text-lg">
                      {benefit}
                    </span>
                      </div>
                  ))}
                </div>
              </div>

              {/* Right Content - Solar Panel Image */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <div className="aspect-[4/3] bg-gradient-to-br from-sky-200 via-sky-300 to-sky-400 relative">
                    {/* Image de panneau solaire réelle */}
                    <img
                        src="/images/panneaux_photovoltaiques.jpg"
                        alt="Panneaux solaires sur toit"
                        className="w-full h-full object-cover"
                    />

                    {/* Fallback - Panneau solaire stylisé si pas d'image */}
                    <div className="w-full h-full hidden items-center justify-center p-6 bg-gradient-to-br from-sky-200 to-blue-400">
                      {/* Panneau solaire avec perspective réaliste */}
                      <div
                          className="w-4/5 h-4/5 bg-slate-800 rounded-lg shadow-2xl relative overflow-hidden"
                          style={{
                            transform: 'perspective(400px) rotateX(15deg) rotateY(-10deg)',
                            background: 'linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)',
                          }}
                      >
                        {/* Grille de cellules photovoltaïques 6x4 */}
                        <div className="absolute inset-1 grid grid-cols-6 grid-rows-4 gap-0.5">
                          {[...Array(24)].map((_, i) => (
                              <div
                                  key={i}
                                  className="bg-slate-700 relative border border-slate-600"
                                  style={{
                                    background: `
                                  radial-gradient(circle at 25% 25%, #475569 0%, #334155 40%, #1e293b 100%),
                                  linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)
                                `,
                                    boxShadow: 'inset 1px 1px 3px rgba(0,0,0,0.3)'
                                  }}
                              >
                                {/* Lignes conductrices sur les cellules */}
                                <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-500 opacity-30"></div>
                                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-500 opacity-30"></div>
                              </div>
                          ))}
                        </div>

                        {/* Cadre en aluminium */}
                        <div
                            className="absolute inset-0 border-4 rounded-lg"
                            style={{
                              borderColor: '#9ca3af',
                              background: 'linear-gradient(45deg, #d1d5db 0%, #9ca3af 50%, #6b7280 100%)',
                              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                              WebkitMaskComposite: 'xor',
                              maskComposite: 'exclude'
                            }}
                        ></div>

                        {/* Reflet principal */}
                        <div
                            className="absolute top-2 left-2 w-1/3 h-1/2 bg-gradient-to-br from-white/20 via-white/10 to-transparent rounded-tl-lg pointer-events-none"
                            style={{ filter: 'blur(1px)' }}
                        ></div>
                      </div>
                    </div>

                    {/* Overlay dégradé pour l'effet lumière solaire */}
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-yellow-400/5 to-yellow-300/10 pointer-events-none"></div>

                    {/* Rayons de soleil animés */}
                    <div className="absolute top-0 right-0 w-32 h-32 pointer-events-none">
                      {[...Array(6)].map((_, i) => (
                          <div
                              key={i}
                              className="absolute top-6 right-6 w-0.5 h-12 bg-gradient-to-b from-yellow-300/50 to-transparent origin-bottom"
                              style={{
                                transform: `rotate(${i * 30}deg)`,
                                animation: `pulse ${2.5 + i * 0.2}s ease-in-out infinite alternate`
                              }}
                          ></div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Éléments décoratifs flottants */}
                <div
                    className="absolute -top-4 -right-4 w-8 h-8 rounded-full shadow-lg animate-bounce"
                    style={{ backgroundColor: COLORS.jauneSolaire }}
                ></div>
                <div
                    className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full shadow-lg"
                    style={{
                      backgroundColor: COLORS.vertEnergie,
                      animation: 'pulse 2s infinite'
                    }}
                ></div>
              </div>
            </div>
          </div>

          {/* Pourquoi Choisir Solar Energy Options Section */}
          <section className="py-20 bg-gradient-to-b from-white to-blue-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-12 transition-all duration-700 ease-out">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: COLORS.vertEnergie }}>
                  Pourquoi Choisir Solar Energy Options ?
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Découvrez les raisons qui font de nous votre partenaire idéal pour la transition énergétique
                </p>
              </div>

              {/* Section 1 - Expertise */}
              <div className="mb-24">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="animate-on-scroll opacity-0 -translate-x-12 transition-all duration-700 ease-out">
                    <div className="relative overflow-hidden rounded-2xl shadow-xl group hover:scale-105 hover:shadow-2xl transition-all duration-500">
                      <div className="aspect-video bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                        <div className="text-center text-white p-8">
                          <h4 className="text-2xl font-bold mb-4">Équipe Experte</h4>
                          <p className="text-lg">Techniciens certifiés IRVE et ingénieurs spécialisés</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6 animate-on-scroll opacity-0 translate-x-12 transition-all duration-700 ease-out">
                    <h3 className="text-3xl font-bold text-green-700">Expertise Reconnue</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Notre équipe est composée de techniciens expérimentés et d'ingénieurs spécialisés dans les énergies renouvelables.
                      Certifiés IRVE pour l'installation de bornes de recharge électrique, nous garantissons des services professionnels et fiables.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                        <span className="text-gray-800 font-medium">Techniciens certifiés IRVE</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                        <span className="text-gray-800 font-medium">Ingénieurs spécialisés</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2 - Qualité et Fiabilité */}
              <div className="mb-24">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="order-2 lg:order-1 space-y-6 animate-on-scroll opacity-0 -translate-x-12 transition-all duration-700 ease-out">
                    <h3 className="text-3xl font-bold text-green-700">Qualité et Fiabilité</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Nous utilisons uniquement des équipements de marques reconnues et offrons des garanties étendues sur tous nos produits et services.
                      Vous bénéficiez ainsi d'installations durables et performantes pour une tranquillité d'esprit maximale.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                        <span className="text-gray-800 font-medium">Équipements de marques reconnues</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                        <span className="text-gray-800 font-medium">Garanties étendues</span>
                      </div>
                    </div>
                  </div>
                  <div className="order-1 lg:order-2 animate-on-scroll opacity-0 translate-x-12 transition-all duration-700 ease-out">
                    <div className="relative overflow-hidden rounded-2xl shadow-xl group hover:scale-105 hover:shadow-2xl transition-all duration-500">
                      <div className="aspect-video bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
                        <div className="text-center text-white p-8">
                          <h4 className="text-2xl font-bold mb-4">Équipements Premium</h4>
                          <p className="text-lg">Matériel de qualité supérieure avec garanties étendues</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 3 - Approche Personnalisée */}
              <div className="mb-24">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="animate-on-scroll opacity-0 -translate-x-12 transition-all duration-700 ease-out">
                    <div className="relative overflow-hidden rounded-2xl shadow-xl group hover:scale-105 hover:shadow-2xl transition-all duration-500">
                      <div className="aspect-video bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                        <div className="text-center text-white p-8">
                          <h4 className="text-2xl font-bold mb-4">Solutions Sur Mesure</h4>
                          <p className="text-lg">Analyse personnalisée et adaptation à vos besoins</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6 animate-on-scroll opacity-0 translate-x-12 transition-all duration-700 ease-out">
                    <h3 className="text-3xl font-bold text-green-700">Approche Personnalisée</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Chaque projet est unique. Nous analysons vos besoins pour vous proposer la solution la mieux adaptée à votre situation et votre budget,
                      qu'il s'agisse d'une installation résidentielle, commerciale ou institutionnelle.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                        <span className="text-gray-800 font-medium">Analyse personnalisée des besoins</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                        <span className="text-gray-800 font-medium">Solutions adaptées au budget</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 4 - Engagement Environnemental */}
              <div className="mb-24">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="order-2 lg:order-1 space-y-6 animate-on-scroll opacity-0 -translate-x-12 transition-all duration-700 ease-out">
                    <h3 className="text-3xl font-bold text-green-700">Engagement Environnemental</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      En choisissant Solar Energy Options, vous participez activement à la transition énergétique
                      et à la lutte contre le changement climatique. Nos solutions réduisent les émissions de CO2
                      et préservent l'environnement pour les générations futures.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                        <span className="text-gray-800 font-medium">Réduction des émissions CO2</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                        <span className="text-gray-800 font-medium">Préservation de l'environnement</span>
                      </div>
                    </div>
                  </div>
                  <div className="order-1 lg:order-2 animate-on-scroll opacity-0 translate-x-12 transition-all duration-700 ease-out">
                    <div className="relative overflow-hidden rounded-2xl shadow-xl group hover:scale-105 hover:shadow-2xl transition-all duration-500">
                      <div className="aspect-video bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
                        <div className="text-center text-white p-8">
                          <h4 className="text-2xl font-bold mb-4">Éco-Responsable</h4>
                          <p className="text-lg">Pour un avenir durable et respectueux de l'environnement</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 5 - Service Client Excellence */}
              <div className="mb-24">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="animate-on-scroll opacity-0 -translate-x-12 transition-all duration-700 ease-out">
                    <div className="relative overflow-hidden rounded-2xl shadow-xl group hover:scale-105 hover:shadow-2xl transition-all duration-500">
                      <div className="aspect-video bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                        <div className="text-center text-white p-8">
                          <h4 className="text-2xl font-bold mb-4">Service Excellence</h4>
                          <p className="text-lg">Accompagnement personnalisé et support continu</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6 animate-on-scroll opacity-0 translate-x-12 transition-all duration-700 ease-out">
                    <h3 className="text-3xl font-bold text-green-700">Service Client Excellence</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Notre service client répond à toutes vos questions et vous accompagne tout au long du projet.
                      Nous privilégions transparence et communication pour garantir votre satisfaction.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                        <span className="text-gray-800 font-medium">Accompagnement personnalisé</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                        <span className="text-gray-800 font-medium">Transparence et communication</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Nos Engagements */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-8 lg:p-12 mb-16 animate-on-scroll opacity-0 translate-y-12 transition-all duration-700 ease-out shadow-lg">
                <h3 className="text-3xl font-bold text-center mb-8 text-green-700">Nos Engagements</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    'Devis gratuit et sans engagement',
                    'Installation par des techniciens certifiés',
                    'Garantie sur tous nos équipements',
                    'Service après-vente réactif',
                    'Accompagnement personnalisé'
                  ].map((engagement, index) => (
                      <div key={index} className="flex items-center space-x-3 bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                        <span className="text-gray-800 font-medium">{engagement}</span>
                      </div>
                  ))}
                </div>
              </div>

              {/* CTA Final */}
              <div className="text-center animate-on-scroll opacity-0 translate-y-12 transition-all duration-700 ease-out">
                <div className="max-w-4xl mx-auto">
                  <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-green-700">
                    Rejoignez dès aujourd'hui la révolution énergétique !
                  </h3>
                  <p className="text-xl text-gray-600 mb-8">
                    Contribuez à un avenir plus durable pour l'Afrique avec Solar Energy Options
                  </p>
                  <div className="inline-block">
                    <SolarButton
                        variant="primary"
                        size="lg"
                        text="Contactez nos experts maintenant !"
                        onClick={() => console.log('contact experts clicked')}
                        className="animate-pulse hover:animate-none hover:scale-105 shadow-lg shadow-yellow-400/50"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gray-50 border-t border-gray-200 py-8">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="text-center md:text-left">
                <p className="text-gray-600 text-sm">Solar Energy Options</p>
                <p className="text-gray-600 text-sm">Solutions énergétiques durables</p>
              </div>

              <div className="text-center">
                <p className="text-gray-600 text-sm">Téléphone: +237 XX XX XX XX</p>
                <p className="text-gray-600 text-sm">Email: contact@solar-energy.cm</p>
              </div>

              <div className="flex justify-center md:justify-end space-x-4">
                <a href="#" className="p-2 text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:scale-110 transform">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 text-gray-600 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 text-gray-600 hover:text-blue-700 transition-colors duration-300 hover:scale-110 transform">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
  );
};

export default SolarLandingPage;