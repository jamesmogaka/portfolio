import React from 'react';
import styled from 'styled-components';
//
//Style the form to show in a column
const Container = styled.form`
    display: flex;
    flex-direction: column;
`;
//
//This is the form that people visiting my portfolio will use to send me emails
//TODO: Style the form
const Form = () => {
    return (
        <>
            <Container>
                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder="Email" />
                <textarea
                    id="message"
                    placeholder="Enter your message here!"
                ></textarea>
                <button>Contact Me</button>
            </Container>
        </>
    );
};

export default Form;
