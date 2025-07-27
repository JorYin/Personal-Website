import LandingPage from "../components/Landing";
import ProjectPageBuild from "../components/Core/ProjectPageBuild";
import ProjectInfo from "./ProjectInfo";

export const PageRoutes = [
  {
    path: "/",
    element: <LandingPage />,
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
