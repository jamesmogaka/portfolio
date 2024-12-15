// NavbarSocialLink.tsx
// Design the buttons to navigate to various social platforms
import { FC } from 'react';
import { Button } from '@/components/ui/button';
import { Instagram, Twitter, GitHub, Linkedin } from 'react-feather';

// Interface defining the structure of social link props
export interface SocialLinkProps {
    // Social platform name (e.g., "Twitter", "GitHub")
    platform: string;
    // URL link to the social media profile
    link: string;
}

export const NavbarSocialLink: FC<SocialLinkProps> = ({ platform, link }) => {
    // Mapping of social platform names to their respective icons
    // Allows dynamic icon selection based on platform
    const platform_icons: Record<string, JSX.Element> = {
        Twitter: <Twitter />,
        Instagram: <Instagram />,
        GitHub: <GitHub />,
        Linkedin: <Linkedin />,
        // Easily extendable for additional platforms
    };

    return (
        <Button variant="ghost" size="icon" className="">
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                // Styling for social link buttons with hover and theme-aware colors
                className="block p-2 rounded-full text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
                {platform_icons[platform]}
            </a>
        </Button>
    );
};
