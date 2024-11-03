import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import "./css/app.css";
// import "./css/application.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/index.jsx";
import AppProvider from "./context/AppProvider.jsx";
import "react-datepicker/dist/react-datepicker.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </StrictMode>
);
