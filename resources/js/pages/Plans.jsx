import React from 'react';

// Import Layout
import Navbar from '../components/navbar';
import Footer from '../components/Footer';

// Import Component Header Plans yang baru dibuat
import PlansSection from '../components/PlansSection';

// (Opsional) Import Component Harga yang sudah Anda miliki, misalnya:
// import PricingCardSection from '../Components/PricingCardSection';

const Plans = () => {
    return (
        <div className="bg-white min-h-screen flex flex-col">
            
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <main className="flex-grow pt-20"> 
                
                {/* 1. Header Section (Ilustrasi + Search) */}
                <PlansSection />

                {/* 2. Di sini nanti tempat memanggil Component Harga/Plan yang sudah Anda miliki */}
                {/* <PricingCardSection /> */}

            </main>

            {/* Footer */}
            <Footer />
            
        </div>
    );
};

export default Plans;