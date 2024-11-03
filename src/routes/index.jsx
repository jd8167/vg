import { createBrowserRouter } from "react-router-dom";
import {
  // Account,
  // AccountSettings,
  // StepOne,
  // Home,
  // Login,
  // PersonalDetails,
  // Register,

  Landing,
} from "../pages";
// import PublicLayout from "../layout/PublicLayout";
import PrivateLayout from "../layout/PrivateLayout";
import privateRoutes from "./private";
import publicRoutes from "./public";
// import Home2 from "../pages/Home2";
import ApplicationLayout from "../pages/application/ApplicationLayout";
import MultiStepForm from "../pages/MultiStepForm";

const isPrivate = true;
const routes = isPrivate ? privateRoutes : publicRoutes;

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },

      ...routes,
    ],
  },
  {
    path: "/a/:destination",
    element: <ApplicationLayout />,
    children: [
      {
        index: true,
        element: <MultiStepForm />,
      },
    ],
  },
  // {
  //   path: "/account",
  //   element: <PrivateLayout />,
  //   children:
  // },
]);

export default router;
