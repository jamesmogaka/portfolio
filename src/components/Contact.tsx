import React from 'react';
import styled from 'styled-components';
import Map from './Map';
//
//Create customized container
const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
`;
//
//Create contact-me page component
//This section will contain a map and a contact form that will send mails to my account using emailjs
//TODO: Show the email form
const Contact = () => {
    return (
        <Section>
            <Map></Map>
        </Section>
    );
};

export default Contact;
