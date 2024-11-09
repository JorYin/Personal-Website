import ProjectPageBuild from "../Core/ProjectPageBuild"
import ProjectInfo from "../../utils/projectInfo"

const IHealthAI = () => {

  const projectIndex = ProjectInfo[1]

  return(
    <ProjectPageBuild 
      projectImage={projectIndex.projectImg} 
      projectAbout={projectIndex.about} 
      projectDemo={projectIndex.demo}
      projectName={projectIndex.title}
      projectTech={projectIndex.technologies}
    />
  )
}

export default IHealthAI