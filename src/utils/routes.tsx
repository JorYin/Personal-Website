import LandingPage from "../components/Landing";
import About from "../pages/About";
import ProjectPageBuild from "../components/Core/ProjectPageBuild";
import ProjectInfo from "./ProjectInfo";

export const PageRoutes = [
  {
    path: "/",
    element: <LandingPage />
  },
  {
    path: "/about",
    element: <About />
  },
  ...ProjectInfo.map(project => ({
    path: project.link,
    element: (
      <ProjectPageBuild
        projectImage={project.projectImg}
        projectName={project.title}
        projectAbout={project.about}
        projectDemo={project.demo}
        projectTech={project.technologies}
      />
    ),
  })),
];
