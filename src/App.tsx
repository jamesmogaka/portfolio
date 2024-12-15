import Contact from './components/Contact';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import About from './components/About';
import styled from 'styled-components';
import { Navbar } from './components/Navbar';
import bg from './assets/bg.svg';
import bgDark from './assets/bg_dark.svg';
import { Toaster } from '@/components/ui/toaster';
import { useEffect, useState } from 'react';
//
//Create a customized container
const Container = styled.div`
    height: auto;
    background: url(${bg}) center/cover no-repeat;
    scroll-behavior: smooth;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }

    @media (orientation: landscape) {
        background-position: center;
    }

    @media (min-width: 640px) {
        height: 100dvh;
        gap: 0;
        scroll-snap-type: y mandatory;
        & > * {
            scroll-snap-align: start;
            scroll-snap-stop: always;
        }
    }
`;

function App() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme((prev) => !prev);
    };

    //
    //Check the prefered mode that the user is using and update the application mode to match the user
    //prefered mode
    //
    //NB: useEffect hook runs code when the component fires loads. The empty array is to signify that
    //the check only happens once not on every render
    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.classList.add('dark');
            setIsDarkTheme(true);
        }
    }, []);
    //
    //The image src
    const logo_src: string = isDarkTheme ? 'src/assets/logo_dark.webp' : 'src/assets/logo_light.webp';
    //
    //The avilable pages for navigation
    const pages: Array<string> = ['Home', 'About', 'Portfolio', 'Contact'];
    //
    //The social platforms avilable for contact
    const contact: Array<{ platform: string; link: string }> = [
        { platform: 'Twitter', link: 'https://twitter.com/jay_more23' },

        { platform: 'GitHub', link: 'https://github.com/jamesmogaka' },

        {
            platform: 'Instagram',
            link: 'https://www.instagram.com/jay_more23/',
        },
        {
            platform: 'Linkedin',
            link: 'https://www.linkedin.com/in/james-mogaka-056b42217/',
        },
    ];
    return (
        <Container style={{ background: `url(${isDarkTheme ? bgDark : bg}) center/cover no-repeat` }}>
            <Navbar logo_src={logo_src} pages={pages} contact={contact} toggleTheme={toggleTheme} />
            <div className="flex-1 mb-[-20px] sm:mb-0">
                <Home />
            </div>
            <div className="flex-1 mb-[-20px] sm:mb-0">
                <About />
            </div>
            <div className="flex-1 mb-[-20px] sm:mb-0">
                <Portfolio />
            </div>
            <div className="flex-1">
                <Contact isDarkTheme={isDarkTheme} />
            </div>
            <Toaster />
        </Container>
    );
}

export default App;
