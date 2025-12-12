import React from 'react';
import FolderContainer from './FolderContainer'; 
import HistorySection from './HistorySection';
import VisionSection from './VisionSection';
import MissionSection from './MissionSection';
import ValuesSection from './ValuesSection';

const AboutContent = ({ activeTab }) => {
    
    const titles = {
        we: "Our History",
        vision: "Our Vision",
        mission: "Our Mission",
        values: "Our Values"
    };

    return (
        <div className="mt-16 w-full max-w-7xl mx-auto px-4 md:px-8">
            
            {/* Panggil Container Folder */}
            <FolderContainer title={titles[activeTab]}>
                
                {/* Render Konten di dalamnya */}
                {activeTab === 'we' && <HistorySection />}
                {activeTab === 'vision' && <VisionSection />}
                {activeTab === 'mission' && <MissionSection />}
                {activeTab === 'values' && <ValuesSection />}
                
            </FolderContainer>

        </div>
    );
};

export default AboutContent;