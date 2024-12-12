import { useContext } from "react";
import { PortfolioContext } from "../../context/Context";
import { myProjectsEnglish } from "../../utils/projects/my-projects-english";
import { myProjectsSpanish } from "../../utils/projects/my-projects-spanish";
import { MyProjects as MyProjectsType } from "../../interfaces/portfolio";
import "./styles.css";

export function MyProjects() {
  const { portfolioState } = useContext(PortfolioContext);

  const myProjects =
    portfolioState.language === "es" ? myProjectsSpanish : myProjectsEnglish;

  const homeSpanishLanguage = portfolioState.language === "es";

  const title = homeSpanishLanguage ? "Mis Proyectos" : "My Projects";
  return (
    <div className="projects-container">
      <h2 className="projects-title">{title}</h2>
      <div className="projects-cards-container">
        {myProjects.map((project: MyProjectsType) => (
          <div key={project.id} className="project-card-content">
            <picture className="project-card-image">
              <img src={project.image} alt={project.title} />
            </picture>
            <div className="project-card-title-subtitle-content">
              <div className="project-card-title-subtitle">
                <h3 className="project-card-title">{project.title}</h3>
                <h3 className="project-card-subtitle">{project.subtitle}</h3>
              </div>
              <div className="project-card-link-content">
                <a href={project.link} target="_blank" className="project-card-link">
                  {project.github}
                </a>
              </div>
            </div>
            <p className="project-card-description">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
