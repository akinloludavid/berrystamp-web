import { lazy } from "react";
import WithSuspense from "../components/WithSuspense";
import Login from "../pages/Auth/Login";
import MobileLogin from "../pages/Auth/MobileLogin";
import Register from "../pages/Auth/Register";
import MobileRegister from "../pages/Auth/Register/MobileRegister";
import Explore from "../pages/Explore";
import Message from "../pages/Message";
import { IAppRoute } from "../types";
import {
  CUSTOM_DESIGN,
  EXPLORE,
  HOME,
  LOGIN_PAGE,
  MESSAGE,
  ON_DEMAND_PRINTER,
  ORDERS,
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
export const AppRoutes: IAppRoute[] = [
  { path: HOME, element: <HomePage /> },
  { path: SELL_LANDING_PAGE, element: <SellYourDesignPage /> },
  { path: ON_DEMAND_PRINTER, element: <OnDemandPrinterPage /> },
  { path: LOGIN_PAGE, element: <MobileLogin /> },
  { path: SIGNUP_PAGE, element: <MobileRegister /> },
  { path: MESSAGE, element: <Message /> },
  { path: ORDERS, element: <Message /> },
  { path: CUSTOM_DESIGN, element: <Message /> },
  { path: EXPLORE, element: <Explore /> },
];
