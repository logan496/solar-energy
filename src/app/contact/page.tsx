"use client";

import React, { useState } from "react";
import { NavBar } from "@/components/layout/NavBar";
import { Phone, Mail, MapPin } from "lucide-react";
import {NavigationItem} from "@/utilis/types";
import {Footer} from "@/components/layout/footer";

interface ContactPageProps {
    contact?: string;
}

const ContactPage: React.FC<ContactPageProps> = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
    });

    const navigationItems: NavigationItem[] = [
        { label: 'Accueil', href: '/' },
        { label: 'À propos', href: '/about' },
        { label: 'Nos Services', href: '/services' },
        { label: 'projets & Réalisations', href: '/projets' },
        { label: 'Blog / Conseils énergie', href: '/tips' },
        { label: 'Contact', href: '/contact' }
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Ici vous pouvez ajouter la logique d'envoi du formulaire
        console.log('Form submitted:', formData);

        // Simuler un envoi réussi
        alert('Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.');

        setFormData({
            name: '',
            phone: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white">
            <NavBar navigationItems={navigationItems} logo="Solar Energy" />

            <main className="pt-20">
                <div className="container mx-auto px-4 py-12">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                        <div className="grid lg:grid-cols-2 gap-0">
                            {/* Formulaire de contact */}
                            <div className="p-8 lg:p-12">
                                <h1 className="text-4xl lg:text-5xl font-black text-gray-900 mb-2">
                                    Contactez-nous
                                </h1>
                                <p className="text-gray-600 mb-8">
                                    Nous sommes là pour répondre à toutes vos questions sur l&apos;énergie solaire
                                </p>

                                <div className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                            Nom complet *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-3 focus:ring-green-500 focus:border-transparent bg-gray-50 transition-colors hover:bg-white"
                                            placeholder="Votre nom complet"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                            Numéro de telephone *
                                        </label>
                                        <input
                                            type="number"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-3 focus:ring-green-500 focus:border-transparent bg-gray-50 transition-colors hover:bg-white"
                                            placeholder="Votre numéro de téléphonne"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-3 focus:ring-green-500 focus:border-transparent bg-gray-50 transition-colors hover:bg-white"
                                            placeholder="votre.email@exemple.com"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                            Sujet *
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-3 focus:ring-green-500 focus:border-transparent bg-gray-50 transition-colors hover:bg-white"
                                            placeholder="Sujet de votre message"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={5}
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-gray-50 transition-colors resize-none hover:bg-white"
                                            placeholder="Décrivez votre projet ou posez votre question..."
                                            required
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        onClick={handleSubmit}
                                        className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 text-lg transform hover:scale-105 hover:shadow-lg"
                                    >
                                        Envoyer le message
                                    </button>
                                </div>
                            </div>

                            {/* Informations de contact */}
                            <div className="bg-gray-50 p-8 lg:p-12">
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                    Nos informations
                                </h2>
                                <p className="text-gray-600 mb-8">
                                    N&apos;hésitez pas à nous contacter par téléphone ou par email
                                </p>

                                <div className="space-y-6 mb-8">
                                    <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                        <div className="bg-green-500 p-3 rounded-full">
                                            <Phone className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Téléphone</p>
                                            <span className="text-gray-800 font-medium">
                                                 + 237 683 16 61 22
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                        <div className="bg-blue-500 p-3 rounded-full">
                                            <Mail className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Email</p>
                                            <span className="text-gray-800 font-medium">
                                                 infos@solarenergyoption.com
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                        <div className="bg-yellow-500 p-3 rounded-full">
                                            <MapPin className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Adresse</p>
                                            <span className="text-gray-800 font-medium">
                                                PK13, Douala, Cameroun
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Heures d'ouverture */}
                                <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
                                    <h3 className="font-semibold text-gray-900 mb-3">Heures d&apos;ouverture</h3>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Lundi - Vendredi</span>
                                            <span className="font-medium">8h00 - 17h30</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Samedi</span>
                                            <span className="font-medium">8h00 - 13h00</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Dimanche</span>
                                            <span className="font-medium text-red-500">Fermé</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Carte Google Maps simulée */}
                                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400 opacity-50"></div>

                                    {/* Simuler une carte */}
                                    <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
                                        <div className="bg-red-500 p-3 rounded-full shadow-lg mb-2 animate-bounce">
                                            <MapPin className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="bg-white px-4 py-2 rounded-lg shadow-lg">
                                            <span className="text-sm font-semibold text-gray-800">Solar Energy</span>
                                            <p className="text-xs text-gray-600">Douala, Cameroun</p>
                                        </div>
                                    </div>

                                    {/* Éléments décoratifs pour simuler une vraie carte */}
                                    <div className="absolute top-4 right-4 bg-white p-2 rounded shadow text-xs text-gray-600">
                                        Zoom: 15
                                    </div>

                                    <div className="absolute bottom-2 left-2 flex items-center space-x-1">
                                        <span className="text-xs font-bold text-blue-600">Maps</span>
                                    </div>

                                    {/* Routes simulées */}
                                    <div className="absolute top-1/4 left-1/4 w-20 h-1 bg-yellow-400 rounded transform rotate-45 opacity-70"></div>
                                    <div className="absolute bottom-1/3 right-1/4 w-16 h-1 bg-yellow-400 rounded transform -rotate-12 opacity-70"></div>
                                    <div className="absolute top-1/2 left-1/3 w-12 h-1 bg-yellow-400 rounded transform rotate-90 opacity-70"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default ContactPage;