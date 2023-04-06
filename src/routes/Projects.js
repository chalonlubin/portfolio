import Project from "../components/Project";
import { projects, smallerProjects } from "../assets/data";

import "../sass/Projects.scss";

/** Project Page: Contains information on recent projects.
 *
 *  Props: none
 *  State: none
 *
 * App --> RouteList --> Projects
 */
function Projects() {
  return (
    <>
      <div className="mt-5 pt-5 flex justify-center">
        <div className="About-card card w-2/3 rounded bg-gray-900/80 text-white p-1 text-center ">
          <h2 className="About-title"> A quick note on my projects: </h2>
          <p>
            I write detailed github READMEs for all the projects listed where I
            highlight features, motivations, and challenges, with the intent of
            showing you lessons taken from each one. Please feel free to check
            them out if you'd like to know more about what I built.
          </p>
        </div>
      </div>
      <div className="projects-cards flex flex-wrap justify-evenly px-1">
        {projects.map((project) => (
          <Project
            tech={project.tech}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
            github={project.github}
            key={project.title}
          />
        ))}
      </div>
      <h2 className="projects-title text-center">Smaller Projects</h2>
      <div className="projects-cards flex flex-wrap justify-evenly px-1">
        {smallerProjects.map((project) => (
          <Project
            title={project.title}
            tech={project.tech}
            description={project.description}
            github={project.github}
            link={project.link}
            key={project.title}
          />
        ))}
      </div>
      <div className="projects-extra mb-10 p-6 text-center">
        <h2 className="projects-title text-center">Coming soon....</h2>
        <h3>
          Van conversion story with pictures, and a blurb about what I am
          working on now!{" "}
        </h3>
      </div>
    </>
  );
}

export default Projects;
