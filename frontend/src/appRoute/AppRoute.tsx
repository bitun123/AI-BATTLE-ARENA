import { createBrowserRouter } from "react-router-dom";
import Home from "../features/chat/page/Home";

export const Approute = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
