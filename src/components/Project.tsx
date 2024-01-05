import { Button } from '@/components/ui/button';
import { GitHub, Globe } from 'react-feather';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
//
//The requirments to show a project card
export interface Iproject {
    //
    //The name of the project
    name: string;
    //
    //Small sample for the project
    image: string;
    //
    //A brief description on the project
    description: string;
    //8
    //The url of the product
    product?: string;
    //
    //The github repository for the code if present
    code?: string;
}

//
//The actual card
export const Project: React.FC<Iproject> = (props: Iproject) => {
    return (
        <Card className=" pb-3 w-[90%] h-auto max-h-[100%] flex flex-col overflow-hidden">
            <CardContent className=" p-0 flex flex-col justify-center items-center ">
                <img
                    src={props.image}
                    alt="This is the project image"
                    className=" flex-grow w-full max-h-52 object-cover"
                />
                <h2 className="text-lg">{props.name}</h2>
                <p className=" text-sm">{props.description}</p>
            </CardContent>
            <CardFooter className=" gap-1 ">
                {props.product && (
                    <Button className="w-11/12">
                        <a href={props.product} className="w-full">
                            <Globe className="inline" /> Checkout
                        </a>
                    </Button>
                )}
                {props.code && (
                    <Button variant="outline" size="icon">
                        <a href={props.code}>
                            <GitHub />
                        </a>
                    </Button>
                )}
            </CardFooter>
        </Card>
    );
};
