import { Layout } from "../Layout/Layout";
import { Home } from "../views/Home/Home";
import { Character } from "../views/Character";
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
    layout: FullScreenLayout,
    component: Character,
    exact: true,
    routeMessage: "character",
  },
  {
    path: "/not-found",
    layout: FullScreenLayout,
    component: NotFound,
    exact: true,
    routeMessage: "Not found",
  },
];

export { routes };
