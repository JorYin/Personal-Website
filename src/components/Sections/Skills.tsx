import SkillsInfo from "../../utils/SkillsInfo";
import SkillsCard from "../Core/SkillsCard";

const Skills = () => {
  
  return(
    <section id="skills" className="w-full py-40 relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center mb-10 mx-5">
            <h1 className="font-Karantina text-5xl sm:text-9xl text-main-color">SKILLS</h1>
        </div>
        <div className="mx-5 flex flex-wrap gap-4 items-center text-center">
          {SkillsInfo.map(skill => (
            <SkillsCard skillName={skill.skillsArray}/>
          ))}
        </div>
      </div>
  </section>
  )
}

export default Skills;