import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';

// Import 3 Komponen yang sudah dipecah
import BusinessHeader from '../components/business/BusinessHeader';
import BusinessSolutions from '../components/business/BusinessSolutions';
import BusinessContact from '../components/business/BusinessContact';

const Business = () => {
    return (
        <>
            <Navbar />

            <main className="font-['Poppins'] bg-white">
                
                {/* 1. Header (Aurora) */}
                <BusinessHeader />

                {/* 2. Solutions (List) */}
                <BusinessSolutions />

                {/* 3. Contact (Monitor + Asset SVG Anda) */}
                <BusinessContact />

            </main>
            
            <Footer />
        </>
    );
};

export default Business;