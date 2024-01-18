import "../styles/globals.css";

import { Oxanium } from "next/font/google";
const oxanium = Oxanium({ subsets: ["latin"] });

import Script from "next/script";

import Header from "../components/header/Header";
import NavigationMenu from "../components/navigationMenu/NavigationMenu";
import classes from "../styles/layout.module.css";

import { NotificationContextProvider } from "@/contexts/Notification-context";
import Notifications from "@/components/notification/Notifications";

export const metadata = {
  title: "StreamTube",
  description: "StreamTube",
  icons: { icon: "/logo.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <body className={oxanium.className}>
        <NotificationContextProvider>
          <Notifications />
          <Header />
          <div className={classes.container}>
            <div className={classes.left}>
              <NavigationMenu />
            </div>
            <div className={classes.right}>{children}</div>
          </div>
          <Script />
        </NotificationContextProvider>
      </body>
    </html>
  );
}
