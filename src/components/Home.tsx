import React from "react";
import styled from "styled-components";
import CV from "../assets/CV (1).pdf";
import Contact from "./Contact";
import profile from "../assets/profile.jpg";
//
//Create a css customized container
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  padding-top: 200px;
  margin-left: 8%;
  margin-top: 20%;
  display: flex;
  justify-content: space-between;
`;
//
// Style the text conteiner
const TextContainer = styled.div`
  flex: 2;
  margin-right: 20px;
  // The css styling to my page
  p {
    font-color: #555;
    font-size: 1.2rem;
  }
  h1 {
    font-size: 50px;
    color: #333;
  }
  span {
    color: blue;
  }
  h5:last-child {
    font-size: 1.2rem;
  }
  button {
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border-radius: 10px;
    border: none;
    margin: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  button:hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
  a {
    text-decoration: none;
    color: white;
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
    height: Auto%;
    margin-right: 10%;
    border-radius: 10px;
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
    <Section>
      {/* The Text Contaier contains the text part of the homepage */}
      <TextContainer>
        <h3>Hello,</h3>
        <h1>
          I'm <span>Sharon Wanjiru</span>
        </h1>
        <p>
          A software developer and this portfolio displays my details and
          experience in software development and the various projects I have
          worked on
        </p>
        <button>
          <a href={CV} className="btn">
            Download CV
          </a>
        </button>
        <button>
          <a href="#Contact">Contact Me</a>
        </button>
      </TextContainer>
      {/* The ProfileImage contains the image section in the home page */}
      <ProfileImage>
        <img src={profile} alt="" />
      </ProfileImage>
    </Section>
  );
};

export default Home;
