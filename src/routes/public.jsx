import { Home, Login, Register } from "../pages";

const publicRoutes = [
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
];

export default publicRoutes;
