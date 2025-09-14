import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Menu, X, CheckCircle, Award, Users, Calendar } from 'lucide-react';
import bgImage from "../assets/TIP_03.jpg";
import bgImage1 from "../assets/1.png";
import bgImage2 from "../assets/2.jpg";
import bgImage3 from "../assets/3.png";
const Home = () => {
    return (
        <div>
            {/* Hero Section */}

            <section
                style={{ backgroundImage: `url(${bgImage})` }}
                className="relative text-white py-40 bg-cover bg-center"
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                {/* Content */}
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">M/S HBAS & CO</h1>
                    <p className="text-xl md:text-2xl mb-4 text-white">
                        Excellence in Civil Construction & Infrastructure Development
                    </p>
                    <p className="text-lg mb-8 text-white max-w-3xl mx-auto">
                        Leading civil contractor specializing in irrigation systems, water management,
                        and large-scale infrastructure projects across Pakistan.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/projects"
                            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                        >
                            View Our Projects
                        </Link>
                        <Link
                            to="/contact"
                            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                        >
                            Get Quote
                        </Link>
                    </div>
                </div>
            </section>


            {/* Features Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Why Choose HBAS & CO?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Over 30 years of experience in delivering quality construction projects with excellence and professionalism.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="bg-gradient-to-br from-blue-600 to-blue-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="text-white " size={32} />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Assurance</h3>
                            <p className="text-gray-600">Committed to highest standards of quality in every project we undertake.</p>
                        </div>

                        <div className="text-center">
                            <div className="bg-gradient-to-br from-blue-600 to-blue-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Award className="text-white" size={32} />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">PEC Registered</h3>
                            <p className="text-gray-600">Officially registered with Pakistan Engineering Council as No Limit Construction Company.</p>
                        </div>

                        <div className="text-center">
                            <div className="bg-gradient-to-br from-blue-600 to-blue-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="text-white" size={32} />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Team</h3>
                            <p className="text-gray-600">Professional team with extensive experience in civil construction and engineering.</p>
                        </div>

                        <div className="text-center">
                            <div className="bg-gradient-to-br from-blue-600 to-blue-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Calendar className="text-white" size={32} />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Timely Delivery</h3>
                            <p className="text-gray-600">Ensuring projects are completed on time with efficiency and precision.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Preview */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
                        <p className="text-xl text-gray-600">Comprehensive construction solutions for government and private sector projects</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div
                            className="relative p-6 rounded-lg shadow-md text-white bg-cover bg-center"
                            style={{ backgroundImage: `url(${bgImage1})` }}
                        >
                            {/* Overlay for readability */}
                            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></div>

                            {/* Content above overlay */}
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
                            className="relative p-6 rounded-lg shadow-md text-white bg-cover bg-center"
                            style={{ backgroundImage: `url(${bgImage2})` }}
                        >
                            {/* Overlay for readability */}
                            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></div>

                            {/* Content above overlay */}
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
                            className="relative p-6 rounded-lg shadow-md text-white bg-cover bg-center"
                            style={{ backgroundImage: `url(${bgImage3})` }}
                        >
                            {/* Overlay for readability */}
                            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></div>

                            {/* Content above overlay */}
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
        </div>
    );
};

export default Home