import WildwoodWatchImg from "../assets/ProjectImg/WildwoodWatch.webp"
import ScreenWiseImg from "../assets/ProjectImg/ScreenWise.png"
import iHealthImg from "../assets/ProjectImg/iHealthAi.webp"
import GameOfLifeImg from "../assets/ProjectImg/GameOfLife.webp"

const ProjectInfo = [
  {
    id: "0",
    projectImg: ScreenWiseImg,
    title: "ScreenWise",
    about: "I created ScreenWise with one goal in mind, which is to reduce phone usage! The reason is that sometimes I am on my phone too much, and the trackers are only sometimes 100% right. With ScreenWise, you can input the number of hours you have used your phone, add your friends, and even compete with your friends on a leaderboard! However, having the highest screen time is not a flex for this leaderboard; if you see your friend at the top, give them a little nudge and tell them to get off their phone :)",
    technologies: ["React", "Express", "Node", "MongoDB"],
    demo: "https://github.com/JorYin/ScreenWise",
    link: "/ScreenWise"
  },
  {
    id: "1",
    projectImg: iHealthImg,
    title: "iHealth.AI",
    about: "92% of Americans don’t undergo routine health screenings. In fact, missed preventative opportunities cost US healthcare 55 billion dollars every year. We wanted to create a proactive solution that uses the data we already generate through devices like iPhones and Apple Watches. Our goal was to provide people with daily insights into their health, helping them make informed decisions about whether to visit a doctor or change their habits before more serious issues arise.",
    technologies: ["React", "Typescript", "Flask", "MongoDB"],
    demo: "https://devpost.com/software/ihealth-ai",
    link: "/IHealthAI"
  },
  {
    id: "2",
    projectImg: WildwoodWatchImg,
    title: "WildwoodWatch",
    about: "WildWoodWatch is an advocacy website that informs people about wildlife and deforestation. It was one of the first projects I ever made, and it was in HTML, CSS, and Javascript! I learned a lot of valuable skills while creating this project, like using Figma for the first time, the importance of responsive design, and the basics of Javascript, which I built upon even today. It is a project worth checking out to see how far I have come in my coding journey!",
    technologies: ["HTML", "CSS", "Javascript"],
    demo: "https://joryin.github.io/WildwoodWatch/",
    link: "/WildwoodWatch"
  },
  {
    id: "3",
    projectImg: GameOfLifeImg,
    title: "Game Of Life",
    about: "We took inspiration from The Game Of Life. This board game has players navigate through life, make decisions, earn money, and ultimately try to gain the most wealth by the end of the game. Wealth is measured in a variety of ways which affects your overall final score. We wanted a way to gamify learning financial literacy. There are some existing resources online but these sites can be a task to navigate, difficult to find, and hard to understand so the goal was to gamify learning to make it fun and motivating.",
    technologies: ["React", "Typescript", "Tailwind Css"],
    demo: "https://devpost.com/software/game-of-life-z1lnau?ref_content=user-portfolio&ref_feature=in_progress",
    link: "/GameOfLife"
  },
];

export default ProjectInfo;