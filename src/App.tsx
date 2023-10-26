import Contact from "./components/Contact";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import styled from "styled-components";
import { Navbar } from "./components/Navbar";

//
//Create a customized container
const Container = styled.div`
  height: 100vh;
  background-color: #f5f5f5;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
function App() {
  //
  //The image src
  const logo_src: string = "src/assets/logo/logo.jpg";
  //
  //The avilable pages for navigation
  const pages: Array<string> = ["Home", "About", "Portfolio", "Contact"];
  //
  //The social platforms avilable for contact
  const contact: Array<{ platform: string; link: string }> = [
    { platform: "Twitter", link: "https://twitter.com/jay_more23" },
    { platform: "GitHub", link: "https://github.com/jamesmogaka" },
    { platform: "Instagram", link: "https://www.instagram.com/jay_more23/" },
    {
      platform: "Linkedin",
      link: "https://www.linkedin.com/in/james-mogaka-056b42217/",
    },
  ];

  return (
    <Container>
      <Navbar logo_src={logo_src} pages={pages} contact={contact} />
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </Container>
  );
}

export default App;
