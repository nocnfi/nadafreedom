import React, { useEffect } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
    // Scroll ke atas saat halaman dibuka
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const sections = [
        {
            title: "1. Information We Collect",
            content: "We collect information you provide directly to us, such as when you create an account, subscribe to our home packages, or contact customer support. This may include your name, email address, phone number, physical address, and payment information. We also automatically collect technical data regarding your network usage to ensure stability and quality of service."
        },
        {
            title: "2. How We Use Your Information",
            content: "We use the information we collect to provide, maintain, and improve our fiber network services. This includes processing transactions, identifying network issues, sending you technical notices or updates, and responding to your comments and questions. We do not sell your personal data to third parties."
        },
        {
            title: "3. Network Security & Data Protection",
            content: "We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security."
        },
        {
            title: "4. Cookies and Tracking Technologies",
            content: "We use cookies and similar tracking technologies to track the activity on our web service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service."
        },
        {
            title: "5. Third-Party Service Providers",
            content: "We may employ third-party companies and individuals to facilitate our Service (e.g., payment processors, maintenance services). These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose."
        },
        {
            title: "6. Your Data Rights",
            content: "You have the right to access, update, or delete the information we have on you. Whenever made possible, you can access, update, or request deletion of your Personal Data directly within your account settings section or by contacting us."
        }
    ];

    return (
        <div className="w-full min-h-screen bg-[#F8FAFC] font-['Poppins'] flex flex-col">
            {/* Navbar */}
            <Navbar />

            <main className="flex-grow pt-44 pb-32">
                <div className="container mx-auto px-4 max-w-5xl">
                    
                    {/* Header Card */}
                    <div className="bg-white rounded-[50px] shadow-sm border border-gray-100 p-10 md:p-20 relative overflow-hidden mb-16">
                        {/* Dekorasi Background */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full translate-x-32 -translate-y-32 -z-10"></div>
                        
                        <div className="mb-10">
                            <span className="bg-green-100 text-green-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block">
                                Legal Document
                            </span>
                            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-[1.1]">
                                Privacy Policy
                            </h1>
                            <p className="text-gray-400 font-medium italic">
                                Last Updated: January 1, 2026
                            </p>
                        </div>

                        <div className="relative">
                            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-green-500 rounded-full"></div>
                            <p className="pl-8 text-gray-600 leading-relaxed text-xl font-medium">
                                At PT Nada Freedom Indonesia (NFI), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our fiber network services and website.
                            </p>
                        </div>
                    </div>

                    {/* Content Sections */}
                    <div className="space-y-12">
                        {sections.map((section, index) => (
                            <div key={index} className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                    {section.title}
                                </h2>
                                <p className="text-gray-500 leading-relaxed text-justify">
                                    {section.content}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Contact Section */}
                    <div className="mt-20 text-center">
                        <p className="text-gray-500 mb-6">
                            If you have any questions about this Privacy Policy, please contact us:
                        </p>
                        <a href="mailto:nadafreedom@nfi.net.id" className="inline-flex items-center justify-center px-8 py-4 bg-[#1A1A1A] text-white font-bold rounded-full hover:bg-gray-800 transition-colors">
                            Contact Privacy Team
                        </a>
                    </div>

                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;