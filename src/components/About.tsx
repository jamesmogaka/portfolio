import React from 'react';
import styled from 'styled-components';
//
//Create a custom container
const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    padding-top: 50px;
`;
//
//About-me page component
const about = () => {
    return (
        <Section>
            <h1>About me</h1>
            <p></p>
            <div></div>
        </Section>
    );
};

export default about;
