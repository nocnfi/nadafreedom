import React from 'react';

const FolderContainer = ({ title, children }) => {
    return (
        <div className="folder-container">
            
            {/* BAGIAN TAB JUDUL */}
            <div className="flex items-end relative z-20">
                <div className="folder-tab-header">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-blue-600 tracking-tight whitespace-nowrap">
                        {title}
                    </h2>
                </div>
            </div>

            {/* BAGIAN BODY KONTEN */}
            <div className="folder-content-body">
                {children}
            </div>

        </div>
    );
};

export default FolderContainer;