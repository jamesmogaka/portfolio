import React, { useRef } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';

//
//Dfine the props
interface Iprops {
    ref: React.RefObject<HTMLFormElement | null>;
    onSubmit: (e: Event) => void;
    children: React.ReactNode;
}
//
//Style the form to show in a column
const Container: React.FC<{ children: React.ReactNode }> = styled.div`
    form {
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
    //
    //Object that holds reference to the form element
    const form = useRef<HTMLFormElement | null>();

    //
    //Handle the sending of the email
    const sendEmail = (event: Event) => {
        //
        //Prevent default submission behaviour
        event.preventDefault();

        //Actual submmission of the email
        emailjs
            .sendForm(
                'service_vb3p78l',
                'template_rchgxzo',
                form.current! as HTMLFormElement,
                'EszBrUayaWueS2UsX'
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <Container>
            <form ref={form} onSubmit={sendEmail}>
                <Title>Contact me</Title>
                <input type="text" placeholder="Full Name" name="name" />
                <input type="email" placeholder="Email" name="email" />
                <textarea
                    id="message"
                    placeholder="Enter your message here!"
                    name="message"
                ></textarea>
                <button>Send</button>
            </form>
        </Container>
    );
};

export default Form;
