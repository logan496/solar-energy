"use client"

import { useState, useEffect } from "react"
import { CheckCircle, Menu, Sun, X } from "lucide-react"
import { SolarButton, COLORS } from "@/components/ui/SolarButton"
import { Footer } from "@/components/layout/footer"

const COLOR_VARIANTS = {
  vertEnergie: {
    "800": "#2E7D32",
  },
}

const SolarLandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const style = document.createElement("style")
    style.textContent = `
      @keyframes spin-slow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      .animate-spin-slow {
        animation: spin-slow 8s linear infinite;
      }
    `
    document.head.appendChild(style)
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("opacity-100", "translate-y-0", "translate-x-0")
              entry.target.classList.remove("opacity-0", "translate-y-12", "-translate-x-12", "translate-x-12")
            } else {
              entry.target.classList.remove("opacity-100", "translate-y-0", "translate-x-0")
              entry.target.classList.add("opacity-0", "translate-y-12", "-translate-x-12", "translate-x-12")
            }
          })
        },
        { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    )

    const elements = document.querySelectorAll(".animate-on-scroll")
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const navigationItems = [
    { label: "Accueil", href: "/" },
    { label: "À propos", href: "/about" },
    { label: "Nos Services", href: "/services" },
    { label: "Projets & Réalisations", href: "/projets" },
    { label: "Blog / Conseils énergie", href: "/tips" },
    { label: "Contact", href: "/contact" },
  ]

  const benefits = [
    "Réduisez significativement vos factures d&apos;électricité",
    "Gagnez en autonomie énergétique (partielle ou totale)",
    "Valorisez votre patrimoine immobilier",
    "Agissez pour la protection de l&apos;environnement",
    "Bénéficiez d&apos;un retour sur investissement attractif",
  ]

  return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
        {/* Header */}
        <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <Sun className="w-12 h-12 text-yellow-500 animate-spin-slow" />
                  <div
                      className="absolute inset-0 bg-yellow-400 rounded-full blur-lg opacity-20"
                      style={{
                        animation: "pulse 2s ease-in-out infinite",
                      }}
                  ></div>
                </div>
                <div className="flex flex-col items-center">
                  <img src="/images/logo-solar.png" alt="Logo Solar Energy Options" className="h-16 w-18" />
                </div>
              </div>

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

              <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

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
              <div className="space-y-8">
                <div>
                  <h1
                      className="text-4xl lg:text-6xl font-bold leading-tight mb-6"
                      style={{ color: COLOR_VARIANTS.vertEnergie["800"] }}
                  >
                    ÉNERGIE SOLAIRE
                    <br />
                    <span style={{ color: COLOR_VARIANTS.vertEnergie["800"] }}>POUR VOUS</span>
                  </h1>

                  <p className="text-lg text-gray-600 mb-8 max-w-md">
                    Réduisez votre empreinte énergétique, améliorez votre confort et renforcez votre impact
                    environnemental
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <SolarButton variant="primary" size="md" onClick={() => (window.location.href = "/contact")}>
                      DEMANDEZ UN DEVIS DÈS AUJOURD&apos;HUI
                    </SolarButton>
                    <SolarButton variant="outline" size="md" onClick={() => (window.location.href = "/services")}>
                      En savoir plus
                    </SolarButton>
                  </div>
                </div>

                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="flex-shrink-0">
                          <CheckCircle className="w-6 h-6" style={{ color: COLORS.vertEnergie }} />
                        </div>
                        <span className="text-gray-800 font-medium text-lg">{benefit}</span>
                      </div>
                  ))}
                </div>
              </div>

              {/* Right Content - Solar Panel Image with Clip Path */}
              <div className="relative h-full flex items-center">
                <div
                    className="relative w-full overflow-hidden transition-all duration-500 shadow-2xl hover:shadow-3xl"
                    style={{
                      clipPath: "polygon(0 0, 100% 0, 100% 100%, 80% 100%, 8% 78%)",
                      minHeight: "750px",
                      height: "100%",
                    }}
                >
                  {/* Gradient overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10 z-10 pointer-events-none"></div>

                  <img
                      src="/images/accueil_solar.jpeg"
                      alt="Panneaux solaires sur toit"
                      className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700"
                      style={{ objectPosition: "center 40%" }}
                  />

                  {/* Subtle glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400/20 to-green-400/20 blur-2xl -z-10"></div>
                </div>
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
                      <div className="aspect-video relative">
                        <img
                            src="/images/expertise_reconnue.png"
                            alt="Équipe d&apos;experts"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                        <div className="absolute inset-0 flex items-center justify-center text-center text-white p-8">
                          <div>
                            <h4 className="text-2xl font-bold mb-4">Équipe Experte</h4>
                            <p className="text-lg">Techniciens expérimentés et ingénieurs spécialisés</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6 animate-on-scroll opacity-0 translate-x-12 transition-all duration-700 ease-out">
                    <h3 className="text-3xl font-bold text-green-700">Expertise Reconnue</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Notre équipe est composée de techniciens expérimentés et d&apos;ingénieurs spécialisés dans les énergies
                      renouvelables. Qualifiés pour l&apos;installation de bornes de recharge électrique, nous garantissons des
                      services professionnels et fiables.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                        <span className="text-gray-800 font-medium">Techniciens expérimentés</span>
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
                      Nous utilisons uniquement des équipements de marques reconnues et offrons des garanties étendues sur
                      tous nos produits et services. Vous bénéficiez ainsi d&apos;installations durables et performantes pour
                      une tranquillité d&apos;esprit maximale.
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
                      <div className="aspect-video relative">
                        <img
                            src="/images/qualite_fiabilite.png"
                            alt="Panneaux solaires premium"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                        <div className="absolute inset-0 flex items-center justify-center text-center text-white p-8">
                          <div>
                            <h4 className="text-2xl font-bold mb-4">Équipements Premium</h4>
                            <p className="text-lg">Matériel de qualité supérieure avec garanties étendues</p>
                          </div>
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
                      <div className="aspect-video relative">
                        <img
                            src="/images/approche.png"
                            alt="Consultation personnalisée"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                        <div className="absolute inset-0 flex items-center justify-center text-center text-white p-8">
                          <div>
                            <h4 className="text-2xl font-bold mb-4">Solutions Sur Mesure</h4>
                            <p className="text-lg">Analyse personnalisée et adaptation à vos besoins</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6 animate-on-scroll opacity-0 translate-x-12 transition-all duration-700 ease-out">
                    <h3 className="text-3xl font-bold text-green-700">Approche Personnalisée</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Chaque projet est unique. Nous analysons vos besoins pour vous proposer la solution la mieux adaptée
                      à votre situation et votre budget, qu&apos;il s&apos;agisse d&apos;une installation résidentielle, commerciale ou
                      institutionnelle.
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
                      En choisissant Solar Energy Options, vous participez activement à la transition énergétique et à la
                      lutte contre le changement climatique. Nos solutions réduisent les émissions de CO2 et préservent
                      l&apos;environnement pour les générations futures.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                        <span className="text-gray-800 font-medium">Réduction des émissions CO2</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                        <span className="text-gray-800 font-medium">Préservation de l&apos;environnement</span>
                      </div>
                    </div>
                  </div>
                  <div className="order-1 lg:order-2 animate-on-scroll opacity-0 translate-x-12 transition-all duration-700 ease-out">
                    <div className="relative overflow-hidden rounded-2xl shadow-xl group hover:scale-105 hover:shadow-2xl transition-all duration-500">
                      <div className="aspect-video relative">
                        <img
                            src="/images/environnement.png"
                            alt="Environnement durable"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                        <div className="absolute inset-0 flex items-center justify-center text-center text-white p-8">
                          <div>
                            <h4 className="text-2xl font-bold mb-4">Éco-Responsable</h4>
                            <p className="text-lg">Pour un avenir durable et respectueux de l&apos;environnement</p>
                          </div>
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
                      <div className="aspect-video relative">
                        <img
                            src="/images/service_client.png"
                            alt="Service client"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                        <div className="absolute inset-0 flex items-center justify-center text-center text-white p-8">
                          <div>
                            <h4 className="text-2xl font-bold mb-4">Service Excellence</h4>
                            <p className="text-lg">Accompagnement personnalisé et support continu</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6 animate-on-scroll opacity-0 translate-x-12 transition-all duration-700 ease-out">
                    <h3 className="text-3xl font-bold text-green-700">Service Client Excellence</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Notre service client répond à toutes vos questions et vous accompagne tout au long du projet. Nous
                      privilégions transparence et communication pour garantir votre satisfaction.
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
                    "Devis gratuit et sans engagement",
                    "Installation par des techniciens expérimentés",
                    "Garantie sur tous nos équipements",
                    "Service après-vente réactif",
                    "Accompagnement personnalisé",
                  ].map((engagement, index) => (
                      <div
                          key={index}
                          className="flex items-center space-x-3 bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
                      >
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
                    Rejoignez dès aujourd&apos;hui la révolution énergétique !
                  </h3>
                  <p className="text-xl text-gray-600 mb-8">
                    Contribuez à un avenir plus durable pour l&apos;Afrique avec Solar Energy Options
                  </p>
                  <div className="inline-block">
                    <SolarButton
                        variant="primary"
                        size="lg"
                        onClick={() => (window.location.href = "/contact")}
                        className="animate-pulse hover:animate-none hover:scale-105 shadow-lg shadow-yellow-400/50"
                    >
                      Contactez nos experts maintenant !
                    </SolarButton>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <Footer />
      </div>
  )
}

export default SolarLandingPage