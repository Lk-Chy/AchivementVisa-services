import React from "react";

export default function LandingPage() {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      {/* Header */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 px-10 py-4 sticky top-0 bg-white z-50">
        <div className="flex items-center gap-3 text-gray-800">
<img
  src="Logo/logo.png" // path relative to the public folder
  alt="Logo"
  className="w-16 h-16" // adjust size as needed (Tailwind classes)
  // you can add text color, padding, margin etc. as needed
/>
          <h2 className="text-gray-900 text-sm font-bold leading-tight tracking-tight">
            Achievement Education
          </h2>
        </div>
        <nav className="flex items-center gap-8">
          <a
            className="text-gray-600 hover:text-gray-900 text-sm font-medium leading-normal transition-colors"
            href="#"
          >
            Services
          </a>
          <a
            className="text-gray-600 hover:text-gray-900 text-sm font-medium leading-normal transition-colors"
            href="#"
          >
            Countries
          </a>
          <a
            className="text-gray-600 hover:text-gray-900 text-sm font-medium leading-normal transition-colors"
            href="#"
          >
            Visa Consulting
          </a>
          <a
            className="text-gray-600 hover:text-gray-900 text-sm font-medium leading-normal transition-colors"
            href="#"
          >
            About Us
          </a>
        </nav>
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-10 px-5 bg-[var(--primary-color)] text-black text-sm font-semibold leading-normal tracking-wide shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 transition-colors">
          <span className="truncate">Book Appointment</span>
        </button>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div
            className="flex min-h-[560px] flex-col items-start justify-end bg-cover bg-center bg-no-repeat px-40 pb-20"
            style={{
              backgroundImage:
                'linear-gradient(rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDmkmbkdoJbzN5BybS-Q0_BEouwapibyQqU17h8mF33kFOf-APWPAfdrMwg4b7XCsTzUxR4HK3ttAgwJXABqEKnhnEAg7Novlu3aIIIexh7axqcv91amYcTjvhywUWhPdk-2qVi3rl3YGO9rH0pymbZ4zxrdbAlCjVDruBC0pNd574JVHfh3eSIX6IMZ2dewr6_Kw-zkf1G1_rQmrOzlOGj1zS9y3jKCV2dr6tD88t39q8ED3w5ljfJc872RyIkiuAC5BqdD7DXxShu")',
            }}
          >
            <div className="max-w-3xl space-y-5">
              <h1 className="text-white text-5xl font-bold leading-tight tracking-tighter">
                Your Journey to Global Education Starts Here
              </h1>
              <p className="text-gray-200 text-lg font-normal leading-relaxed">
                Achievement Visa is your trusted partner in navigating the
                complexities of international education. We provide expert
                guidance and support to help you achieve your academic and career
                aspirations abroad.
              </p>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-12 px-6 bg-[var(--primary-color)] text-white text-base font-semibold leading-normal tracking-wide shadow-lg hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 transition-colors">
                <span className="truncate">Book Appointment</span>
              </button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        {/* ... keep the rest of your sections as-is, just ensure:
              - Replace class -> className
              - Replace inline style='...' with style={{...}}
              - Self-close <img>, <input>, <br /> tags if any
        */}

        {/* Example of one more section below (rest is same process) */}

        <section className="px-40 py-24 bg-gray-50">
          <div className="mx-auto max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-gray-900 text-4xl font-bold leading-tight tracking-tighter">
                Comprehensive Support for Your Educational Journey
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mt-4">
                We offer a range of services tailored to meet your individual
                needs, from university selection to visa application assistance.
              </p>
            </div>
            {/* Cards grid here ... */}
          </div>
        </section>

        {/* Countries Section */}
<section className="px-40 py-24 bg-white">
  <div className="mx-auto max-w-7xl text-center">
    <h2 className="text-gray-900 text-3xl font-bold mb-12">Countries We Serve</h2>
    <div className="flex justify-center gap-12 flex-wrap">
      {[
        { name: "United States", flag: "https://flagcdn.com/us.svg" },
        { name: "Canada", flag: "https://flagcdn.com/ca.svg" },
        { name: "United Kingdom", flag: "https://flagcdn.com/gb.svg" },
        { name: "Australia", flag: "https://flagcdn.com/au.svg" },
        { name: "Germany", flag: "https://flagcdn.com/de.svg" },
        { name: "France", flag: "https://flagcdn.com/fr.svg" },
      ].map((country) => (
        <div key={country.name} className="flex flex-col items-center space-y-3">
          <img
            src={country.flag}
            alt={country.name}
            className="w-20 h-20 object-contain rounded-full shadow-md"
          />
          <p className="text-gray-700 font-medium">{country.name}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Visa Guidance Section */}
<section className="px-40 py-24 bg-gray-50">
  <div className="mx-auto max-w-7xl text-center">
    <h2 className="text-gray-900 text-3xl font-bold mb-4">
      Expert Visa Guidance for a Smooth Transition
    </h2>
    <p className="text-gray-600 text-lg mb-16 max-w-3xl mx-auto">
      Our experienced consultants provide comprehensive support throughout the
      visa application process, ensuring accuracy and efficiency.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Document Preparation</h3>
        <p className="text-gray-600 text-sm">
          We help you carefully prepare and organize necessary documents for your
          visa application.
        </p>
      </div>
      <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Application Review</h3>
        <p className="text-gray-600 text-sm">
          Our team reviews your application meticulously to maximize completeness
          and accuracy.
        </p>
      </div>
      <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Interview Coaching</h3>
        <p className="text-gray-600 text-sm">
          We provide personalized coaching to build your confidence for visa
          interviews.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Call To Action Section */}
<section className="px-40 py-24 bg-white text-center">
  <h2 className="text-gray-900 text-3xl font-bold mb-6">
    Ready to Start Your Journey?
  </h2>
  <p className="text-gray-600 text-lg mb-10">
    Schedule a consultation with our expert advisors today and take the first step
    towards your global education.
  </p>
  {/* <button className="flex mx-auto min-w-[120px] items-center justify-center rounded-md h-12 px-6 bg-[var(--primary-color)] text-white text-base font-semibold leading-normal tracking-wide shadow-md hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 transition-colors">
    <span>Book Appointment</span>
  </button> */}
  <button className="flex mx-auto min-w-[120px] items-center justify-center rounded-md h-12 px-6 bg-blue-500 text-white text-base font-semibold leading-normal tracking-wide shadow-md hover:bg-blue-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 transition-colors">
  <span>Book Appointment</span>
</button>

</section>


        {/* Continue converting each section the same way */}
      </main>
    </div>
  );
}
