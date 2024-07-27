import Grid from "../Core/Grid";
import Card from "../Core/Card";
import ProjectInfo from "../../utils/projectInfo"


const Projects = () => {
  
  return(
    <section id="projects" className="w-full py-40">
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center mb-10 mx-5">
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold">PROJECTS</h1>
        </div>
        <Grid>
          {ProjectInfo.map((Projects) => (
            <Card
              projectImg={Projects.projectImg}
              title={Projects.title}
              about={Projects.about}
              technologies={Projects.technologies}
              github={Projects.github}
              website={Projects.website}
            />
          ))}
        </Grid>
      </div>
  </section>
  )
}

export default Projects;