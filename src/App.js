import { RouterProvider } from "react-router-dom";
import { routes } from "./Setup/RouterManager/mainRouter";

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
