import ScreenWise from "../components/Projects/ScreenWise";
import WildwoodWatch from "../components/Projects/WildwoodWatch";
import IHealthAI from "../components/Projects/HealthAI";
import GameOfLife from "../components/Projects/GameOfLife";
import LandingPage from "../components/Landing";

export const ROUTES = [
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/ScreenWise",
    element: <ScreenWise />,
  },
  {
    path: "/WildwoodWatch",
    element: <WildwoodWatch />,
  },
  {
    path: "/IHealthAI",
    element: <IHealthAI />,
  },
  {
    path: "/GameOfLife",
    element: <GameOfLife />,
  },
];
