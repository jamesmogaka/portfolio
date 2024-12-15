import { NavbarSocialLink } from './NavbarSocialLink';
//
// Interface for mobile menu props
interface NavbarMobileMenuProps {
    isMenuOpen: boolean;
    onClose: () => void;
    //
    // List of page names for mobile navigation
    pages: string[];
    //
    // Social media contact links
    contact: Array<{ platform: string; link: string }>;
}

export const NavbarMobileMenu: React.FC<NavbarMobileMenuProps> = ({
    isMenuOpen,
    onClose,
    pages,
    contact,
}) => {
    return (
        <>
            {/*
             * Overlay to dim background when mobile menu is open
             * Allows closing menu by clicking outside
             */}
            {isMenuOpen && (
                <div
                    className="fixed top-0 left-0 w-full h-full bg-black dark:bg-white opacity-50 z-40 md:hidden"
                    onClick={onClose}
                ></div>
            )}

            {/*
             * Mobile menu slide-in panel
             * Contains navigation links and social media icons
             * Animates from right side of screen
             */}
            <aside
                className={`fixed top-0 right-0 h-full w-60 bg-[#F0E8FF] dark:bg-gray-900 dark:border-gray-700 z-50 transform ${
                    isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                } transition-transform ease-in-out duration-300 flex flex-col justify-between rounded-l-xl md:hidden shadow-lg`}
            >
                {/* Mobile navigation links */}
                <nav className="flex flex-col gap-3 pt-6 px-4">
                    {pages.map((page, index) => (
                        <div
                            key={page}
                            // Add bottom border to all links except the last one
                            className={`relative ${
                                index !== pages.length - 1
                                    ? 'border-b border-gray-300 dark:border-gray-700'
                                    : ''
                            }`}
                        >
                            <a
                                href={'#' + page.toLowerCase()}
                                // Styling for mobile navigation links
                                className="block py-3 text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 group"
                                // Close menu when a link is clicked
                                onClick={onClose}
                            >
                                {page}
                            </a>
                        </div>
                    ))}
                </nav>

                {/* Social media links in mobile menu */}
                <li className="flex justify-evenly items-center border-t border-gray-300 dark:border-gray-700 pt-4 px-4">
                    {contact.map((social, index) => (
                        <li className="list-none" key={index}>
                            <NavbarSocialLink {...social} />
                        </li>
                    ))}
                </li>
            </aside>
        </>
    );
};
