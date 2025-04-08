import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("routes/main.tsx", [
    index("routes/home.tsx"),
    route("lexical", "routes/lexical.tsx"),
    route("plate", "routes/plate.tsx"),
  ]),
] satisfies RouteConfig;
