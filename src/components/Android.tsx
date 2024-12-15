import { Project, Iproject } from './Project';
import image from '../assets/profile.png';

//
// The collection of android projects to display
const projects: Array<Iproject> = [
    {
        name: 'Mdundo',
        image: image,
        description:
            'A personal music player to collect music data that i like and i will use it to further learn buiding of a recomentation algorithm',
    },
];

const Android = () => {
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

export default Android;
