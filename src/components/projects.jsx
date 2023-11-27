import projects from "../assets/projectsArr.js";
import linkImg from "../assets/link.png";
import githubImgBlack from "../assets/githubBlack.png";

export default function Projects() {
  return (
    <>
      <div className="projects">
        <h2>Projects</h2>
        {projects.map((project, index) => {
          return (
            <div className="projectContainer" key={index}>
              <div className="project">
                <div className="imageContainer">
                  <img src={project.img} alt={project.title} />
                </div>
                <div className="des">
                  <div className="titles">
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                  </div>
                  <div className="links">
                    <a href={project.url} target="_blank" rel="noreferrer">
                      <img src={linkImg} alt="Live Page" />
                    </a>
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <img src={githubImgBlack} alt="github" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>
      </div>
    </>
  );
}
