import React, { useRef, useState, useEffect } from "react";

export default function LandingPage() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const countriesRef = useRef(null);
  const visaRef = useRef(null);

  const [activeSection, setActiveSection] = useState("hero");
  const [darkMode, setDarkMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [visibleSections, setVisibleSections] = useState({});

  const navItems = [
    { label: "Services", ref: servicesRef },
    { label: "Countries", ref: countriesRef },
    { label: "Visa Consulting", ref: visaRef },
  ];

  const scrollToRef = (ref) => ref.current?.scrollIntoView({ behavior: "smooth" });
  const toggleDarkMode = () => setDarkMode(!darkMode);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // Track active section and scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;

      if (visaRef.current && scrollPos >= visaRef.current.offsetTop) setActiveSection("visa");
      else if (countriesRef.current && scrollPos >= countriesRef.current.offsetTop) setActiveSection("countries");
      else if (servicesRef.current && scrollPos >= servicesRef.current.offsetTop) setActiveSection("services");
      else setActiveSection("hero");

      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fade-in animations using IntersectionObserver
  useEffect(() => {
    const sections = [heroRef, servicesRef, countriesRef, visaRef];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.2 }
    );
    sections.forEach((sec) => sec.current && observer.observe(sec.current));
    return () => sections.forEach((sec) => sec.current && observer.unobserve(sec.current));
  }, []);

  return (
    <div className={`${darkMode ? "dark" : ""} transition-colors duration-500 flex flex-col min-h-screen`} style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
      
      {/* Header */}
      <header className="fixed w-full z-50 top-0 left-0 transition-all duration-300 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="flex flex-col sm:flex-row items-center justify-between px-5 sm:px-10 py-3 sm:py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="/Logo/logo.png" alt="Logo" className="w-12 h-12 sm:w-16 sm:h-16" />
            <h2 className="text-base sm:text-sm font-bold tracking-tight text-gray-900 dark:text-gray-100">Achievement Education</h2>
          </div>

          {/* Navbar */}
          <nav className="flex flex-wrap justify-center sm:justify-start items-center gap-4 sm:gap-8 mt-3 sm:mt-0 relative">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToRef(item.ref)}
                className={`relative text-sm sm:text-base font-medium transition-colors duration-300 ${
                  activeSection === item.label.toLowerCase()
                    ? "text-blue-500 after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-blue-500 after:rounded-full"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:after:absolute hover:after:-bottom-1 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-blue-500 hover:after:rounded-full"
                }`}
              >
                {item.label}
              </button>
            ))}
            <a className="text-sm sm:text-base font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100" href="#">
              About Us
            </a>
          </nav>

          {/* Buttons */}
          <div className="flex gap-3 mt-3 sm:mt-0">
            <button className="flex items-center justify-center rounded-md h-10 sm:h-12 px-4 sm:px-5 bg-blue-500 text-white font-semibold shadow hover:bg-blue-600 transition-transform hover:scale-105">
              Book Appointment
            </button>
            <button
              onClick={toggleDarkMode}
              className="flex items-center justify-center rounded-md h-10 sm:h-12 px-4 sm:px-5 font-semibold shadow transition-colors duration-300 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-400 hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 mt-[92px]">

        {/* Hero Section */}
        <section ref={heroRef} id="hero" className={`relative opacity-0 transition-opacity duration-1000 ${visibleSections.hero ? "opacity-100" : ""}`}>
          <div
            className="flex flex-col items-start justify-end bg-cover bg-center bg-no-repeat px-5 sm:px-10 md:px-20 lg:px-40 pb-10 sm:pb-20 min-h-[400px] sm:min-h-[560px]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDmkmbkdoJbzN5BybS-Q0_BEouwapibyQqU17h8mF33kFOf-APWPAfdrMwg4b7XCsTzUxR4HK3ttAgwJXABqEKnhnEAg7Novlu3aIIIexh7axqcv91amYcTjvhywUWhPdk-2qVi3rl3YGO9rH0pymbZ4zxrdbAlCjVDruBC0pNd574JVHfh3eSIX6IMZ2dewr6_Kw-zkf1G1_rQmrOzlOGj1zS9y3jKCV2dr6tD88t39q8ED3w5ljfJc872RyIkiuAC5BqdD7DXxShu")',
            }}
          >
            <div className="max-w-full sm:max-w-3xl space-y-5 animate-fadeIn">
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tighter">
                Your Journey to Global Education Starts Here
              </h1>
              <p className="text-gray-200 text-base sm:text-lg md:text-lg font-normal leading-relaxed">
                Achievement Visa is your trusted partner in navigating the complexities of international education.
              </p>
              <button className="flex min-w-[120px] sm:min-w-[84px] max-w-[480px] items-center justify-center rounded-md h-10 sm:h-12 px-4 sm:px-6 bg-blue-500 text-white font-semibold shadow-lg hover:bg-blue-600 hover:scale-105 transition-transform duration-300">
                Book Appointment
              </button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section ref={servicesRef} id="services" className={`px-5 sm:px-10 md:px-20 lg:px-40 py-12 sm:py-24 transition-colors duration-500 opacity-0 ${visibleSections.services ? "opacity-100" : ""} bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-200`}>
          <div className="mx-auto max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-tighter text-gray-900 dark:text-gray-100">
                Comprehensive Support for Your Educational Journey
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed mt-4">
                We offer a range of services tailored to meet your individual needs, from university selection to visa application assistance.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {[{ title: "University Selection", desc: "Choose the best university for your goals." },
                { title: "Application Assistance", desc: "We help with every step of your applications." },
                { title: "Scholarship Guidance", desc: "Maximize your chances for scholarships abroad." },
              ].map((service) => (
                <div key={service.title} className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 sm:p-8 border border-gray-100 dark:border-gray-700 transform transition duration-500 hover:scale-105">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Countries Section */}
        <section ref={countriesRef} id="countries" className={`px-5 sm:px-10 md:px-20 lg:px-40 py-12 sm:py-24 transition-colors duration-500 opacity-0 ${visibleSections.countries ? "opacity-100" : ""} bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-200`}>
          <div className="mx-auto max-w-7xl text-center">
            <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-12 text-gray-900 dark:text-gray-100">
              Countries We Serve
            </h2>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-12">
              {[{ name: "United States", flag: "https://flagcdn.com/us.svg" },
                { name: "Canada", flag: "https://flagcdn.com/ca.svg" },
                { name: "United Kingdom", flag: "https://flagcdn.com/gb.svg" },
                { name: "Australia", flag: "https://flagcdn.com/au.svg" },
                { name: "Germany", flag: "https://flagcdn.com/de.svg" },
                { name: "France", flag: "https://flagcdn.com/fr.svg" }].map((country) => (
                <div key={country.name} className="flex flex-col items-center space-y-3 transform transition duration-500 hover:scale-105">
                  <img src={country.flag} alt={country.name} className="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-full shadow-md" />
                  <p className="text-gray-700 dark:text-gray-200 font-medium text-sm sm:text-base">{country.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Visa Section */}
        <section ref={visaRef} id="visa" className={`px-5 sm:px-10 md:px-20 lg:px-40 py-12 sm:py-24 transition-colors duration-500 opacity-0 ${visibleSections.visa ? "opacity-100" : ""} bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-200`}>
          <div className="mx-auto max-w-7xl text-center">
            <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Expert Visa Guidance for a Smooth Transition
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg mb-12 max-w-3xl mx-auto">
              Our experienced consultants provide comprehensive support throughout the visa application process, ensuring accuracy and efficiency.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {[{ title: "Document Preparation", desc: "We help you carefully prepare and organize necessary documents for your visa application." },
                { title: "Application Review", desc: "Our team reviews your application meticulously to maximize completeness and accuracy." },
                { title: "Interview Coaching", desc: "We provide personalized coaching to build your confidence for visa interviews." }].map((item) => (
                <div key={item.title} className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 sm:p-8 border border-gray-100 dark:border-gray-700 transform transition duration-500 hover:scale-105">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* Scroll-to-Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 hover:scale-110 transition-transform duration-300"
        >
          ↑
        </button>
      )}

      {/* Footer */}
      <footer className="bg-gray-200 dark:bg-gray-900 text-center py-8 transition-colors duration-500">
        <p className="text-gray-700 dark:text-gray-400 transition-colors duration-500">
          © 2025 Achievement Education. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
