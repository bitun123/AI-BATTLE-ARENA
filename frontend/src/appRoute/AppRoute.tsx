import { createBrowserRouter } from "react-router-dom";
import Home from "../features/chat/page/Home";

export const AppRoute = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
