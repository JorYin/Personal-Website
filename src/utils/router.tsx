import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { PageRoutes } from "../utils/routes";

export const router = createBrowserRouter(
  createRoutesFromElements(
    PageRoutes.map((route) => (
      <Route key={route.path} path={route.path} element={route.element} />
    ))
  )
);