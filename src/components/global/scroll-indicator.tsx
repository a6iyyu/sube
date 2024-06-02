import React, { useState } from "react";

export const ScrollIndicator: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const ScrollPercentage = () => {
    const ScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const Percentage = (window.scrollY / ScrollHeight) * 100;
    setScrollProgress(Percentage);
  };

  window.addEventListener("scroll", ScrollPercentage);

  return <section className="fixed top-28 z-40 h-1 bg-blue-500 lg:top-36" style={{ width: `${scrollProgress}` + "%" }}></section>;
};