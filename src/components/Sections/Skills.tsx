import SkillsInfo from "../../utils/SkillsInfo";
import SkillsCard from "../Core/SkillsCard";
import SectionHeading from "../Core/SectionHeading";

const Skills = () => {
  
  return(
    <section id="skills" className="w-full py-40 relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto">
        <div className="mx-5">
          <div className="text-center mb-10">
              <SectionHeading text="Skills" />
          </div>
          <div className="flex flex-wrap gap-4 items-center text-center">
            {SkillsInfo.map(skill => (
              <SkillsCard skillName={skill.skillsArray}/>
            ))}
          </div>
        </div>
      </div>
  </section>
  )
}

export default Skills;