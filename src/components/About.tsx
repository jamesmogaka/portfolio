import { Tile, Iprops } from './Tile';
import { Button } from './ui/button';
import * as icons from './Icons';

import { GitHub } from 'react-feather';
// import bg from '../assets/shape.svg';
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
        <div
            id="about"
            className=" box-border overflow-hidden h-screen snap-center pt-[10%] pb-6 flex flex-col gap-2 justify-center items-center sm:gap-6 sm:pt-[5%]"
        >
            <h1 className="text-lg sm:text-xl">About me</h1>
            <p className="text-center max-w-xl p-4 ml-3 mr-3 rounded-lg shadow-md backdrop-filter backdrop-blur-sm text-sm sm:text-base">
                Mogaka is an enthusiastic software developer skilled in various
                programming languages and technologies, specializing in web and
                mobile development. Committed to delivering high-quality code,
                Mogaka enjoys transforming ideas into reality and values
                collaboration in software development. Ready to connect and
                contribute to bringing your projects to life through technology.
            </p>
            <Button variant="ghost">Resume</Button>
            <div className=" ml-3 mr-3 flex gap-8 flex-row flex-wrap0 sm:flex-nowrap ">
                {info.map((tile) => (
                    <Tile title={tile.title} items={tile.items}></Tile>
                ))}
            </div>
        </div>
    );
};

export default about;
