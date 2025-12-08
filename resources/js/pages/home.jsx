// resources/js/pages/home.jsx

import React from 'react';

import Navbar from '@/components/navbar';
import HeroSection from '@/components/HeroSection';
import SolutionsSection from '@/components/SolutionsSection';
import IntersectionSolutionsSection from '@/components/InternetSolutionsSection';
import CoverageSection from '@/components/CoverageSection';
import NewsSection from '@/components/NewsSection';
import PartnersSection from '@/components/PartnersSection';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <div className="min-h-screen bg-white font-sans text-gray-800">

            <Navbar />

            <main className="pt-0">
                <HeroSection />
                <SolutionsSection />
                <IntersectionSolutionsSection />
                <CoverageSection />
                <NewsSection />
                <PartnersSection />
            </main>

            <Footer />
        </div>
    );
}
