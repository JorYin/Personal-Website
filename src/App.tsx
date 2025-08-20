import { RouterProvider } from "react-router-dom";
import { router } from "./utils/Router";
import GrainOverlay from "./assets/SVG/Grain";

function App() {

  return (
    <div className="relative">
        <RouterProvider router={router} />
        <GrainOverlay/>
    </div>
  )
}

export default App
