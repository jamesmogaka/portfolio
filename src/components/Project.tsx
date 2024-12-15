import { Button } from '@/components/ui/button';
import { GitHub, Globe } from 'react-feather';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

// The requirments to show a project card
export interface Iproject {
    // The name of the project
    name: string;
    // Small sample for the project
    image: string;
    // A brief description on the project
    description: string;
    // The url of the product
    product?: string;
    // The github repository for the code if present
    code?: string;
}

// The actual card
export const Project: React.FC<Iproject> = ({ image, name, description, product, code }) => {
    return (
        <Card className="pb-2 w-[90%] h-auto max-h-[100%] flex flex-col overflow-hidden bg-transparent shadow-md backdrop-filter backdrop-blur-sm dark:bg-transparent dark:backdrop-filter dark:backdrop-blur-sm">
            <CardContent className="p-0 flex flex-col justify-center items-center">
                <img src={image} alt="This is the project image" className="flex-grow w-full max-h-52 object-cover" />
                <h2 className="text-lg mt-2 sm:mt-4">{name}</h2>
                <p className="text-sm mt-1 sm:mt-2 mb-2 sm:mb-4">{description}</p>
            </CardContent>
            <CardFooter className="gap-1 mt-2 sm:mt-4">
                {product && (
                    <Button className="w-11/12">
                        <a href={product} className="w-full">
                            <Globe className="inline" /> Checkout
                        </a>
                    </Button>
                )}
                {code && (
                    <Button variant="outline" size="icon">
                        <a href={code}>
                            <GitHub />
                        </a>
                    </Button>
                )}
            </CardFooter>
        </Card>
    );
};
