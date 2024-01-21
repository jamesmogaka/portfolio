import styled from 'styled-components';
// import CV from "../assets/CV (1).pdf";
import profile from '../assets/profile_bg.png';
//
//Create a css customized container
const Section = styled.div`
    height: 100%;
    scroll-snap-align: center;
    padding-top: 200px;
    margin-left: 8%;
    margin-top: 20%;
    display: flex;
    justify-content: space-between;
    gap: 20px;
`;
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
    button {
        background-color: #007bff;
        color: #fff;
        padding: 10px 20px;
        border-radius: 10px;
        border: none;
        margin-top: 10px;
        margin-left: 25%;
        align-self: center;
        cursor: pointer;
        a {
            text-decoration: none;
            color: white;
        }
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
// Style the image component
const ProfileImage = styled.div`
    flex: 1;
    text-align: right;
    // Style the image
    img {
        max-width: 100%;
        height: Auto;
        margin-right: 10%;
        border-radius: 50%;
        transition: transform 0.3s ease;
    }
    img:hover {
        transform: scale(1.1);
        left: 45%;
    }
`;
//
//Create a home page for the entire portfolio
const Home = () => {
    return (
        //
        // The home section that displays the home page
        <Section id="home">
            {/* The ProfileImage contains the image section in the home page */}
            <ProfileImage>
                <img src={profile} alt="My picture" />
            </ProfileImage>

            {/* The Text Contaier contains the text part of the homepage */}
            <TextContainer>
                <h3>Hello,</h3>
                <h1>
                    I'm<span> &nbsp;James Mogaka.</span>
                </h1>
                <h1>a digital craftsman.</h1>
                <h1>a software engineer.</h1>

                <button>
                    <a href="#" className="btn">
                        Resume
                    </a>
                </button>
            </TextContainer>
        </Section>
    );
};

export default Home;
