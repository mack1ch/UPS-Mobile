'use client';

import React, { createContext, useContext, useState } from 'react';

interface NavBarContextProps {
    activeElementId: number | null;
    setActiveElementId: (id: number | null) => void;
}

const NavBarContext = createContext<NavBarContextProps | undefined>(undefined);

export const NavBarProvider = ({ children }: { children: React.ReactNode }) => {
    const [activeElementId, setActiveElementId] = useState<number | null>(1);

    return (
        <NavBarContext.Provider value={{ activeElementId, setActiveElementId }}>
            {children}
        </NavBarContext.Provider>
    );
};

export const useNavBar = () => {
    const context = useContext(NavBarContext);
    if (context === undefined) {
        throw new Error('useNavBar must be used within a NavBarProvider');
    }
    return context;
};
