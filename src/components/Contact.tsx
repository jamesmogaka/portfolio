import React from 'react';
import styled from 'styled-components';
import Map from './Map';
import Form from './form';
//
//Create customized container
const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
`;
//
//Create contact-me page component
//This section will contain a map and a contact form that will send mails to my account using emailjs
//TODO: Style the contact page
const Contact = () => {
    return (
        <Section>
            <Form></Form>
            <Map></Map>
        </Section>
    );
};

export default Contact;
