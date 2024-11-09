import ProjectPageBuild from "../Core/ProjectPageBuild"
import ProjectInfo from "../../utils/projectInfo"

const GameOfLife = () => {

  const projectIndex = ProjectInfo[3]

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

export default GameOfLife