import React, { useState } from 'react';
import { Button } from './ui/button';
import { Menu } from 'react-feather';

const MobileNav: React.FC<{
    pages: Array<string>;
    socials: Array<React.ReactNode>;
}> = ({ pages, socials }) => {
    //
    //
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    return (
        <>
            <Button
                variant="ghost"
                className="fixed top-0 right-0 z-50 rounded sm:hidden"
                onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            >
                <Menu />
            </Button>
            {isDrawerOpen && (
                <div
                    className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40 sm:hidden"
                    onClick={() => setIsDrawerOpen(false)}
                ></div>
            )}
            <aside
                className={`fixed top-0 right-0 h-full w-60 bg-[#F0E8FF] z-50 transform ${
                    isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
                } transition-transform ease-in-out duration-300 flex flex-col justify-between rounded-l-xl sm:hidden`}
            >
                <nav className="flex items-center flex-col gap-3">
                    {pages.map((page) => {
                        return (
                            <a
                                href={'#' + page.toLowerCase()}
                                className="relative group"
                                onClick={() => setIsDrawerOpen(false)}
                            >
                                {page}
                                <span className="block h-1 bg-blue-500 absolute left-0 bottom-0 w-full transform scale-x-0 transition-transform ease-in-out duration-300 group-hover:scale-x-100"></span>
                            </a>
                        );
                    })}
                </nav>
                <div className="flex justify-evenly">
                    {socials.map((social) => social)}
                </div>
            </aside>
        </>
    );
};

export default MobileNav;
