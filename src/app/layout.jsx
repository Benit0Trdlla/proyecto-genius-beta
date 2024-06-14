import { Inter } from "next/font/google";
import "/public/css/MyStyle/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import InstallBootstrap from "./InstallBootstrap";
import { UserProvider } from '@auth0/nextjs-auth0/client';

const inter = Inter({ subsets: ["latin"] });

const APP_NAME = "Proyecto Genius";
const APP_DEFAULT_TITLE = "Proyecto Genius - Home";
const APP_TITLE_TEMPLATE = "%s - PWA App";
const APP_DESCRIPTION = "Proyecto Genius PWA";

export const metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport = {
  themeColor: "#ffc107",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="shortcut icon" href='/Images/Logo/Pestaña.png' />
      </head>
      <body className={inter.className}>
        <UserProvider>
          <InstallBootstrap />
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
