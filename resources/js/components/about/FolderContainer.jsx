import React from 'react';

const FolderContainer = ({ title, children }) => {
    return (
        <div className="folder-container">
            
            {/* Header Area */}
            <div className="flex items-end relative z-20 pl-4 pr-0 w-full">
                
                {/* 1. JUDUL (KIRI) */}
                <h2 className="text-4xl md:text-5xl font-extrabold text-blue-600 tracking-tight mb-2 drop-shadow-sm whitespace-nowrap shrink-0">
                    {title}
                </h2>

                {/* 2. TAB SHAPE (KANAN - KOSONG) */}
                {/* Kita biarkan div ini kosong.
                    CSS akan otomatis merender bentuk tab memanjang. */}
                <div className="folder-tab-header flex-1">
                </div>
                
            </div>

            {/* 3. BAGIAN BODY */}
            <div className="folder-content-body">
                {children}
            </div>

        </div>
    );
};

export default FolderContainer;