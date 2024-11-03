import { createBrowserRouter } from "react-router-dom";
import {
  // Account,
  // AccountSettings,
  // StepOne,
  // Home,
  // Login,
  // PersonalDetails,
  // Register,
  ReviewApplication,
  SecondStep,
  StepFour,
  StepThreeA,
  StepThreeC,
  StepThreeE,
  Landing,
  ApplicationLanding,
} from "../pages";
// import PublicLayout from "../layout/PublicLayout";
import PrivateLayout from "../layout/PrivateLayout";
import privateRoutes from "./private";
import publicRoutes from "./public";
// import Home2 from "../pages/Home2";
import ApplicationLayout from "../pages/application/ApplicationLayout";
// Pseudocode for dynamic visa data showing
// 1. Get the country name of the chosen destination
// 2. Get the country initials of the destinaton and resident country
// 3. Create a loader that uses the url params to load the data from ivisa api

const isPrivate = true;
const routes = isPrivate ? privateRoutes : publicRoutes;
// TODO: Fix the application page dynamic routing
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
      // {
      //   path: "/a/:destination/step=step_1",
      //   // index: true,
      //   element: <StepOne />,
      //   loader: ({ param }) => {
      //     // TODO: figure out how to get the necssary params
      //     return null;
      //   },
      // },
      {
        // path: "/a/:destination",
        index: true,
        element: <ApplicationLanding />,
      },
      {
        path: "step=step_1",
        element: <SecondStep />,
      },
      {
        path: "step=step_2",
        element: <StepThreeA />,
      },
      {
        path: "step=step_3",
        element: <StepThreeC />,
      },
      {
        path: "step=step_4",
        element: <StepThreeE />,
      },
      {
        path: "step=step_5",
        element: <StepFour />,
      },
      {
        path: "step=review",
        element: <ReviewApplication />,
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
