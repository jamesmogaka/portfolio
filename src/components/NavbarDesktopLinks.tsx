// NavbarDesktopLinks.tsx
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';

// Interface for desktop navigation links props
interface NavbarDesktopLinksProps {
    // List of page names to be displayed in navigation
    pages: string[];
}

export const NavbarDesktopLinks: React.FC<NavbarDesktopLinksProps> = ({ pages }) => (
    // Navigation menu for desktop view
    // Hidden on smaller screens, visible from 'sm' breakpoint
    <NavigationMenu className="hidden sm:block">
        <NavigationMenuList>
            {pages.map((page) => (
                <NavigationMenuItem key={page}>
                    <Button variant="ghost">
                        <NavigationMenuLink
                            // Create href by converting page name to lowercase
                            // Allows smooth scrolling to corresponding section
                            href={'#' + page.toLowerCase()}
                            className="text-gray-700 dark:text-gray-200 transition-colors duration-200"
                        >
                            {page}
                        </NavigationMenuLink>
                    </Button>
                </NavigationMenuItem>
            ))}
        </NavigationMenuList>
    </NavigationMenu>
);
