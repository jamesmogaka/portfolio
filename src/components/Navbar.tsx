import React from "react";
import styled from "styled-components";
import {
  NavigationMenu,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Instagram, Twitter, GitHub, Linkedin } from "react-feather";
//
//Define the infomation that the navigation needs to run
export interface Iprops {
  //
  //The path to the logo
  //"src\assets\logo\logo.jpg"
  logo_src: string;
  //
  //The list of pages or sections to navigate to
  //["Home", "About", "Portfolio", "Contact"]
  pages: Array<string>;
  //
  //The social sites for contact
  /*[
      {"Twitter","https://twitter.com/jay_more23"},
      {"GitHub","https://github.com/jamesmogaka"},
      {"Instagram","https://www.instagram.com/jay_more23/"},
      {"Linkedin","https://www.linkedin.com/in/james-mogaka-056b42217/"}
  ]*/
  contact: Array<{ platform: string; link: string }>;
}
//
//Navigation bar
export const Navbar: React.FC<Iprops> = (props) => {
  //
  //Destructure the props
  const { logo_src, pages, contact } = props;
  //
  //Contains my logo
  const Logo = styled.img`
    height: 100%;
    width: 40px;
    border-radius: 20%;
  `;
  //
  //Holds the links to the various pages of my portfolio
  const Navigation = styled.div`
    flex: 6;
    display: flex;
    justify-content: center;
  `;
  //
  //Holds the links to various social platforms
  const Contact = styled.div`
    flex: 1;
  `;
  //
  //Customised unorderd list to menu
  const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  `;
  //
  //The navigation container styling
  const Container = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 5%;
    gap: 20px;
    background: rgba(240, 232, 255, 0.603);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  `;
  //
  //Map the platform to its icon
  //Record <key, Type> - useful utility in maping on object to another object
  const platform_icons: Record<string, any> = {
    Twitter: <Twitter />,
    Instagram: <Instagram />,
    GitHub: <GitHub />,
    Linkedin: <Linkedin />,
    //
    //etc.
  };
  //
  return (
    <Container>
      <Logo src={logo_src} alt="My logo"></Logo>
      <Navigation>
        <NavigationMenu>
          <NavigationMenuList>
            {pages.map((page) => (
              <NavigationMenuItem>
                <Button variant="ghost">
                  <NavigationMenuLink href={"#" + page}>
                    {page}
                  </NavigationMenuLink>
                </Button>
              </NavigationMenuItem>
            ))}
            <NavigationMenuIndicator></NavigationMenuIndicator>
          </NavigationMenuList>
        </NavigationMenu>
      </Navigation>
      <Contact>
        <List>
          {contact.map((social, index) => (
            <li>
              <Button variant="ghost" size="icon">
                <a href={social.link} key={index}>
                  {platform_icons[social.platform]}
                </a>
              </Button>
            </li>
          ))}
        </List>
      </Contact>
    </Container>
  );
};

// export default Navbar;
