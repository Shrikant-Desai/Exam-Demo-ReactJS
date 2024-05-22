import { useRoutes } from "react-router-dom";
import { routesDescription } from "./routes.description";

const AllRoutes = () => {
  const routes = useRoutes([...routesDescription]);
  return routes;
};

export default AllRoutes;
