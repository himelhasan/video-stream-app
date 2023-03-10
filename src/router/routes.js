import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home";
import SingleVideoPage from "../Pages/SingleVideoPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/video",
        element: <SingleVideoPage></SingleVideoPage>,
      },
    ],
  },
]);

export default router;
