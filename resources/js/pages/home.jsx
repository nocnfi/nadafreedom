import React from 'react';
import { Head } from '@inertiajs/react';
// Pastikan path import sesuai dengan lokasi file Anda
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
        <>
            {/* Tag Head untuk SEO dan judul halaman */}
            <Head title="Home - NFI Best Quality Internet" />
            
            <div className="min-h-screen bg-white font-sans text-gray-800">
                {/* 1. Komponen Header/Navbar (Sticky) */}
                <Navbar />

                {/* 2. Main Content (Section 1: Hero Section) */}
                <main className="pt-0"> 
                    <HeroSection />
                    <SolutionsSection /> 
                    <IntersectionSolutionsSection />
                    <CoverageSection />
                    <NewsSection />
                    <PartnersSection />
                    
                    {/* Di sini nanti Anda akan menambahkan Section 2, Section 3, dst. */}
                </main>
                
                <Footer />

            </div>
        </>
    );
}