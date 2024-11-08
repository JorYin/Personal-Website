import { RouterProvider } from "react-router-dom";
import { router } from "../src/utils/router";

function App() {

  return (
    <div>
        <RouterProvider router={router} />
    </div>
  )
}

export default App
