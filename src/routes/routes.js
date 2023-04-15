import { Layout } from "../Layout/Layout";
import { Home } from "../views/Home/Home";
import { NotFound } from "../views/NotFound";
import { FullScreenLayout } from "../Layout/FullScreenLayout/FullScreenLayout";

const routes = [
  {
    path: "/",
    layout: Layout,
    component: Home,
    exact: true,
    routeMessage: "Home",
  },
  {
    path: "/character/:id",
    layout: Layout,
    component: NotFound,
    exact: true,
    routeMessage: "Personaje",
  },
  {
    path: "/not-found",
    layout: FullScreenLayout,
    component: NotFound,
    exact: true,
    routeMessage: "No encontrada",
  },
];

export { routes };
