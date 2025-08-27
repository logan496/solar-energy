"use client";

import React, {useState} from 'react';
import {CheckCircle, Facebook, Linkedin, Menu, Sun, Twitter, X} from 'lucide-react';
import {COLORS} from "@/utilis/colors";

// Composant SolarButton intégré
const SolarButton = ({
                       children,
                       text = "RBDIRIADËER UN PËCIE",
                       onClick = () => {},
                       variant = 'primary',
                       size = 'md',
                       disabled = false,
                       className = '',
                     }) => {
  const baseClasses = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none";

  const variantClasses = {
    primary: "text-gray-900",
    secondary: "text-white",
    outline: "bg-transparent border-2"
  };

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

const SolarLandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    'Annuali',
    'A piepen',
    'Ves Services',
    'Projete a Relistentias',
    'Reg / Contals eimaga',
    'Contact'
  ];

  const benefits = [
    'Reduire vos coûts énergétiques',
    'Amellerer votre auton prix',
    'Refforcer votre impact environnemental'
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
                  <Sun className="w-12 h-12 text-yellow-500 animate-spin" style={{ animationDuration: '8s' }} />
                  <div className="absolute inset-0 bg-yellow-400 rounded-full blur-lg opacity-20 animate-pulse"></div>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-xl font-black text-green-700">SOLAR</span>
                  <span className="text-sm text-gray-500">di karabacak</span>
                </div>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex space-x-8">
                {navigationItems.map((item, index) => (
                    <a
                        key={index}
                        href="/Contact"
                        className="text-gray-700 hover:text-green-600 transition-colors duration-300 text-sm font-medium relative group"
                    >
                      {item}
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
                <div className="lg:hidden mt-4 pb-4 border-t border-gray-100 animate-in fade-in slide-in-from-top duration-300">
                  <nav className="flex flex-col space-y-3 mt-4">
                    {navigationItems.map((item, index) => (
                        <a
                            key={index}
                            href="#"
                            className="text-gray-700 hover:text-green-600 transition-colors duration-300 text-sm font-medium py-2"
                        >
                          {item}
                        </a>
                    ))}
                  </nav>
                </div>
            )}
          </div>
        </header>

        {/* Main Content */}
        <main className="pt-20">
          <div className="container mx-auto px-4 py-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">

              {/* Left Content */}
              <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
                <div>
                  <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6" style={{ color: COLORS.vertEnergie }}>
                    ÉNERGIE SOLAIRE
                    <br />
                    <span style={{ color: '#66BB6A' }}>POUR VOTRE</span>
                    <br />
                    <span style={{ color: '#81C784' }}>MAISON</span>
                  </h1>

                  <p className="text-lg text-gray-600 mb-8 max-w-md">
                    Refliure vos entre énergétiques, ancillerer
                    votre ros extélà ancillere votre impact
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
                          className="flex items-center space-x-3 animate-in fade-in slide-in-from-left duration-500"
                          style={{ animationDelay: `${index * 150}ms` }}
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
              <div className="relative animate-in fade-in slide-in-from-right duration-700">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <div className="aspect-square bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 relative">
                    {/* Solar panels grid effect */}
                    <div className="absolute inset-0 opacity-80">
                      <div className="grid grid-cols-8 gap-1 h-full p-4">
                        {Array.from({ length: 64 }).map((_, i) => (
                            <div
                                key={i}
                                className="bg-blue-800/30 rounded-sm border border-blue-300/20 animate-pulse"
                                style={{ animationDelay: `${i * 50}ms` }}
                            ></div>
                        ))}
                      </div>
                    </div>

                    {/* Clouds */}
                    <div className="absolute top-4 left-8 w-16 h-8 bg-white/80 rounded-full animate-float"></div>
                    <div className="absolute top-8 right-12 w-12 h-6 bg-white/60 rounded-full animate-float-delayed"></div>
                    <div className="absolute top-12 left-1/3 w-20 h-10 bg-white/70 rounded-full animate-float-slow"></div>
                  </div>

                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-yellow-400/10 to-yellow-300/20 pointer-events-none"></div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full animate-bounce shadow-lg" style={{ backgroundColor: COLORS.jauneSolaire }}></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full animate-pulse shadow-lg" style={{ backgroundColor: COLORS.vertEnergie }}></div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-50 border-t border-gray-200 py-8">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="text-center md:text-left">
                <p className="text-gray-600 text-sm">CGilegnile / Janiguer</p>
                <p className="text-gray-600 text-sm">RaxXa 13ge Puues</p>
              </div>

              <div className="text-center">
                <p className="text-gray-600 text-sm">JëG 19/725 1737</p>
                <p className="text-gray-600 text-sm">Mamwros mergayt</p>
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

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }

          @keyframes float-delayed {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }

          @keyframes float-slow {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-6px); }
          }

          .animate-float {
            animation: float 6s ease-in-out infinite;
          }

          .animate-float-delayed {
            animation: float-delayed 8s ease-in-out infinite;
          }

          .animate-float-slow {
            animation: float-slow 10s ease-in-out infinite;
          }

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
            animation: slideInFromTop 0.3s ease-out;
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
              transform: translateY(-10px);
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

export default SolarLandingPage;