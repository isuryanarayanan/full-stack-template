import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import App from "../public/App";

const publicRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* Public routes go here */}
    </Route>
  )
);

export type PublicRouter = typeof publicRouter;
export default publicRouter;
