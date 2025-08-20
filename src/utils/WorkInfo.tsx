import { FaCar, FaRecycle, FaPerson } from "react-icons/fa6";

const WorkInfo = [
  {
    Id: 0,
    Icon: FaCar,
    Company: "CarMax",
    Role: "SWE Intern",
    StartMonth: "July",
    StartYear: "2025",
    EndMonth: "August",
    EndYear: "2025",
    Description: "Spent a summer in Dallas building APIs and tools that made it easier (and faster) for engineers and stakeholders to access vehicle generation data.",
    CurrentJob: true,  
  },
  {
    Id: 1,
    Icon: FaRecycle,
    Company: "Hack4Impact",
    Role: "Lead SWE",
    StartMonth: "January",
    StartYear: "2025",
    EndMonth: "May",
    EndYear: "2025",
    Description: "Led a small dev team, designing and shipping a full-stack app for a nonprofit while keeping everything secure and on budget.",
    CurrentJob: false,  
  },
  {
    Id: 2,
    Icon: FaPerson,
    Company: "FLIP National",
    Role: "Technology Fellow",
    StartMonth: "May",
    StartYear: "2024",
    EndMonth: "August",
    EndYear: "2024",
    Description: "Helped redesign and migrate the org’s site, cutting hosting costs to zero and making it easier for first-gen, low-income students to find support.",
    CurrentJob: false,  
  },
];

export default WorkInfo;