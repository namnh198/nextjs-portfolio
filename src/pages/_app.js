import "@/styles/styles.scss";
import { useEffect, useState } from "react";
import Aos from "aos";
import { ThemeProvider } from "next-themes";
import { Loader } from "@/components/templates";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Aos.init({
      duration: 1500,
      once: true,
    });
  }, []);

  useEffect(() => {
    const handleRouteChange = () => {
      setLoading(true);
    };

    const handleRouteChangeComplete = () => {
      setLoading(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [router.events]);
  return (
    <ThemeProvider defaultTheme="light">
      {loading ? <Loader /> : <Component {...pageProps} />}
    </ThemeProvider>
  );
}
