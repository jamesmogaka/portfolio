import { Project, Iproject } from './Project';
import image from '../assets/profile.png';
//
//Fill in the array of projects to display
const projects: Array<Iproject> = [
    {
        name: 'Portfolio',
        image: image,
        description: 'this is a sample of my personal portfolio',
        product: 'link',
        code: 'link',
    },
    {
        name: 'Portfolio',
        image: image,
        description: 'this is a sample of my personal portfolio',
        product: 'link',
        code: 'link',
    },
    {
        name: 'Portfolio',
        image: image,
        description: 'this is a sample of my personal portfolio',
        product: 'link',
        code: 'link',
    },
    {
        name: 'Chess',
        image: image,
        description: 'This is a simple chess game created using react',
        product: 'link',
        code: 'link',
    },
    {
        name: 'Chess',
        image: image,
        description: 'This is a simple chess game created using react',
        product: 'link',
        code: 'link',
    },
    {
        name: 'Chess',
        image: image,
        description: 'This is a simple chess game created using react',
        product: 'link',
        code: 'link',
    },
];

const Web = () => {
    return (
        <div
            className=" w-full h-[85vh] grid grid-cols-3 grid-rows-[repeat(2, scale-49)] gap-y-2 justify-items-center
        "
        >
            {projects.map((project) => (
                <Project
                    name={project.name}
                    image={project.image}
                    description={project.description}
                    product={project.product}
                    code={project.code}
                />
            ))}
        </div>
    );
};

export default Web;
