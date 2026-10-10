import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {

  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    const id = hash.replace("#", "");

    const timer = setTimeout(() => {
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo(0, 0);
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [pathname, hash]);

  return null;

}