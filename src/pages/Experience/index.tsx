import { useContext } from "react";
import { PortfolioContext } from "../../context/Context";
import { Experiences } from "./Experiences";
import "./styles.css";
import { experiencesSpanish } from "../../utils/experiences/experiences-spanish";
import {
  experiences,
  ExperiencesInfo,
  PropsExperiences,
} from "../../utils/experiences/experiences-english";

export function Experience() {
  const { portfolioState } = useContext(PortfolioContext);

  const homeEnglishLanguage = portfolioState.language === "en";
  const homeSpanishLanguage = portfolioState.language === "es";

  let experiencesLanguage: PropsExperiences = experiences;
  if (homeEnglishLanguage) experiencesLanguage = experiences;
  if (homeSpanishLanguage) experiencesLanguage = experiencesSpanish;

  return (
    <div className="experience-container" id="experience">
      <h2 className="experience-title">{experiencesLanguage.mainInfo}</h2>
      <br />

      <h2 className="experience-title">{experiencesLanguage.company}</h2>
      <section className="experience-section-main">
        <Experiences
          title={experiencesLanguage.title}
          subtitle={experiencesLanguage.subtitle}
          description={experiencesLanguage.description}
        />
      </section>
      <br />
      {experiencesLanguage.experiencesDate.map((exp: ExperiencesInfo) => (
        <div className="experience-content" key={exp.numberDot}>
          <div className="experience-date-dot">
            <span className="experience-date">{exp.date}</span>
            <span className="experience-dot">{exp.numberDot}</span>
          </div>
          <section className="experience-description">
            <Experiences
              title={exp.title}
              subtitle={exp.subtitle}
              date={exp.date}
              description={exp.description}
              technologies={exp.technologies}
            />
          </section>
        </div>
      ))}
    </div>
  );
}
