import "@/styles/styles.scss";
import { useEffect } from "react";
import { GoogleAnalytics } from "nextjs-google-analytics";
import Aos from "aos";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <>
      <GoogleAnalytics trackPageViews />
      <ThemeProvider defaultTheme="light">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
