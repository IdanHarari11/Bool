import { RouterProvider } from "react-router-dom";
import { routes } from "./Setup/RouterManager/mainRouter";
import "./App.css";

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
