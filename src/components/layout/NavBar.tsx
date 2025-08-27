"use client";

import {useState} from "react";

export const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="fixed top-0 w-full bg-green-900 z-50">
            <div className="container mx-auto px4 py-4">
                <div className="flex justify-between items-center">
                    <span className="text-3xl font-black text-white">Solar Energy</span>
                </div>
            </div>
        </div>
    )

}