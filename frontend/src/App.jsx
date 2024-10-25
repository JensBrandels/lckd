import { RouterProvider } from "react-router-dom";
import router from "./routes/router.jsx";
import "./App.css";
//try to stimulate actions on main
function App() {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
