import styled from 'styled-components';
import Android from './Android';
import Web from './Web';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

//
//Create a customized container
const Section = styled.div`
    height: 100dvh;
    width: 100dvw;
    padding-top: 50px;
    scroll-snap-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
`;
//
//Create a page to showcase my current and previous works overflow-auto
//
//Todo: Deside on what to do with the overflow
const Portfolio = () => {
    return (
        <Section id="portfolio">
            <Tabs defaultValue="web" className="w-10/12 h-full ">
                <TabsList className="">
                    <TabsTrigger value="web">Web</TabsTrigger>
                    <TabsTrigger value="android">Android</TabsTrigger>
                </TabsList>
                <TabsContent value="web" className="h-[85dvh]">
                    <Web />
                </TabsContent>
                <TabsContent value="android" className=" h-[85dvh]">
                    <Android />
                </TabsContent>
            </Tabs>
        </Section>
    );
};

export default Portfolio;
