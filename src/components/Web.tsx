import { Project, Iproject } from './Project';

import image from '../assets/profile.png';

//

//Fill in the array of projects to display

const projects: Array<Iproject> = [
    {
        name: 'Portfolio',
        image: image,
        description: 'My personal portfolio created using react',
        product: 'link',
        code: 'https://github.com/jamesmogaka/portfolio',
    },
    {
        name: 'Kicks',
        image: image,
        description:
            'Complete backend e-commerce application buid with node.js mongodb and express. The e-commerce was designed to sell shoes',
    },
    {
        name: 'Chess',
        image: image,
        description: 'This is a simple chess game created using react',
    },
    {
        name: 'CMIS',
        image: image,
        description:
            'This is a chama management system that will help in managing finantial records of chamas and other contribution events via whats app. The system is currently under development',
    },
];

const Web = () => {
    return (
        //
        // Container for web projects
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {projects.map((project, index) => (
                //
                // Render each project using the Project component
                <Project
                    key={index}
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
