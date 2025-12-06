import React from 'react';
import { Head } from '@inertiajs/react';
// Pastikan path import sesuai dengan lokasi file Anda
import Navbar from '@/components/navbar';
import HeroSection from '@/components/HeroSection'; 
import SolutionsSection from '@/components/SolutionsSection';
import IntersectionSolutionsSection from '@/components/InternetSolutionsSection';

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
                    
                    {/* Di sini nanti Anda akan menambahkan Section 2, Section 3, dst. */}
                </main>

                {/* 3. Komponen Footer (Jika sudah ada) */}
            </div>
        </>
    );
}