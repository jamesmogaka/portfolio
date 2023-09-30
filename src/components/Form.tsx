import React from 'react';

//
//This is the form that people visiting my portfolio will use to send me emails
//TODO: Style the form
const Form = () => {
    return (
        <div>
            <form>
                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="Message" />
                <button>Contact Me</button>
            </form>
        </div>
    );
};

export default Form;
