import styled from 'styled-components';
import { Tile, Iprops } from './Tile';
import { Button } from './ui/button';
import * as icons from './Icons';
import { GitHub } from 'react-feather';
//
//Create a custom container
const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
    padding-bottom: 24px;
`;
//
//The props to pass to the tile component
const info: Array<Iprops> = [
    {
        title: 'LANGUAGES',
        items: [
            {
                name: 'Typescript',
                icon: <icons.TypeScript />,
            },
            {
                name: 'Python',
                icon: <icons.Python />,
            },
            {
                name: 'Kotlin',
                icon: <icons.Kotlin />,
            },
            {
                name: 'Rust',
                icon: <icons.Rust />,
            },
            {
                name: 'SQL',
                icon: <icons.Sql />,
            },
        ],
    },
    {
        title: 'FRAMEWORKS & lIBRARIES',
        items: [
            {
                name: 'React',
                icon: <icons.React />,
            },
            {
                name: 'Express',
                icon: <icons.Express />,
            },
            {
                name: 'Jetpack',
                icon: <icons.Jetpack />,
            },
            {
                name: 'Tailwind',
                icon: <icons.Tailwind />,
            },
        ],
    },
    {
        title: 'SKILLS & TOOLS',
        items: [
            {
                name: 'Git',
                icon: <icons.Git />,
            },
            {
                name: 'GitHub',
                icon: <GitHub />,
            },
            {
                name: 'Mysql',
                icon: <icons.Mysql />,
            },
            {
                name: 'Android',
                icon: <icons.Android />,
            },
            {
                name: 'Android Studio',
                icon: <icons.AndroidStudio />,
            },
        ],
    },
];
//
//About-me page component
const about = () => {
    return (
        <Section>
            <h1 className="text-xl">About me</h1>
            <p className="text-center max-w-xl p-4 rounded-lg shadow-md">
                Hello! I'm Mogaka, a dedicated software developer with a passion
                for crafting innovative solutions. My expertise spans various
                programming languages and technologies, enabling me to tackle
                diverse challenges in web and mobile development. Committed to
                delivering high-quality code, I thrive on turning ideas into
                reality. I value collaboration, believing that the best software
                emerges from a collective effort. Let's connect and bring your
                projects to life through the language of technology!
            </p>
            <Button variant="ghost">Resume</Button>
            <div className="flex gap-8 ">
                {info.map((tile) => (
                    <Tile title={tile.title} items={tile.items}></Tile>
                ))}
            </div>
        </Section>
    );
};

export default about;
