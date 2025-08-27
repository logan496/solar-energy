"use client";

import {NavBar} from "@/components/layout/NavBar";

interface Props {
    contact?: string;
}

const ContactPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
            <NavBar/>
        </div>
    )
}

export default ContactPage;