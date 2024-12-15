import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectProps {
  project: {
    image: string;
    title: string;
    description: string;
    technologies: string[];
    github?: string;
    demo?: string;
  };
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div className="w-full h-full bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
      <div className="w-full aspect-video relative">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>

      <div className="flex-1 p-4 md:p-5 flex flex-col">
        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2 line-clamp-2">
          {project.title}
        </h3>
        
        <p className="text-sm md:text-base text-gray-600 mb-4 line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs md:text-sm bg-gray-100 rounded-full whitespace-nowrap"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-auto pt-2">
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              className="text-sm md:text-base hover:text-blue-600 transition-colors flex items-center gap-1"
            >
              <span>GitHub</span>
            </Link>
          )}
          {project.demo && (
            <Link
              href={project.demo}
              target="_blank"
              className="text-sm md:text-base hover:text-blue-600 transition-colors flex items-center gap-1"
            >
              <span>Live Demo</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project; 