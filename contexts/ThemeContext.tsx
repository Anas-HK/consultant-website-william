'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark';
type ColorScheme = 'bain' | 'talsom';

interface ThemeContextType {
  theme: Theme;
  colorScheme: ColorScheme;
  toggleTheme: () => void;
  toggleColorScheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');
  const [colorScheme, setColorScheme] = useState<ColorScheme>('talsom');

  useEffect(() => {
    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    const savedColorScheme = localStorage.getItem('colorScheme') as ColorScheme | null;
    
    if (savedTheme) {
      setTheme(savedTheme);
    }
    if (savedColorScheme) {
      setColorScheme(savedColorScheme);
    }
  }, []);

  useEffect(() => {
    // Update document class for dark mode
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    // Update document attribute for color scheme
    document.documentElement.setAttribute('data-color-scheme', colorScheme);
    localStorage.setItem('colorScheme', colorScheme);
  }, [colorScheme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const toggleColorScheme = () => {
    setColorScheme(prev => prev === 'bain' ? 'talsom' : 'bain');
  };

  return (
    <ThemeContext.Provider value={{ theme, colorScheme, toggleTheme, toggleColorScheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
