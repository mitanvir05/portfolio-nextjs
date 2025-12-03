"use client";

import { useState } from "react";
import { projects } from "@/contents/projects";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section className="py-2 container max-w-7xl mx-auto px-4 mb-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {displayedProjects.map((project, index) => (
          <article
            key={index}
            className="bg-white dark:bg-dark/50 rounded-lg shadow-md p-6"
          >
            <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"
              />
            </div>

            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-8 mt-2">
              <Link
                href={project.githubLink}
                target="_blank"
                className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
              >
                <FaGithub className="w-6 h-6" /> <span>Code</span>
              </Link>

              <Link
                href={project.githubLink}
                target="_blank"
                className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
              >
                <FaExternalLinkAlt className="w-6 h-6" /> <span>Live View</span>
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* SEE MORE button (only when not showing all) */}
      {!showAll && projects.length > 6 && (
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(true)}
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/80 transition-colors text-lg"
          >
            See More Projects
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
