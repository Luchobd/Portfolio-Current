import { Fragment } from "react/jsx-runtime";
import { skillIcons, SkillsIcons } from "../../utils/Icons/skills/skills-icon";
import { Card } from "./Card";

export function Cards() {
  return (
    <div className="cards-container">
      {skillIcons.map((skill: SkillsIcons) => (
        <Fragment key={skill.id}>
          <Card icon={skill.icon} name={skill.name} />
        </Fragment>
      ))}
    </div>
  );
}
