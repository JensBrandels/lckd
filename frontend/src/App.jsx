import { RouterProvider } from "react-router-dom";
import router from "./routes/router.jsx";
import "./App.css";
//try deploy
function App() {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
