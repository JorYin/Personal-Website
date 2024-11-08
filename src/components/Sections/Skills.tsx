import GrainOverlay from "../../assets/SVG/Grain";
import SkillsInfo from "../../utils/skillsInfo";
import SkillsCard from "../Core/SkillsCard";


const Skills = () => {
  
  return(
    <section id="skills" className="w-full py-40 text-second-color bg-primary relative overflow-hidden">
      <GrainOverlay />
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center mb-10 mx-5">
            <h1 className="font-League-Spartan text-5xl sm:text-9xl font-bold">SKILLS</h1>
        </div>
        <div className="mx-5 flex flex-wrap gap-4 items-center text-center">
          {SkillsInfo.map(element => (
            <SkillsCard skillName={element.skillsArray}/>
          ))}
        </div>
      </div>
  </section>
  )
}

export default Skills;