import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Menu, X, CheckCircle, Award, Users, Calendar } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Irrigation Systems Development",
      description: "Complete design and construction of irrigation infrastructure including canals, water channels, distribution networks, and modern irrigation systems to enhance agricultural productivity.",
      features: ["Canal Construction", "Water Distribution Systems", "Drip Irrigation", "Sprinkler Systems", "Drainage Solutions"]
    },
    {
      title: "Water Management Solutions",
      description: "Comprehensive water management projects including dams, reservoirs, water treatment facilities, and flood control systems to ensure sustainable water resource utilization.",
      features: ["Dam Construction", "Reservoir Development", "Flood Control", "Water Treatment Plants", "Pumping Stations"]
    },
    {
      title: "Infrastructure Development",
      description: "Large-scale infrastructure projects encompassing roads, bridges, culverts, and civil structures that form the backbone of modern development.",
      features: ["Road Construction", "Bridge Building", "Culvert Installation", "Civil Structures", "Urban Infrastructure"]
    },
    {
      title: "Lining & Waterproofing",
      description: "Specialized services in canal lining, water channel protection, and waterproofing solutions to prevent water loss and ensure structural integrity.",
      features: ["Canal Lining", "Concrete Lining", "Waterproof Membranes", "Structural Protection", "Seepage Control"]
    },
    {
      title: "Government Contracting",
      description: "Trusted partner for government projects with proven track record in delivering public sector infrastructure projects on time and within budget.",
      features: ["Public Sector Projects", "Government Tenders", "Compliance Management", "Quality Assurance", "Timely Delivery"]
    },
    {
      title: "Project Management",
      description: "End-to-end project management services ensuring efficient execution, quality control, and timely completion of construction projects of all scales.",
      features: ["Project Planning", "Quality Control", "Resource Management", "Timeline Management", "Risk Assessment"]
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive civil construction and infrastructure development services tailored to meet the diverse needs of our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="text-blue-600 flex-shrink-0" size={16} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-blue-600 text-white p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-blue-100 mb-6">
            Contact us today to discuss your construction and infrastructure development needs.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block"
          >
            Get Free Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services