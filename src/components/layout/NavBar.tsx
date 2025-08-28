"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Menu, X } from "lucide-react";
import {COLORS} from "@/utilis/colors";
import {NavigationItem} from "@/utilis/types";


// Interface pour les props de NavBar
interface NavBarProps {
    navigationItems: NavigationItem[];
    logo?: string;
}

export const NavBar: React.FC<NavBarProps> = ({
                                                  navigationItems,
                                                  logo = "Solar Energy"
                                              }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="fixed top-0 w-full z-50" style={{backgroundColor: COLORS.vertEnergie}}>
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <span className="text-3xl font-black text-white">{logo}</span>

                    <nav className="hidden lg:flex space-x-8">
                        {navigationItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className="text-white hover:text-yellow-400 transition-colors duration-300 text-sm font-medium relative group"
                            >
                                {item.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
                            </a>
                        ))}
                    </nav>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2 rounded-md hover:bg-gray-700 transition-colors"
                    >
                        {isMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="lg:hidden mt-4 pb-4 border-t border-gray-100 animate-in fade-in slide-in-from-top duration-300">
                        <nav className="flex flex-col space-y-3 mt-4">
                            {navigationItems.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    className="text-white hover:text-yellow-400 transition-colors duration-300 text-sm font-medium py-2"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                )}
            </div>

            <style jsx>{`
        .animate-in {
          animation-fill-mode: both;
        }

        .fade-in {
          animation: fadeIn 0.3s ease-out;
        }

        .slide-in-from-top {
          animation: slideInFromTop 0.3s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
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