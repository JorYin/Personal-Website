import Hendricks from "../assets/ProjectImg/Hendricks.webp"
import SparkBytes from "../assets/ProjectImg/SparkBytes.webp"

const ProjectInfo = [
  {
    id: 0,
    projectImg: Hendricks,
    title: "Hendricks Foundation",
    about: "During my time leading a team of 2 SWEs and working alongside a PM, we built a web app to help the Hendricks Foundation better showcase its impact. The foundation wanted donors, volunteers, and students to see the difference they were making, so we developed a real-time e-waste calculator, interactive dashboards, and a badge system to keep users engaged. We also implemented account creation with 2FA and OCR tech to verify donated devices, creating a secure and seamless experience!",
    technologies: ["React", "TypeScript", "Node.JS", "Express.JS", "Supabase"],
    demo: "https://github.com/Hack4Impact-BU/Hendricks-Ecalc",
    link: "/hendricks-foundation"
  },
  {
    id: 1,
    projectImg: SparkBytes,
    title: "Spark!Bytes",
    about: "Spark!Bytes was a project idea pitched to us in CS391, and my team and I ran with it to create something meaningful. We built a web app that helps BU organizations share leftover food from campus events with students who need it. Our vision included features like liking events, viewing them on a map, filtering by location or time, and making it easy for students to quickly find what is nearby. I had a lot of fun designing the app and being a leader in the development!",
    technologies: ["Next.JS", "TypeScript", "Supabase"],
    demo: "https://github.com/JustinCWang/BUCS391S1-Team-Ditto-SparkBytes",
    link: "/spark-bytes"
  },
];

export default ProjectInfo;