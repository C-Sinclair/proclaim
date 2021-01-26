import { useEffect } from "react";
import NextApp from "next/app";
import { supabase } from "../util/supabase";
import "../styles/globals.css";
import Head from "next/head";
import { Router } from "next/dist/client/router";

function App({ Component, pageProps }) {
  useEffect(() => {
    const theme = localStorage.getItem("proclaim-theme");
    if (theme) {
      document.body.setAttribute("data-theme", theme);
    }
  }, []);
  return (
    <>
      <Head>
        <title>{pageProps?.title || "Radiogram"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

const AUTHLESS_ROUTES = ["/splash", "/login", "/register"];

App.getInitialProps = async (appContext) => {
  const appProps = await NextApp.getInitialProps(appContext);

  const { req, res } = appContext.ctx;
  if (AUTHLESS_ROUTES.includes(req.url)) {
    return {};
  }

  const { user } = await supabase.auth.api.getUserByCookie(req);
  // If no user, redirect to splash.
  if (!user) {
    // if this is an initial page load, redirect on server-side
    if (res) {
      res.writeHead(307, { location: "/splash" });
      res.end();
    } else {
      Router.push("/splash");
    }
  }
  return {
    ...appProps,
    user,
  };
};

export default App;
