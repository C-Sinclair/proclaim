import { useEffect } from "react";
import NextApp from "next/app";
import Head from "next/head";
import Router from "next/router";
import { supabase } from "../util/supabase";
import "../styles/globals.css";

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

  const { ctx } = appContext;
  if (AUTHLESS_ROUTES.includes(ctx.req?.url)) {
    return {};
  }

  const { user } = await supabase.auth.api.getUserByCookie(ctx.req);
  // If no user, redirect to splash.
  if (!user) {
    // if this is an initial page load, redirect on server-side
    if (ctx.res) {
      ctx.res.writeHead(307, { location: "/splash" });
      ctx.res.end();
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
