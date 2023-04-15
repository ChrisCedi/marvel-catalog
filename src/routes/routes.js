import { Layout } from "../Layout/Layout";
import { Home } from "../views/Home/Home";

const routes = [
  {
    path: "/",
    layout: Layout,
    component: Home,
    exact: true,
    routeMessage: "Home",
  },
  {
    path: "/:id",
    layout: Layout,
    component: <>character id</>,
    exact: true,
    routeMessage: "Personaje",
  },
  {
    path: "/not-found",
    layout: Layout,
    component: <>not found</>,
    exact: true,
    routeMessage: "No encontrada",
  },
];

export { routes };
