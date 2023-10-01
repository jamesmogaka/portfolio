import React from 'react';
import styled from 'styled-components';
import Map from './Map';
import Form from './Form';
//
//Create customized container
const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    Form {
        flex-basis: 10%;
    }
    Map {
        flex-basis: 80%;
    }
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
