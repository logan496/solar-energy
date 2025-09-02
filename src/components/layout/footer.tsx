import { Facebook, Linkedin } from "lucide-react";
import React from "react";
import {TikTok_Sans} from "next/dist/compiled/@next/font/dist/google";

export const Footer = () => {
    return ( // ← Il manquait le "return" ici
        <footer className="bg-gray-50 border-t border-gray-200 py-8">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                    <div className="text-center md:text-left">
                        <p className="text-gray-600 text-sm">Solar Energy Options</p>
                        <p className="text-gray-600 text-sm">Solutions énergétiques durables</p>
                    </div>

                    <div className="text-center">
                        <p className="text-gray-600 text-sm">Téléphone: + 237 683 16 61 22</p>
                        <p className="text-gray-600 text-sm">Email: infos@solarenergyoption.com</p>
                    </div>

                    <div className="flex justify-center md:justify-end space-x-4">
                        <a href="https://www.facebook.com/share/1DuYCTkcoi/?mibextid=wwXIfr" className="p-2 text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:scale-110 transform">
                            <Facebook className="w-5 h-5" />
                        </a>

                        <a href="https://www.tiktok.com/@solar_energy_option?_t=ZM-8zFxnUlDMoy&_r=1" className="p-2 text-gray-600 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform">
                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M544.5 273.9C500.5 274 457.5 260.3 421.7 234.7L421.7 413.4C421.7 446.5 411.6 478.8 392.7 506C373.8 533.2 347.1 554 316.1 565.6C285.1 577.2 251.3 579.1 219.2 570.9C187.1 562.7 158.3 545 136.5 520.1C114.7 495.2 101.2 464.1 97.5 431.2C93.8 398.3 100.4 365.1 116.1 336C131.8 306.9 156.1 283.3 185.7 268.3C215.3 253.3 248.6 247.8 281.4 252.3L281.4 342.2C266.4 337.5 250.3 337.6 235.4 342.6C220.5 347.6 207.5 357.2 198.4 369.9C189.3 382.6 184.4 398 184.5 413.8C184.6 429.6 189.7 444.8 199 457.5C208.3 470.2 221.4 479.6 236.4 484.4C251.4 489.2 267.5 489.2 282.4 484.3C297.3 479.4 310.4 469.9 319.6 457.2C328.8 444.5 333.8 429.1 333.8 413.4L333.8 64L421.8 64C421.7 71.4 422.4 78.9 423.7 86.2C426.8 102.5 433.1 118.1 442.4 131.9C451.7 145.7 463.7 157.5 477.6 166.5C497.5 179.6 520.8 186.6 544.6 186.6L544.6 274z"/></svg>
                        </a>

                        <a href=" https://www.linkedin.com/company/energy-solar-option/" className="p-2 text-gray-600 hover:text-blue-700 transition-colors duration-300 hover:scale-110 transform">
                            <Linkedin className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};