import "../sass/Project.scss";

/** Project
 *
 * State: none
 * Props: data = {title, subtitle, image, link, github}
 *
 * App -> RouteList -> Projects -> Project
 *
 */
function Project({ title, description, tech, image, link, github }) {
  return (
    <div className="rounded-lg shadow-lg bg-gray-900 m-4 w-80 text-center flex flex-col flex-wrap justify-center">
      {image && (
        <img
          className="rounded-t-lg max-w-xs opacity-25 hover:filter-none hover:opacity-100"
          src={image}
          alt={title}
        />
      )}
      <div className="p-4 m-auto">
        <h2 className="project-title">{title}</h2>
        <h3 className="project-tech">{tech}</h3>
        <h4 className="project-description">{description}</h4>
      </div>
      <div className="flex content-evenly m-auto">
        {link && (
          <a href={link}>
            <button className="btn btn-outline btn-success m-4">Demo</button>
          </a>
        )}
        <a href={github}>
          <button className="btn btn-outline btn-error m-4">Github</button>
        </a>
      </div>
    </div>
  );
}

export default Project;
