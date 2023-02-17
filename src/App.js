import { RouterProvider } from "react-router-dom";
import { routes } from "./Setup/RouterManager/mainRouter";
import "./App.css";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
