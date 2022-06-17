import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/react/routeModules";
import styles from "~/index.css";
import { NewTweetModal } from "./components/NewTweetModal";
import { ModalRouter } from "./lib/remix-modals";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
};

export default function App() {
  return (
    <html lang="en" style={{ fontFamily: "sans-serif" }}>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <ModalRouter
          routes={[
            { key: "new_tweet", component: <NewTweetModal /> },
            {
              key: "edit_tweet",
              component: <NewTweetModal title="I'm another modal" />,
            },
          ]}
        />
      </body>
    </html>
  );
}
