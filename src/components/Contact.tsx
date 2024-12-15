import React from 'react';
import Map from './Map';
import Form from './Form';

interface ContactProps {
    isDarkTheme: boolean;
}

const Contact: React.FC<ContactProps> = ({ isDarkTheme }) => {
    return (
        <div
            id="contact"
            className="w-full mt-[10px] flex flex-col md:h-screen md:flex-row justify-center items-center gap-2 md:gap-0 p-0 md:scroll-snap-align-start overflow-hidden"
        >
            <Form />
            <Map isDarkTheme={isDarkTheme} />
        </div>
    );
};

export default Contact;
