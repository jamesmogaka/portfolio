import React from 'react';
import styled from 'styled-components';
//
//Style the form to show in a column
const Container: React.FC<{ children: React.ReactNode }> = styled.form`
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    * {
        border-radius: 5px;
    }
    input {
        text-align: center;
        width: 60%;
        padding: 20px;
        border: none;
        background-color: #ecebeb;
    }
    textarea {
        text-align: center;
        width: 60%;
        padding: 20px;
        height: 80px;
        border: none;
        background-color: #ecebeb;
    }
    button {
        height: 30px;
        width: 50%;
        align-self: center;
        border: none;
        border-radius: 10px;
    }
`;
const Title: React.FC<{ children: React.ReactNode }> = styled.h1`
    font-weight: 200;
    padding: 0;
    margin: 0;
`;
//
//This is the form that people visiting my portfolio will use to send me emails
//TODO: Style the button
const Form: React.FC = () => {
    return (
        <Container>
            <Title>Contact me</Title>
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email" />
            <textarea
                id="message"
                placeholder="Enter your message here!"
            ></textarea>
            <button>Send</button>
        </Container>
    );
};

export default Form;
