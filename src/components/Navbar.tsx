import React from 'react';
import styled from 'styled-components';
import { Instagram, Twitter, GitHub, Linkedin } from 'react-feather';
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
        height: 50px;
        width: 40px;
        border-radius: 20%;
    `;
    //
    //Holds the links to the various pages of my portfolio
    const Navigation = styled.div``;
    //
    //Holds the links to various social platforms
    const Contact = styled.div``;
    //
    //Customised unorderd list to menu
    const List = styled.ul`
        list-style: none;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;

        li {
            margin: 0;
            padding: 0;
        }

        /* Style the a tags within the ul */
        a {
            text-decoration: none;
            color: #051320;
            padding: 10px 15px;
            position: relative;
            transition: all 0.3s ease-in-out;

            &::after {
                content: '';
                position: absolute;
                width: 0;
                height: 2px;
                background-color: #c91c1c; /* Set the color of the line */
                bottom: 0;
                left: 0;
                transition: width 0.3s ease-in-out;
            }

            &:hover {
                &::after {
                    width: 100%;
                }
            }
        }
    `;
    //
    //The navigation container styling
    const Container = styled.nav`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
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
                <List>
                    {pages.map((page, index) => (
                        <li key={index}>
                            <a href={'#' + page}>{page}</a>
                        </li>
                    ))}
                </List>
            </Navigation>
            <Contact>
                <List>
                    {contact.map((social, index) => (
                        <li>
                            <a href={social.link} key={index}>
                                {platform_icons[social.platform]}
                            </a>
                        </li>
                    ))}
                </List>
            </Contact>
        </Container>
    );
};

// export default Navbar;
