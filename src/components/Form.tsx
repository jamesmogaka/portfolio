import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useToast } from '@/components/ui/use-toast';

//
// This is the form that people visiting my portfolio will use to send me emails
const Form: React.FC = () => {
    //
    // On success state
    const [is_successfull, set_success] = useState(false);
    //
    // Object that holds reference to the form element
    const form = useRef<HTMLFormElement>(null);
    //
    // Toast hook
    const { toast } = useToast();
    //
    // Handle the sending of the email
    const send_email = (event: React.FormEvent<HTMLFormElement>) => {
        //
        // Prevent default submission behaviour
        event.preventDefault();
        //
        // Actual submission of the email
        emailjs.sendForm('service_vb3p78l', 'template_rchgxzo', form.current!, 'EszBrUayaWueS2UsX').then(
            (result) => {
                //
                // Alert the user on the success
                toast({
                    title: result.text,
                    description: 'Message was sent successfully',
                });
                //
                // Reflect operation was successful
                set_success(!is_successfull);
                form.current?.reset();
            },
            (error) => {
                toast({
                    style: { backgroundColor: 'green' },
                    variant: 'destructive',
                    title: 'Uh oh! Something went wrong.',
                    description: error.message,
                });
            },
        );
    };

    return (
        <div className="flex justify-center items-center">
            <form
                ref={form}
                onSubmit={send_email}
                className="w-[500px] flex flex-col justify-center items-center gap-[30px]"
            >
                <h1 className="font-extralight p-0 m-0">Contact me</h1>
                <input
                    type="text"
                    placeholder="Full Name"
                    name="name"
                    className="text-center w-[60%] p-5 border-none bg-[#d3d7d7] rounded-md"
                />
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="text-center w-[60%] p-5 border-none bg-[#d3d7d7] rounded-md"
                />
                <textarea
                    id="message"
                    placeholder="Enter your message here!"
                    name="message"
                    className="text-center w-[60%] p-5 h-20 border-none bg-[#d3d7d7] rounded-md"
                ></textarea>
                <button className="h-[30px] w-[50%] self-center border-none rounded-[10px] bg-[#2986f0]">Send</button>
            </form>
        </div>
    );
};

export default Form;
