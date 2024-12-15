// Navbar.tsx (Main Component)
import { ThemeToggle } from './ThemeToggle';
import { NavbarDesktopLinks } from './NavbarDesktopLinks';
import { NavbarSocialLink } from './NavbarSocialLink';
import { NavbarMobileMenu } from './NavbarMobileMenu';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import React from 'react';

// Interface for the main Navbar component props
export interface NavbarProps {
    // Path to the logo image
    logo_src: string;
    // List of page names for navigation
    pages: string[];
    // Social media contact links
    contact: Array<{ platform: string; link: string }>;
    toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ logo_src, pages, contact, toggleTheme }) => {
    // State to track mobile menu visibility
    // Determines whether the sliding menu is open or closed
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle mobile menu visibility
    // Switches between open and closed states
    const toggle_menu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <>
            {/*
             * Navigation bar that remains visible throughout the page
             * Has three main sections:
             * 1. Logo
             * 2. Navigation links to various pages
             * 3. Social media links and theme toggle
             */}
            <nav
                className={`
                  fixed top-0 left-0 right-0 z-50 bg-[rgb(240,232,255)] dark:bg-[rgb(1,8,22)] 
                  bg-opacity-60 backdrop-blur-sm flex flex-row w-full gap-5 items-center justify-between 
                  ${isMenuOpen ? 'hidden' : ''}
                `}
            >
                {/* Logo section */}
                <img src={logo_src} alt="Logo" className="h-full w-10 rounded-[20%]" />

                {/* Desktop navigation links */}
                <div className="flex flex-[6] justify-center">
                    <NavbarDesktopLinks pages={pages} />
                </div>

                {/* Social links and theme toggle */}
                <div className="flex items-center space-x-4">
                    <ThemeToggle toggleTheme={toggleTheme} />
                    <ul className="list-none flex flex-row justify-evenly">
                        {contact.map((social, index) => (
                            <li key={index} className="hidden sm:block">
                                <NavbarSocialLink {...social} />
                            </li>
                        ))}
                    </ul>
                </div>
                {/*
                 * Hambager icon that controls the visibility of the mobile menu
                 * Only shown for smaller devices (mobile view)
                 */}
                <Button className="md:hidden p-2" onClick={toggle_menu} aria-label="Toggle menu" variant="ghost">
                    <Menu className="h-6 w-6 text-gray-700 dark:text-gray-200" />
                </Button>
            </nav>
            {/* Mobile menu toggle */}
            <NavbarMobileMenu
                isMenuOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
                pages={pages}
                contact={contact}
            />
        </>
    );
};
