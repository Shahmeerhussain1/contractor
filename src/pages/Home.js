// import React, { useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
// import { Phone, Mail, MapPin, Menu, X, CheckCircle, Award, Users, Calendar } from 'lucide-react';
// import bgImage from "../assets/TIP_03.jpg";
// import bgImage1 from "../assets/1.png";
// import bgImage2 from "../assets/2.jpg";
// import bgImage3 from "../assets/3.png";

// const Home = () => {
//     useEffect(() => {
//         const observerOptions = {
//             root: null,
//             rootMargin: '0px',
//             threshold: 0.1,
//         };

//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach((entry) => {
//                 if (entry.isIntersecting) {
//                     entry.target.classList.add('animate');
//                     observer.unobserve(entry.target);
//                 }
//             });
//         }, observerOptions);

//         const elements = document.querySelectorAll('.animate-on-scroll');
//         elements.forEach((el) => observer.observe(el));

//         return () => {
//             elements.forEach((el) => observer.unobserve(el));
//         };
//     }, []);

//     return (
//         <div>
//             {/* Hero Section */}
//             <section
//                 style={{ backgroundImage: `url(${bgImage})` }}
//                 className="relative text-white py-40 bg-cover bg-center"
//             >
//                 <div className="absolute inset-0 bg-black bg-opacity-50"></div>
//                 <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll animate-fade-in-up">
//                     <h1 className="text-4xl md:text-6xl font-bold mb-6 transform transition-transform duration-500 hover:scale-105">
//                         M/S HBAS & CO
//                     </h1>
//                     <p className="text-xl md:text-2xl mb-4 text-white animate-on-scroll animate-fade-in delay-200">
//                         Excellence in Civil Construction & Infrastructure Development
//                     </p>
//                     <p className="text-lg mb-8 text-white max-w-3xl mx-auto animate-on-scroll animate-fade-in delay-400">
//                         Leading civil contractor specializing in irrigation systems, water management,
//                         and large-scale infrastructure projects across Pakistan.
//                     </p>
//                     <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                         <Link
//                             to="/projects"
//                             className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors transform hover:scale-105 duration-300"
//                         >
//                             View Our Projects
//                         </Link>
//                         <Link
//                             to="/contact"
//                             className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors transform hover:scale-105 duration-300"
//                         >
//                             Get Quote
//                         </Link>
//                     </div>
//                 </div>
//             </section>

//             {/* Features Section */}
//             <section className="py-16 bg-white animate-on-scroll animate-fade-in">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="text-center mb-16">
//                         <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 transform transition-transform duration-500 hover:scale-105">
//                             Why Choose HBAS & CO?
//                         </h2>
//                         <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-on-scroll animate-fade-in delay-200">
//                             Over 30 years of experience in delivering quality construction projects with excellence and professionalism.
//                         </p>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//                         <div className="text-center animate-on-scroll animate-slide-up delay-100">
//                             <div className="bg-gradient-to-br from-blue-600 to-blue-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-transform duration-300 hover:scale-110">
//                                 <CheckCircle className="text-white" size={32} />
//                             </div>
//                             <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Assurance</h3>
//                             <p className="text-gray-600">Committed to highest standards of quality in every project we undertake.</p>
//                         </div>

//                         <div className="text-center animate-on-scroll animate-slide-up delay-200">
//                             <div className="bg-gradient-to-br from-blue-600 to-blue-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-transform duration-300 hover:scale-110">
//                                 <Award className="text-white" size={32} />
//                             </div>
//                             <h3 className="text-xl font-semibold text-gray-900 mb-2">PEC Registered</h3>
//                             <p className="text-gray-600">Officially registered with Pakistan Engineering Council as No Limit Construction Company.</p>
//                         </div>

//                         <div className="text-center animate-on-scroll animate-slide-up delay-300">
//                             <div className="bg-gradient-to-br from-blue-600 to-blue-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-transform duration-300 hover:scale-110">
//                                 <Users className="text-white" size={32} />
//                             </div>
//                             <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Team</h3>
//                             <p className="text-gray-600">Professional team with extensive experience in civil construction and engineering.</p>
//                         </div>

//                         <div className="text-center animate-on-scroll animate-slide-up delay-400">
//                             <div className="bg-gradient-to-br from-blue-600 to-blue-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-transform duration-300 hover:scale-110">
//                                 <Calendar className="text-white" size={32} />
//                             </div>
//                             <h3 className="text-xl font-semibold text-gray-900 mb-2">Timely Delivery</h3>
//                             <p className="text-gray-600">Ensuring projects are completed on time with efficiency and precision.</p>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Services Preview */}
//             <section className="py-16 bg-gray-50 animate-on-scroll animate-fade-in">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="text-center mb-12">
//                         <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 transform transition-transform duration-500 hover:scale-105">
//                             Our Services
//                         </h2>
//                         <p className="text-xl text-gray-600 animate-on-scroll animate-fade-in delay-200">
//                             Comprehensive construction solutions for government and private sector projects
//                         </p>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                         <div
//                             className="relative p-6 rounded-lg shadow-md text-white bg-cover bg-center transform transition-transform duration-500 hover:scale-105 animate-on-scroll animate-slide-up delay-100"
//                             style={{ backgroundImage: `url(${bgImage1})` }}
//                         >
//                             <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></div>
//                             <div className="relative">
//                                 <h3 className="text-xl font-semibold mb-3">Irrigation Systems</h3>
//                                 <p className="mb-4">
//                                     Complete irrigation infrastructure development including canals, water channels, and distribution systems.
//                                 </p>
//                                 <Link to="/services" className="font-medium hover:underline">
//                                     Learn More →
//                                 </Link>
//                             </div>
//                         </div>

//                         <div
//                             className="relative p-6 rounded-lg shadow-md text-white bg-cover bg-center transform transition-transform duration-500 hover:scale-105 animate-on-scroll animate-slide-up delay-200"
//                             style={{ backgroundImage: `url(${bgImage2})` }}
//                         >
//                             <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></div>
//                             <div className="relative">
//                                 <h3 className="text-xl font-semibold mb-3">Water Management</h3>
//                                 <p className="mb-4">
//                                     Complete irrigation infrastructure development including canals, water channels, and distribution systems.
//                                 </p>
//                                 <Link to="/services" className="font-medium hover:underline">
//                                     Learn More →
//                                 </Link>
//                             </div>
//                         </div>

//                         <div
//                             className="relative p-6 rounded-lg shadow-md text-white bg-cover bg-center transform transition-transform duration-500 hover:scale-105 animate-on-scroll animate-slide-up delay-300"
//                             style={{ backgroundImage: `url(${bgImage3})` }}
//                         >
//                             <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></div>
//                             <div className="relative">
//                                 <h3 className="text-xl font-semibold mb-3">Infrastructure Development</h3>
//                                 <p className="mb-4">
//                                     Complete irrigation infrastructure development including canals, water channels, and distribution systems.
//                                 </p>
//                                 <Link to="/services" className="font-medium hover:underline">
//                                     Learn More →
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
//                 {/* Company Story */}
//                 <section className="mb-16 animate-on-scroll animate-fade-in">
//                     <div className="bg-blue-50 p-8 rounded-lg">
//                         <h2 className="text-3xl font-bold text-gray-900 mb-6 transform transition-transform duration-500 hover:scale-105">
//                             Our Story
//                         </h2>
//                         <div className="prose prose-lg max-w-none text-gray-700">
//                             <p className="mb-4">
//                                 Our company was founded in 1990 by Mr. Basheer Ahmed Soomro, who laid the foundation with a vision to contribute in the field of construction and development. Through his dedication, hard work, and professional commitment, the company earned recognition for delivering quality projects, especially in the irrigation and infrastructure sector.
//                             </p>
//                             <p className="mb-4">
//                                 In continuation of his legacy, the company is now being led by Mr. Furqan Ali Soomro, who has expanded the scope of services and strengthened the company's reputation. Under his leadership, the company has undertaken major projects in irrigation, lining, small dams, and large-scale structures, ensuring timely delivery with quality and professionalism.
//                             </p>
//                             <p>
//                                 Today, we are proudly registered with the Pakistan Engineering Council (PEC) as a No Limit Construction Company, reflecting our capacity to execute projects of any scale with excellence.
//                             </p>
//                         </div>
//                     </div>
//                 </section>

//                 {/* Mission & Values */}
//                 <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 animate-on-scroll animate-fade-in">
//                     <div className="animate-on-scroll animate-slide-up delay-100">
//                         <h2 className="text-3xl font-bold text-gray-900 mb-6 transform transition-transform duration-500 hover:scale-105">
//                             Our Mission
//                         </h2>
//                         <p className="text-gray-700 text-lg leading-relaxed">
//                             Our mission is to deliver sustainable and innovative engineering solutions in irrigation, water management, and infrastructure development. We are committed to excellence by combining technical expertise, innovation, and integrity to provide reliable, cost-effective, and high-quality services. With a focus on enhancing agricultural productivity and community well-being, we aim to contribute to national development while upholding the highest standards of safety and environmental responsibility.
//                         </p>
//                     </div>

//                     <div className="animate-on-scroll animate-slide-up delay-200">
//                         <h2 className="text-3xl font-bold text-gray-900 mb-6 transform transition-transform duration-500 hover:scale-105">
//                             Core Values
//                         </h2>
//                         <div className="space-y-4">
//                             <div className="flex items-start space-x-3 transform transition-transform duration-300 hover:scale-105 animate-on-scroll animate-slide-up delay-300">
//                                 <CheckCircle className="text-blue-600 mt-1" size={20} />
//                                 <div>
//                                     <h3 className="font-semibold text-gray-900">Integrity</h3>
//                                     <p className="text-gray-600">Conducting business with honesty and transparency in all our dealings.</p>
//                                 </div>
//                             </div>
//                             <div className="flex items-start space-x-3 transform transition-transform duration-300 hover:scale-105 animate-on-scroll animate-slide-up delay-400">
//                                 <CheckCircle className="text-blue-600 mt-1" size={20} />
//                                 <div>
//                                     <h3 className="font-semibold text-gray-900">Excellence</h3>
//                                     <p className="text-gray-600">Striving for the highest quality standards in every project we undertake.</p>
//                                 </div>
//                             </div>
//                             <div className="flex items-start space-x-3 transform transition-transform duration-300 hover:scale-105 animate-on-scroll animate-slide-up delay-500">
//                                 <CheckCircle className="text-blue-600 mt-1" size={20} />
//                                 <div>
//                                     <h3 className="font-semibold text-gray-900">Innovation</h3>
//                                     <p className="text-gray-600">Embracing modern techniques and sustainable practices in construction.</p>
//                                 </div>
//                             </div>
//                             <div className="flex items-start space-x-3 transform transition-transform duration-300 hover:scale-105 animate-on-scroll animate-slide-up delay-600">
//                                 <CheckCircle className="text-blue-600 mt-1" size={20} />
//                                 <div>
//                                     <h3 className="font-semibold text-gray-900">Safety</h3>
//                                     <p className="text-gray-600">Maintaining the highest standards of safety in all our operations.</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>

//                 {/* Leadership */}
//                 <section className="animate-on-scroll animate-fade-in">
//                     <h2 className="text-3xl font-bold text-gray-900 text-center mb-12 transform transition-transform duration-500 hover:scale-105">
//                         Leadership
//                     </h2>
//                     <div className="max-w-4xl mx-auto">
//                         <div className="bg-gray-50 p-8 rounded-lg text-center transform transition-transform duration-500 hover:scale-105 animate-on-scroll animate-slide-up delay-100">
//                             <div className="w-32 h-32 bg-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center transform transition-transform duration-300 hover:scale-110">
//                                 <span className="text-white text-4xl font-bold">FA</span>
//                             </div>
//                             <h3 className="text-2xl font-bold text-gray-900 mb-2">Furqan Ali Soomro</h3>
//                             <p className="text-xl text-blue-600 mb-4">Managing Director & CEO</p>
//                             <p className="text-gray-700 max-w-2xl mx-auto">
//                                 Leading the company with vision and expertise, Mr. Furqan Ali Soomro has expanded our capabilities and strengthened our position as a premier civil construction contractor. Under his leadership, we have successfully delivered numerous large-scale infrastructure projects while maintaining our commitment to quality and excellence.
//                             </p>
//                         </div>
//                     </div>
//                 </section>
//             </div>
//         </div>
//     );
// };

// export default Home;


import React, { useEffect } from "react";
import {
  CheckCircle,
  Award,
  Users,
  Calendar,
  // other icons if needed
} from "lucide-react";

const bgImage =
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2070&q=80";
const bgImage1 =
  "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1000&q=80";
const bgImage2 =
  "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=1000&q=80";
const bgImage3 =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80";

// CEO photo (replace with actual CEO image)
const ceoImage =
  "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=800&q=80";

const Home = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -8% 0px", // start slightly before element fully in view
      threshold: 0.08,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // read animation type from data attribute
          const anim = entry.target.dataset.anim || "fade-in-up";
          entry.target.classList.add(`anim-${anim}`);
          entry.target.classList.add("in-view"); // optional marker
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const els = document.querySelectorAll(".animate-on-scroll");
    els.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="overflow-hidden bg-white text-gray-800">
      <style jsx>{`
        /* ---------- Keyframes ---------- */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.92);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        /* ---------- Base state for scroll items ---------- */
        .animate-on-scroll {
          opacity: 0;
          will-change: transform, opacity;
        }

        .in-view {
          /* kept if you want to style after it's in view */
        }

        /* ---------- Animation classes (added by JS) ---------- */
        .anim-fade-in-up {
          animation: fadeInUp 0.72s cubic-bezier(0.2, 0.9, 0.2, 1) forwards;
        }
        .anim-slide-left {
          animation: slideInLeft 0.72s cubic-bezier(0.2, 0.9, 0.2, 1) forwards;
        }
        .anim-slide-right {
          animation: slideInRight 0.72s cubic-bezier(0.2, 0.9, 0.2, 1) forwards;
        }
        .anim-scale-in {
          animation: scaleIn 0.72s cubic-bezier(0.2, 0.9, 0.2, 1) forwards;
        }
        .anim-float {
          animation: float 3s ease-in-out infinite;
          opacity: 1; /* float is continuous - make visible immediately when applied */
        }

        /* delays for animation */
        .delay-100 {
          animation-delay: 0.08s;
        }
        .delay-200 {
          animation-delay: 0.18s;
        }
        .delay-300 {
          animation-delay: 0.28s;
        }
        .delay-400 {
          animation-delay: 0.38s;
        }
        .delay-500 {
          animation-delay: 0.48s;
        }
        .delay-600 {
          animation-delay: 0.6s;
        }

        /* Branding / small utils */
        .gradient-text {
          background: linear-gradient(135deg, #0d6efd 0%, #3757d6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .glass-effect {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(6px);
          border: 1px solid rgba(15, 23, 42, 0.03);
        }

        /* small responsive tweaks */
        @media (max-width: 640px) {
          h1 {
            font-size: 2rem;
          }
        }
      `}</style>

      {/* ========== HERO ========== */}
      <section
        className="relative min-h-[84vh] flex items-center justify-center text-center bg-gray-50"
        aria-label="hero"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})`, opacity: 0.16 }}
        />
        <div className="relative z-10 max-w-4xl px-6">
          <h1
            className="animate-on-scroll text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            data-anim="fade-in-up"
          >
            M/S <span className="gradient-text">HBAS & CO</span>
          </h1>

          <p
            className="animate-on-scroll delay-200 text-lg text-gray-700 mb-3"
            data-anim="fade-in-up"
          >
            Excellence in Civil Construction & Infrastructure Development
          </p>

          <p
            className="animate-on-scroll delay-400 text-base text-gray-600 max-w-3xl mx-auto mb-8"
            data-anim="fade-in-up"
          >
            Leading civil contractor specializing in irrigation systems, water
            management, and large-scale infrastructure projects across Pakistan.
          </p>

          <div
            className="animate-on-scroll flex flex-col sm:flex-row gap-4 justify-center"
            data-anim="scale-in"
          >
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
              View Our Projects
            </button>
            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition">
              Get Quote
            </button>
          </div>
        </div>
      </section>

      {/* ========== FEATURES ========== */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              className="animate-on-scroll text-3xl md:text-4xl font-bold text-gray-900 mb-3"
              data-anim="fade-in-up"
            >
              Why Choose <span className="gradient-text">HBAS & CO</span>?
            </h2>
            <p
              className="animate-on-scroll delay-200 text-gray-600 max-w-2xl mx-auto"
              data-anim="fade-in-up"
            >
              Over 30 years of experience delivering quality construction
              projects with excellence and professionalism.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: CheckCircle,
                title: "Quality Assurance",
                desc: "Highest standards of quality in every project.",
                anim: "scale-in",
              },
              {
                icon: Award,
                title: "PEC Registered",
                desc: "Officially recognized as a No Limit Construction Company.",
                anim: "scale-in",
              },
              {
                icon: Users,
                title: "Expert Team",
                desc: "Professional engineers with deep expertise.",
                anim: "scale-in",
              },
              {
                icon: Calendar,
                title: "Timely Delivery",
                desc: "Projects delivered on time with precision.",
                anim: "scale-in",
              },
            ].map((it, idx) => (
              <div
                key={idx}
                className="animate-on-scroll bg-gray-50 p-6 rounded-lg shadow-sm text-center"
                data-anim={it.anim}
              >
                <div className="w-14 h-14 mx-auto mb-3 bg-blue-600 text-white flex items-center justify-center rounded-full">
                  <it.icon size={20} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{it.title}</h3>
                <p className="text-gray-600 text-sm">{it.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SERVICES ========== */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2
              className="animate-on-scroll text-3xl font-bold text-gray-900"
              data-anim="fade-in-up"
            >
              Our <span className="gradient-text">Services</span>
            </h2>
            <p
              className="animate-on-scroll delay-200 text-gray-600 max-w-2xl mx-auto"
              data-anim="fade-in-up"
            >
              Comprehensive construction solutions for government and private
              sector projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { img: bgImage1, title: "Irrigation Systems" },
              { img: bgImage2, title: "Water Management" },
              { img: bgImage3, title: "Infrastructure Development" },
            ].map((s, i) => (
              <div
                key={i}
                className="animate-on-scroll group relative overflow-hidden rounded-lg shadow-md"
                data-anim="scale-in"
              >
                <div
                  className="h-64 bg-cover bg-center"
                  style={{ backgroundImage: `url(${s.img})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700 transition">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PROJECTS (blue background accent) ========== */}
      <section className="py-16" style={{ background: "linear-gradient(180deg,#0d6efd08,#0d6efd12)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="animate-on-scroll text-3xl md:text-4xl font-bold text-gray-900" data-anim="fade-in-up">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="animate-on-scroll delay-200 text-gray-600 max-w-2xl mx-auto" data-anim="fade-in-up">
              A selection of recent projects highlighting our capabilities and scale.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[bgImage1, bgImage2, bgImage3].map((img, i) => (
              <div key={i} className="animate-on-scroll rounded-lg overflow-hidden shadow-lg" data-anim="fade-in-up">
                <div className="h-56 bg-cover bg-center" style={{ backgroundImage: `url(${img})` }} />
                <div className="p-4 bg-white">
                  <h4 className="font-semibold text-gray-900">Project Title {i + 1}</h4>
                  <p className="text-sm text-gray-600 mt-1">Short description of the project's scope and impact.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CLIENTS ========== */}
      {/* <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Trusted by</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center">
            <div className="p-4 bg-gray-50 rounded-md animate-on-scroll" data-anim="fade-in-up">Client A</div>
            <div className="p-4 bg-gray-50 rounded-md animate-on-scroll" data-anim="fade-in-up">Client B</div>
            <div className="p-4 bg-gray-50 rounded-md animate-on-scroll" data-anim="fade-in-up">Client C</div>
            <div className="p-4 bg-gray-50 rounded-md animate-on-scroll" data-anim="fade-in-up">Client D</div>
          </div>
        </div>
      </section> */}

      {/* ========== TESTIMONIALS ========== */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-gray-900 animate-on-scroll" data-anim="fade-in-up">What Clients Say</h3>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { text: "Delivered on time and within budget. Impressive engineering.", name: "Govt. Dept." },
              { text: "Professional team and great communication throughout the project.", name: "Private Client" },
              { text: "High quality and safety standards — highly recommended.", name: "Agriculture Board" },
            ].map((t, i) => (
              <blockquote key={i} className="animate-on-scroll p-6 bg-white rounded-lg shadow-sm" data-anim="scale-in">
                <p className="text-gray-700 mb-4">“{t.text}”</p>
                <footer className="text-sm text-gray-500">— {t.name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ========== STORY ========== */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="animate-on-scroll glass-effect p-8 rounded-lg shadow-sm" data-anim="slide-left">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our <span className="gradient-text">Story</span></h2>
            <p className="text-gray-700 mb-2">
             Our company was founded in 1990 by Mr. Basheer Ahmed Soomro, who laid the foundation with a vision to contribute in the field of construction and development. Through his dedication, hard work, and professional commitment, the company earned recognition for delivering quality projects, especially in the irrigation and infrastructure sector.
            </p>
            <p className="text-gray-700">
             In continuation of his legacy, the company is now being led by Mr. Furqan Ali Soomro, who has expanded the scope of services and strengthened the company's reputation. Under his leadership, the company has undertaken major projects in irrigation, lining, small dams, and large-scale structures, ensuring timely delivery with quality and professionalism.. Today, led by Mr. Furqan Ali Soomro, the company has expanded into major projects including dams, canal lining and large infrastructure works.
            </p>
          </div>
        </div>
      </section>

      {/* ========== MISSION & VALUES ========== */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="animate-on-scroll" data-anim="slide-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Our <span className="gradient-text">Mission</span></h3>
            <div className="glass-effect p-4 rounded">
              <p className="text-gray-700">Deliver sustainable and innovative engineering solutions in irrigation, water management and infrastructure development.</p>
            </div>
          </div>

          <div className="animate-on-scroll" data-anim="slide-right">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Core <span className="gradient-text">Values</span></h3>
            <div className="space-y-3">
              {[
                ["Integrity", "Honesty and transparency in all dealings."],
                ["Excellence", "Highest quality standards."],
                ["Innovation", "Modern techniques & sustainability."],
                ["Safety", "Top safety standards across operations."],
              ].map(([t, d], i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="bg-blue-600 text-white p-2 rounded">
                    <CheckCircle size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{t}</h4>
                    <p className="text-gray-600 text-sm">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== LEADERSHIP (with CEO photo) ========== */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8 animate-on-scroll" data-anim="fade-in-up">
            <span className="gradient-text">Leadership</span>
          </h3>

          <div className="animate-on-scroll glass-effect p-6 rounded-lg shadow-sm grid grid-cols-1 md:grid-cols-3 gap-4 items-center" data-anim="scale-in">
            <div className="col-span-1 md:col-span-1 flex justify-center">
              <img
                src={ceoImage}
                alt="Furqan Ali Soomro - CEO"
                className="w-36 h-36 object-cover rounded-full shadow"
              />
            </div>

            <div className="md:col-span-2">
              <h4 className="text-xl font-bold text-gray-900">Furqan Ali Soomro</h4>
              <p className="text-blue-700 font-medium mb-3">Managing Director & CEO</p>
              <p className="text-gray-700">
                Leading HBAS & CO with vision and expertise, Furqan Ali Soomro has expanded the company’s capabilities and delivered numerous large-scale infrastructure projects while maintaining a commitment to quality and professionalism.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CONTACT CTA (blue background) ========== */}
      <section className="py-12" style={{ background: "linear-gradient(180deg,#0d6efd12,#0d6efd06)" }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-2xl font-bold text-gray-900 animate-on-scroll" data-anim="fade-in-up">Ready to discuss your project?</h4>
            <p className="text-gray-700 animate-on-scroll delay-200" data-anim="fade-in-up">Contact us to get a detailed quote and timeline from our expert team.</p>
          </div>
          <div className="animate-on-scroll" data-anim="scale-in">
            <a href="#contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;


                