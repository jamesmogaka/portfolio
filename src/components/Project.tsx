import { Button } from '@/components/ui/button';
import { GitHub, Globe } from 'react-feather';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
//
//The requirments to show a project card
interface Iproject {
    //
    //The name of the project
    name: string;
    //
    //Small sample for the project
    image: string;
    //
    //A brief description on the project
    description: string;
    //
    //The url of the product
    product?: string;
    //
    //The github repository for the code if present
    code?: string;
}
//
//The actual card
const Project: React.FC<Iproject> = (props: Iproject) => {
    return (
        <Card className=" w-1/4 h-1/2">
            <CardHeader>
                <CardTitle className="text-center">{props.name}</CardTitle>
            </CardHeader>
            <CardContent className="">
                <img
                    src={props.image}
                    alt="Project image"
                    className="max-h-[60%] max-w-[100%]"

                />
                <p>{props.description}</p>
            </CardContent>
            <CardFooter className="grid-cols-2 gap-2">
                {props.product && (
                    <Button className="w-11/12">
                        <a href={props.product}>
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

export default Project;
