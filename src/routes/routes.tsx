import { lazy } from "react";
import WithSuspense from "../components/WithSuspense";
import Login from "../pages/Auth/Login";
import MobileLogin from "../pages/Auth/MobileLogin";
import Register from "../pages/Auth/Register";
import MobileRegister from "../pages/Auth/Register/MobileRegister";
import CustomDesign from "../pages/CustomDesign";
import NewCustomDesign from "../pages/CustomDesign/NewCustomDesign";
import { IAppRoute } from "../types";
import {
  DESIGN_DETAILS,
  MARKET_PLACE,
  CUSTOM_DESIGN,
  EXPLORE,
  HOME,
  LOGIN_PAGE,
  MESSAGE,
  ON_DEMAND_PRINTER,
  ORDERS,
  SELL_LANDING_PAGE,
  SIGNUP_PAGE,
  AUTHOR_DETAILS,
  COLLECTION_DETAILS,
  TRACKING,
  TRACKING_DETAILS,
  NEW_CUSTOM_DESIGN,
} from "./pathnames";

const HomePage = WithSuspense(lazy(() => import("../pages/Home")));
const SellYourDesignPage = WithSuspense(
  lazy(() => import("../pages/SellYourDesign"))
);
const OnDemandPrinterPage = WithSuspense(
  lazy(() => import("../pages/OnDemandPrinter"))
);
const MarketPlace = WithSuspense(lazy(() => import("../pages/MarketPlace")));
const DesignerDetails = WithSuspense(
  lazy(() => import("../pages/DesignerDetails"))
);
const Explore = WithSuspense(lazy(() => import("../pages/Explore")));
const Orders = WithSuspense(lazy(() => import("../pages/Orders")));
const Message = WithSuspense(lazy(() => import("../pages/Message")));
const AuthorDetails = WithSuspense(
  lazy(() => import("../pages/AuthorDetails"))
);

const TrackingPage = WithSuspense(lazy(() => import("../pages/Tracking")));
const TrackingDetailsPage = WithSuspense(
  lazy(() => import("../pages/Tracking/TrackingDetails"))
);

export const AppRoutes: IAppRoute[] = [
  { path: HOME, element: <HomePage /> },
  { path: SELL_LANDING_PAGE, element: <SellYourDesignPage /> },
  { path: ON_DEMAND_PRINTER, element: <OnDemandPrinterPage /> },
  { path: LOGIN_PAGE, element: <MobileLogin /> },
  { path: SIGNUP_PAGE, element: <MobileRegister /> },
  { path: MARKET_PLACE, element: <MarketPlace /> },
  { path: DESIGN_DETAILS, element: <DesignerDetails /> },
  { path: MESSAGE, element: <Message /> },
  { path: ORDERS, element: <Orders /> },
  { path: CUSTOM_DESIGN, element: <CustomDesign /> },
  { path: EXPLORE, element: <Explore /> },
  { path: AUTHOR_DETAILS, element: <AuthorDetails /> },
  { path: COLLECTION_DETAILS, element: <AuthorDetails /> },
  { path: TRACKING, element: <TrackingPage /> },
  { path: TRACKING_DETAILS, element: <TrackingDetailsPage /> },
  { path: NEW_CUSTOM_DESIGN, element: <NewCustomDesign /> },
];
