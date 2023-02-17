import { lazy } from "react";
import WithSuspense from "../components/WithSuspense";
import { IAppRoute } from "../types";
import {
  HOME,
  LOGIN_PAGE,
  ON_DEMAND_PRINTER,
  SELL_LANDING_PAGE,
} from "./pathnames";

const HomePage = WithSuspense(lazy(() => import("../pages/Home")));
const SellYourDesignPage = WithSuspense(
  lazy(() => import("../pages/SellYourDesign"))
);
const OnDemandPrinterPage = WithSuspense(
  lazy(() => import("../pages/OnDemandPrinter"))
);
const LoginPage = WithSuspense(lazy(() => import("../pages/Auth/Login")));
export const AppRoutes: IAppRoute[] = [
  { path: HOME, element: <HomePage /> },
  { path: SELL_LANDING_PAGE, element: <SellYourDesignPage /> },
  { path: ON_DEMAND_PRINTER, element: <OnDemandPrinterPage /> },
  { path: LOGIN_PAGE, element: <LoginPage /> },
];
