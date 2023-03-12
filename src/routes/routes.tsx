import { lazy } from "react";
import WithSuspense from "../components/WithSuspense";

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
  SETTINGS,
  NEW_CUSTOM_DESIGN,
  PRINTER_SHOP,
  PRINTER_DASHBOARD,
  DESIGNER_DASHBOARD,
  DESIGNER_SHOP,
  DESIGNER_PAYMENT,
  PRINTER_PAYMENT,
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
const SettingsPage = WithSuspense(lazy(() => import("../pages/Settings")));
const TrackingPage = WithSuspense(lazy(() => import("../pages/Tracking")));
const TrackingDetailsPage = WithSuspense(
  lazy(() => import("../pages/Tracking/TrackingDetails"))
);

//Printer
const PrinterShopPage = WithSuspense(
  lazy(() => import("../pages/Printer/Shop"))
);

const PrinterDashboardPage = WithSuspense(
  lazy(() => import("../pages/Printer/Dashboard"))
);
const MobileRegister = WithSuspense(
  lazy(() => import("../pages/Auth/Register/MobileRegister"))
);
const CustomDesign = WithSuspense(lazy(() => import("../pages/CustomDesign")));
const NewCustomDesign = WithSuspense(
  lazy(() => import("../pages/CustomDesign/NewCustomDesign"))
);
const DesignerDashboard = WithSuspense(
  lazy(() => import("../pages/DesignerDashboard"))
);
const DesignerShop = WithSuspense(
  lazy(() => import("../pages/DesignerDashboard/Shop"))
);
const Payment = WithSuspense(
  lazy(() => import("../pages/DesignerDashboard/Payment"))
);
const MobileLogin = WithSuspense(
  lazy(() => import("../pages/Auth/MobileLogin"))
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
  { path: SETTINGS, element: <SettingsPage /> },
  { path: NEW_CUSTOM_DESIGN, element: <NewCustomDesign /> },
  //Printer
  { path: PRINTER_SHOP, element: <PrinterShopPage /> },
  { path: PRINTER_DASHBOARD, element: <PrinterDashboardPage /> },
  { path: PRINTER_PAYMENT, element: <Payment /> },

  //Designer
  { path: DESIGNER_DASHBOARD, element: <DesignerDashboard /> },
  { path: DESIGNER_SHOP, element: <DesignerShop /> },
  { path: DESIGNER_PAYMENT, element: <Payment /> },
];
