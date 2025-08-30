"use client";

import React from "react";
import { NavBar } from "@/components/layout/NavBar";
import { NavigationItem } from "@/utilis/types";

const BlogPage: React.FC = () => {
    const navigationItems: NavigationItem[] = [
        { label: 'Accueil', href: '/' },
        { label: 'À propos', href: '/about' },
        { label: 'Nos Services', href: '/services' },
        { label: 'Blog', href: '/Blog' },
        { label: 'Contact', href: '/contact' }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
            <NavBar navigationItems={navigationItems} logo="Solar Energy" />

            <main className="pt-20">
                <div className="container mx-auto px-4 py-12">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6">
                            Blog & Actualités
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Découvrez les dernières actualités et conseils sur l&apos;énergie solaire
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Article placeholder */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="h-48 bg-gradient-to-r from-green-400 to-blue-500"></div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-3">Article à venir</h3>
                                <p className="text-gray-600">
                                    Contenu du blog en cours de développement...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default BlogPage;