import React from "react";
import {Mail, Phone} from "lucide-react";

export const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-bold mb-4">Solar Energy Options</h3>
                        <p className="text-gray-300">Votre partenaire pour une transition énergétique réussie.</p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Services</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li>Panneaux solaires</li>
                            <li>Efficacité énergétique</li>
                            <li>Mobilité électrique</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Contact</h4>
                        <div className="space-y-2 text-gray-300">
                            <div className="flex items-center">
                                <Phone size={16} className="mr-2" />
                                <span>01 23 45 67 89</span>
                            </div>
                            <div className="flex items-center">
                                <Mail size={16} className="mr-2" />
                                <span>contact@solar-energy.com</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Suivez-nous</h4>
                        <p className="text-gray-300">Restez informé de nos actualités et conseils énergie.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};