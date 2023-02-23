import { lazy } from "react";
import WithSuspense from "../components/WithSuspense";
import Login from "../pages/Auth/Login";
import MobileLogin from "../pages/Auth/MobileLogin";
import Register from "../pages/Auth/Register";
import MobileRegister from "../pages/Auth/Register/MobileRegister";
import { IAppRoute } from "../types";
import {
  HOME,
  LOGIN_PAGE,
  MARKET_PLACE,
  ON_DEMAND_PRINTER,
  SELL_LANDING_PAGE,
  SIGNUP_PAGE,
} from "./pathnames";

const HomePage = WithSuspense(lazy(() => import("../pages/Home")));
const SellYourDesignPage = WithSuspense(
  lazy(() => import("../pages/SellYourDesign"))
);
const OnDemandPrinterPage = WithSuspense(
  lazy(() => import("../pages/OnDemandPrinter"))
);
const MarketPlace = WithSuspense(lazy(() => import("../pages/MarketPlace")));
export const AppRoutes: IAppRoute[] = [
  { path: HOME, element: <HomePage /> },
  { path: SELL_LANDING_PAGE, element: <SellYourDesignPage /> },
  { path: ON_DEMAND_PRINTER, element: <OnDemandPrinterPage /> },
  { path: LOGIN_PAGE, element: <MobileLogin /> },
  { path: SIGNUP_PAGE, element: <MobileRegister /> },
  { path: MARKET_PLACE, element: <MarketPlace /> },
];
