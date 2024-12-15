import Android from './Android';
import Web from './Web';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// Create portfolio component to showcase projects
const Portfolio = () => {
    return (
        // Main container with proper stacking behavior
        <div
            id="portfolio"
            className="w-full pt-[25px] sm:pt-[50px] pb-[25px] sm:pb-[50px] flex flex-col justify-center items-center md:h-screen md:scroll-snap-align-start"
        >
            <Tabs defaultValue="web" className="w-10/12">
                <TabsList>
                    <TabsTrigger value="web">Web</TabsTrigger>
                    <TabsTrigger value="android">Android</TabsTrigger>
                </TabsList>
                <TabsContent value="web" className="md:h-[85dvh]">
                    <Web />
                </TabsContent>
                <TabsContent value="android" className="md:h-[85dvh]">
                    <Android />
                </TabsContent>
            </Tabs>
        </div>
    );
};
export default Portfolio;


