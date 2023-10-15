import React from 'react';
import styled from 'styled-components';
import Map from './Map';
import Form from './Form';
//
//Create customized container
const Section: React.FC<{ children: React.ReactNode }> = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
`;
//
//Style the form side
const Left: React.FC<{ children: React.ReactNode }> = styled.div`
    flex: 1;
`;
//
//Style the map
const Right: React.FC<{ children: React.ReactNode }> = styled.div`
    flex: 1;
`;
//
//Create contact-me page component
//This section will contain a map and a contact form that will send mails to my account using emailjs
//TODO: Style the contact page
const Contact: React.FC = () => {
    return (
        <Section>
            <Left>
                <Form></Form>
            </Left>
            <Right>
                <Map></Map>
            </Right>
        </Section>
    );
};

export default Contact;
