import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(true);
    
    useEffect(() => {
        document.body.classList.toggle('dark', isDark);
        document.body.classList.toggle('light', !isDark);
    }, [isDark]);
    
    const toggleTheme = () => setIsDark(!isDark);
    
    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
        {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider');
    }
    return context;
};