import React, { useEffect, useState } from "react";

export const ScrollToTop: React.FC = () => {
  const [showScroll, setShowScroll] = useState<boolean>(false);

  const HandleScroll = () => {
    if (window.scrollY > 40) {
      setShowScroll(true);
    } else if (window.scrollY <= 40) {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", HandleScroll);
    return () => window.removeEventListener("scroll", HandleScroll);
  }, [showScroll]);

  return (
    <section
      className={`fixed bottom-8 right-8 z-50 grid h-20 w-20 cursor-pointer place-items-center rounded-full bg-gray-100 transition-all duration-300 ease-in-out hover:bg-gray-200 lg:bottom-16 lg:right-16 lg:h-24 lg:w-24 ${showScroll ? "visible opacity-100" : "invisible opacity-0"}`}
      onClick={() => window.scrollTo({ behavior: "smooth", top: 0 })}
    >
      <img src="/scroll-to-top.png" alt="Scroll To Top" className="w-12 text-sm font-semibold text-gray-950 lg:w-16" />
    </section>
  );
};