import React from 'react';
import { useTranslation } from 'react-i18next'; // Import hook

const TeamMemberCard = ({ member }) => {
    const { t } = useTranslation();
    
    const staticClass = "absolute inset-0 w-full h-full object-contain object-center transition-all duration-300 group-hover:opacity-0";
    const gifClass = "absolute inset-0 w-full h-full object-cover object-top opacity-0 group-hover:opacity-100 transform scale-125 transition-all duration-300";

    return (
        <div className="bg-white rounded-[30px] p-6 shadow-xl shadow-purple-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center cursor-pointer group">
            
            {/* CONTAINER LINGKARAN */}
            <div className="relative w-32 aspect-square mb-5 rounded-full overflow-hidden bg-blue-50 border-4 border-white shadow-lg">
                <img 
                    src={member.static} 
                    alt={member.name}
                    className={staticClass}
                />
                <img 
                    src={member.gif} 
                    alt={`${member.name} gif`}
                    className={gifClass} 
                />
            </div>
            
            {/* INFO TEXT */}
            <h4 className="font-bold text-gray-800 text-base mb-1 group-hover:text-blue-600 transition-colors">
                {member.name}
            </h4>
            <p className="text-xs text-gray-500 mb-2">{member.email}</p>
            <span className="px-3 py-1 rounded-full bg-gray-100 text-[10px] font-bold text-gray-500 uppercase tracking-wider group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                {/* Terjemahkan role berdasarkan id/kunci role */}
                {t(`team.roles.${member.role.toLowerCase()}`)}
            </span>
        </div>
    );
};

const TeamSection = () => {
    const { t } = useTranslation(); // Inisialisasi hook

    // DATA TEAM (Gunakan lowercase untuk role agar mudah dipetakan ke JSON)
    const teamMembers = [
        { id: 1, name: "Jonathan", email: "jxxa@nfi.net.id", role: "noc", static: "/images/team/j-static.png", gif: "/images/team/j.gif" },
        { id: 2, name: "Ahmad", email: "kaisloth@nfi.net.id", role: "engineer", static: "/images/team/a-static.png", gif: "/images/team/a.gif" },
        { id: 3, name: "Rio", email: "asyuraa@nfi.net.id", role: "support", static: "/images/team/r1-static.png", gif: "/images/team/r1.gif" },
        { id: 4, name: "Resti", email: "Resti@nfi.net.id", role: "developer", static: "/images/team/r-static.png", gif: "/images/team/r.gif" },
        { id: 5, name: "Cinta", email: "cinta@nfi.net.id", role: "marketing", static: "/images/team/c-static.png", gif: "/images/team/c.gif" },
    ];

    return (
        <div className="text-center mb-12 px-4 font-['Poppins']">
             <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight custom-text-color">
                {t('team.title')}
             </h3>
             <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto mb-12">
                {t('team.subtitle')}
             </p>
             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {teamMembers.map((member) => (
                    <TeamMemberCard key={member.id} member={member} />
                ))}
             </div>
        </div>
    );
};

export default TeamSection;