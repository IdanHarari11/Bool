import React from "react";
import { HiOutlineChevronUp } from "react-icons/hi";
import "./ScrollToTop.css";

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      if (window.pageYOffset > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      className={`fixed right-5 bottom-5 z-50 p-2 bg-transparent border-2 shadow-md border-primary hover:bg-primary duration-300 text-primary hover:text-white ${
        showScroll ? "fade-in active" : "fade-in"
      }`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <HiOutlineChevronUp className="text-xl" />
    </button>
  );
};

export default ScrollToTop;
