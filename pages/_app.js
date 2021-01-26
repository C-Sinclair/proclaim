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

export default App;
