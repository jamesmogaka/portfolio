import styled from 'styled-components';
import Project from './Project';
import image from "../assets/profile.jpeg"

//
//Define the container to hold all the cards
const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
`;

const Web = () => {
    return (
        <Container>
            <Project
                name="Portfolio"
                image={image}
                description="this is a sample of my personal portfolio"
                product="link"
                code="link"
            />
            <Project
                name="Portfolio"
                image="img"
                description="this is a sample of my personal portfolio"
                product="link"
                code="link"
            />
            <Project
                name="Portfolio"
                image="img"
                description="this is a sample of my personal portfolio"
                product="link"
                code="link"
            />
            <Project
                name="Portfolio"
                image="img"
                description="this is a sample of my personal portfolio"
                product="link"
                code="link"
            />
            <Project
                name="Portfolio"
                image="img"
                description="this is a sample of my personal portfolio"
                product="link"
                code="link"
            />
        </Container>
    );
};

export default Web;
