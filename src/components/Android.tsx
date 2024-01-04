import { Project, Iproject } from './Project';

//
//The collection of android projects to display
const projects: Array<Iproject> = [
    {
        name: 'Chess',
        image: 'image',
        description: 'This is a simple chess game created using react',
        product: 'link',
        code: 'link',
    },
    {
        name: 'Chess',
        image: 'image',
        description: 'This is a simple chess game created using react',
        product: 'link',
        code: 'link',
    },
    {
        name: 'Chess',
        image: 'image',
        description: 'This is a simple chess game created using react',
        product: 'link',
        code: 'link',
    },
];

const Android = () => {
    return (
        <div
            className="grid grid-cols-3 grid-rows-2 gap-y-[10px] justify-items-center
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

export default Android;
