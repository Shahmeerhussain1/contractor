import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Menu, X, CheckCircle, Award, Users, Calendar } from 'lucide-react';
import bgImage from "../assets/TIP_03.jpg";
import bgImage1 from "../assets/1.png";
import bgImage2 from "../assets/2.jpg";
import bgImage3 from "../assets/3.png";

const Home = () => {
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach((el) => observer.observe(el));

        return () => {
            elements.forEach((el) => observer.unobserve(el));
        };
    }, []);

    return (
        <div>
            {/* Hero Section */}
            <section
                style={{ backgroundImage: `url(${bgImage})` }}
                className="relative text-white py-40 bg-cover bg-center"
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll animate-fade-in-up">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 transform transition-transform duration-500 hover:scale-105">
                        M/S HBAS & CO
                    </h1>
                    <p className="text-xl md:text-2xl mb-4 text-white animate-on-scroll animate-fade-in delay-200">
                        Excellence in Civil Construction & Infrastructure Development
                    </p>
                    <p className="text-lg mb-8 text-white max-w-3xl mx-auto animate-on-scroll animate-fade-in delay-400">
                        Leading civil contractor specializing in irrigation systems, water management,
                        and large-scale infrastructure projects across Pakistan.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/projects"
                            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors transform hover:scale-105 duration-300"
                        >
                            View Our Projects
                        </Link>
                        <Link
                            to="/contact"
                            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors transform hover:scale-105 duration-300"
                        >
                            Get Quote
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-white animate-on-scroll animate-fade-in">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 transform transition-transform duration-500 hover:scale-105">
                            Why Choose HBAS & CO?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-on-scroll animate-fade-in delay-200">
                            Over 30 years of experience in delivering quality construction projects with excellence and professionalism.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center animate-on-scroll animate-slide-up delay-100">
                            <div className="bg-gradient-to-br from-blue-600 to-blue-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-transform duration-300 hover:scale-110">
                                <CheckCircle className="text-white" size={32} />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Assurance</h3>
                            <p className="text-gray-600">Committed to highest standards of quality in every project we undertake.</p>
                        </div>

                        <div className="text-center animate-on-scroll animate-slide-up delay-200">
                            <div className="bg-gradient-to-br from-blue-600 to-blue-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-transform duration-300 hover:scale-110">
                                <Award className="text-white" size={32} />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">PEC Registered</h3>
                            <p className="text-gray-600">Officially registered with Pakistan Engineering Council as No Limit Construction Company.</p>
                        </div>

                        <div className="text-center animate-on-scroll animate-slide-up delay-300">
                            <div className="bg-gradient-to-br from-blue-600 to-blue-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-transform duration-300 hover:scale-110">
                                <Users className="text-white" size={32} />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Team</h3>
                            <p className="text-gray-600">Professional team with extensive experience in civil construction and engineering.</p>
                        </div>

                        <div className="text-center animate-on-scroll animate-slide-up delay-400">
                            <div className="bg-gradient-to-br from-blue-600 to-blue-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-transform duration-300 hover:scale-110">
                                <Calendar className="text-white" size={32} />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Timely Delivery</h3>
                            <p className="text-gray-600">Ensuring projects are completed on time with efficiency and precision.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Preview */}
            <section className="py-16 bg-gray-50 animate-on-scroll animate-fade-in">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 transform transition-transform duration-500 hover:scale-105">
                            Our Services
                        </h2>
                        <p className="text-xl text-gray-600 animate-on-scroll animate-fade-in delay-200">
                            Comprehensive construction solutions for government and private sector projects
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div
                            className="relative p-6 rounded-lg shadow-md text-white bg-cover bg-center transform transition-transform duration-500 hover:scale-105 animate-on-scroll animate-slide-up delay-100"
                            style={{ backgroundImage: `url(${bgImage1})` }}
                        >
                            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></div>
                            <div className="relative">
                                <h3 className="text-xl font-semibold mb-3">Irrigation Systems</h3>
                                <p className="mb-4">
                                    Complete irrigation infrastructure development including canals, water channels, and distribution systems.
                                </p>
                                <Link to="/services" className="font-medium hover:underline">
                                    Learn More →
                                </Link>
                            </div>
                        </div>

                        <div
                            className="relative p-6 rounded-lg shadow-md text-white bg-cover bg-center transform transition-transform duration-500 hover:scale-105 animate-on-scroll animate-slide-up delay-200"
                            style={{ backgroundImage: `url(${bgImage2})` }}
                        >
                            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></div>
                            <div className="relative">
                                <h3 className="text-xl font-semibold mb-3">Water Management</h3>
                                <p className="mb-4">
                                    Complete irrigation infrastructure development including canals, water channels, and distribution systems.
                                </p>
                                <Link to="/services" className="font-medium hover:underline">
                                    Learn More →
                                </Link>
                            </div>
                        </div>

                        <div
                            className="relative p-6 rounded-lg shadow-md text-white bg-cover bg-center transform transition-transform duration-500 hover:scale-105 animate-on-scroll animate-slide-up delay-300"
                            style={{ backgroundImage: `url(${bgImage3})` }}
                        >
                            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></div>
                            <div className="relative">
                                <h3 className="text-xl font-semibold mb-3">Infrastructure Development</h3>
                                <p className="mb-4">
                                    Complete irrigation infrastructure development including canals, water channels, and distribution systems.
                                </p>
                                <Link to="/services" className="font-medium hover:underline">
                                    Learn More →
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
                {/* Company Story */}
                <section className="mb-16 animate-on-scroll animate-fade-in">
                    <div className="bg-blue-50 p-8 rounded-lg">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 transform transition-transform duration-500 hover:scale-105">
                            Our Story
                        </h2>
                        <div className="prose prose-lg max-w-none text-gray-700">
                            <p className="mb-4">
                                Our company was founded in 1990 by Mr. Basheer Ahmed Soomro, who laid the foundation with a vision to contribute in the field of construction and development. Through his dedication, hard work, and professional commitment, the company earned recognition for delivering quality projects, especially in the irrigation and infrastructure sector.
                            </p>
                            <p className="mb-4">
                                In continuation of his legacy, the company is now being led by Mr. Furqan Ali Soomro, who has expanded the scope of services and strengthened the company's reputation. Under his leadership, the company has undertaken major projects in irrigation, lining, small dams, and large-scale structures, ensuring timely delivery with quality and professionalism.
                            </p>
                            <p>
                                Today, we are proudly registered with the Pakistan Engineering Council (PEC) as a No Limit Construction Company, reflecting our capacity to execute projects of any scale with excellence.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Mission & Values */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 animate-on-scroll animate-fade-in">
                    <div className="animate-on-scroll animate-slide-up delay-100">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 transform transition-transform duration-500 hover:scale-105">
                            Our Mission
                        </h2>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            Our mission is to deliver sustainable and innovative engineering solutions in irrigation, water management, and infrastructure development. We are committed to excellence by combining technical expertise, innovation, and integrity to provide reliable, cost-effective, and high-quality services. With a focus on enhancing agricultural productivity and community well-being, we aim to contribute to national development while upholding the highest standards of safety and environmental responsibility.
                        </p>
                    </div>

                    <div className="animate-on-scroll animate-slide-up delay-200">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 transform transition-transform duration-500 hover:scale-105">
                            Core Values
                        </h2>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3 transform transition-transform duration-300 hover:scale-105 animate-on-scroll animate-slide-up delay-300">
                                <CheckCircle className="text-blue-600 mt-1" size={20} />
                                <div>
                                    <h3 className="font-semibold text-gray-900">Integrity</h3>
                                    <p className="text-gray-600">Conducting business with honesty and transparency in all our dealings.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3 transform transition-transform duration-300 hover:scale-105 animate-on-scroll animate-slide-up delay-400">
                                <CheckCircle className="text-blue-600 mt-1" size={20} />
                                <div>
                                    <h3 className="font-semibold text-gray-900">Excellence</h3>
                                    <p className="text-gray-600">Striving for the highest quality standards in every project we undertake.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3 transform transition-transform duration-300 hover:scale-105 animate-on-scroll animate-slide-up delay-500">
                                <CheckCircle className="text-blue-600 mt-1" size={20} />
                                <div>
                                    <h3 className="font-semibold text-gray-900">Innovation</h3>
                                    <p className="text-gray-600">Embracing modern techniques and sustainable practices in construction.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3 transform transition-transform duration-300 hover:scale-105 animate-on-scroll animate-slide-up delay-600">
                                <CheckCircle className="text-blue-600 mt-1" size={20} />
                                <div>
                                    <h3 className="font-semibold text-gray-900">Safety</h3>
                                    <p className="text-gray-600">Maintaining the highest standards of safety in all our operations.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Leadership */}
                <section className="animate-on-scroll animate-fade-in">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-12 transform transition-transform duration-500 hover:scale-105">
                        Leadership
                    </h2>
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-gray-50 p-8 rounded-lg text-center transform transition-transform duration-500 hover:scale-105 animate-on-scroll animate-slide-up delay-100">
                            <div className="w-32 h-32 bg-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center transform transition-transform duration-300 hover:scale-110">
                                <span className="text-white text-4xl font-bold">FA</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Furqan Ali Soomro</h3>
                            <p className="text-xl text-blue-600 mb-4">Managing Director & CEO</p>
                            <p className="text-gray-700 max-w-2xl mx-auto">
                                Leading the company with vision and expertise, Mr. Furqan Ali Soomro has expanded our capabilities and strengthened our position as a premier civil construction contractor. Under his leadership, we have successfully delivered numerous large-scale infrastructure projects while maintaining our commitment to quality and excellence.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;