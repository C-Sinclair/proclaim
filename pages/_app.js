import { useEffect } from "react";
import "../styles/globals.css";

function App({ Component, pageProps }) {
  useEffect(() => {
    const theme = localStorage.getItem("proclaim-theme");
    if (theme) {
      document.body.setAttribute("data-theme", theme);
    }
  }, []);
  return <Component {...pageProps} />;
}

export default App;
