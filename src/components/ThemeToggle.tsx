import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import React from 'react';

interface ThemeToggleProps {
    toggleTheme: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ toggleTheme }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const isDark = document.documentElement.classList.contains('dark');
        setIsDarkMode(isDark);
    }, []);

    const handleThemeToggle = () => {
        setIsDarkMode((prev) => !prev);
        document.documentElement.classList.toggle('dark');
        toggleTheme();
    };

    return (
        <Button onClick={handleThemeToggle} className="p-2 rounded-lg" aria-label="Toggle theme" variant="ghost">
            {isDarkMode ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5 text-gray-700" />}
        </Button>
    );
};
