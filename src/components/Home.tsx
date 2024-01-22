import styled from 'styled-components';
// import CV from "../assets/CV (1).pdf";
import profile from '../assets/profile_bg.png';
//
// Style the text conteiner
const TextContainer = styled.div`
    flex: 2;
    margin-right: 20px;

    // The css styling to my page
    h1 {
        font-size: 40px;
        color: #333;
        span {
            color: blue;
            animation: typing 10s infinite steps(20, end);
            white-space: nowrap;
            overflow: hidden;
            display: inline-block;
            position: relative;
            vertical-align: middle;
        }
    }
    //
    //Indenting the h1 immedietly after a h1
    h1 + h1 {
        margin-left: 70px;
        border-right: 4px solid #000;
        margin-bottom: 2px;
        animation: cursor 1s infinite step-end,
            typing 10s infinite steps(20, end);
        white-space: nowrap;
        overflow: hidden;
    }
    button:hover {
        box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
            0 17px 50px 0 rgba(0, 0, 0, 0.19);
    }
    //Define the animations
    @keyframes typing {
        0%,
        90%,
        100% {
            width: 0ch;
        }
        30%,
        80% {
            width: 17ch;
        }
    }

    @keyframes cursor {
        0%,
        100% {
            border-color: transparent;
        }

        50% {
            border-color: #000;
        }
    }
`;
//
//Create a home page for the entire portfolio
const Home = () => {
    return (
        //
        // The home section that displays the home page
        <div
            id="home"
            className=" h-dvh snap-center flex flex-col pt-[10%] gap-6 justify-center items-center sm:flex-row sm:justify-center sm:items-center sm:pt-[5%]"
        >
            <img
                src={profile}
                alt="My picture"
                className=" sm:max-w-full max-w-[60%] h-[50%] object-cover rounded-[50%] transition-all duration-300 ease-in-out transform hover:scale-110 left-44 flex-grow-0"
            />

            <div className=" flex-grow">
                <h3>Hello,</h3>
                <h1>
                    I'm<span className=""> &nbsp;James Mogaka.</span>
                </h1>
                <h1 className="">a digital craftsman.</h1>
                <h1 className="">a software engineer.</h1>

                <button className=" bg-[#007bff] text-white p-2 px-4 border-none rounded-md cursor-pointer mt-2 ml-[25%]">
                    <a href="#" className="btn">
                        Resume
                    </a>
                </button>
            </div>
        </div>
    );
};

export default Home;
