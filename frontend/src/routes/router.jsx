import { createBrowserRouter } from "react-router-dom";

import LoginPage from "../pages/LoginPage.jsx";
import SignupPage from "../pages/SignupPage.jsx";
import NewLckd from "../pages/NewLckd.jsx";
import EditLckd from "../pages/EditPage.jsx";
import ViewPasswords from "../pages/ViewPasswords.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/newlckd",
    element: <NewLckd />,
  },
  {
    path: "/editlckd",
    element: <EditLckd />,
  },
  {
    path: "/viewpasswords",
    element: <ViewPasswords />,
  },
]);

export default router;
