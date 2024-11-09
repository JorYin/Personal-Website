import ProjectPageBuild from "../Core/ProjectPageBuild"
import ProjectInfo from "../../utils/projectInfo"


const ScreenWise = () => {

  const projectIndex = ProjectInfo[0]

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

export default ScreenWise