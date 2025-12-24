import React from 'react';
import { useTranslation } from 'react-i18next';
import FolderContainer from './FolderContainer';
import HistorySection from './HistorySection';
import VisionSection from './VisionSection';
import MissionSection from './MissionSection';
import ValuesSection from './ValuesSection';

const AboutContent = ({ activeTab }) => {
    const { t } = useTranslation();
    
    // Pastikan path sesuai dengan 'about_page.tabs' di JSON Anda
    const titles = {
        we: t('about_page.tabs.we'), // Mengambil "Sejarah Kami"
        vision: t('about_page.tabs.vision'), // Mengambil "Visi Kami"
        mission: t('about_page.tabs.mission'), // Mengambil "Misi Kami"
        values: t('about_page.tabs.values') // Mengambil "Nilai Kami"
    };

    return (
        <div className="mt-16 w-full max-w-7xl mx-auto px-4 md:px-8">
            <FolderContainer title={titles[activeTab]}>
                {activeTab === 'we' && <HistorySection />}
                {activeTab === 'vision' && <VisionSection />}
                {activeTab === 'mission' && <MissionSection />}
                {activeTab === 'values' && <ValuesSection />}
            </FolderContainer>
        </div>
    );
};

export default AboutContent;