import styled from 'styled-components';
import Android from './Android';
import Web from './Web';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

//
//Create a customized container
const Section = styled.div`
    height: 100vh;
    width: 100%;
    padding-top: 50px;
    scroll-snap-align: center;
    display: flex;
    justify-content: center;
`;
//
//Create a page to showcase my current and previous works
const Portfolio = () => {
    return (
        <Section>
            <Tabs defaultValue="web" className="w-10/12 h-full">
                <TabsList className="">
                    <TabsTrigger value="web">Web</TabsTrigger>
                    <TabsTrigger value="android">Android</TabsTrigger>
                </TabsList>
                <TabsContent value="web">
                    <Web />
                </TabsContent>
                <TabsContent value="android">
                    <Android />
                </TabsContent>
            </Tabs>
        </Section>
    );
};

export default Portfolio;
