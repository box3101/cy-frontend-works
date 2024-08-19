import { useEffect } from 'react';

export function useCustomCursor() {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const cursor2 = document.getElementById("cursor2");
    const cursor3 = document.getElementById("cursor3");

    const moveCursor = (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
      cursor2.style.left = e.clientX + "px";
      cursor2.style.top = e.clientY + "px";
      cursor3.style.left = e.clientX + "px";
      cursor3.style.top = e.clientY + "px";
    };

    document.addEventListener("mousemove", moveCursor);

    const addHover = () => {
      cursor2.classList.add("hover");
      cursor3.classList.add("hover");
    };

    const removeHover = () => {
      cursor2.classList.remove("hover");
      cursor3.classList.remove("hover");
    };

    const hoverTargets = document.querySelectorAll(".hover-target");
    hoverTargets.forEach((target) => {
      target.addEventListener("mouseover", addHover);
      target.addEventListener("mouseout", removeHover);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      hoverTargets.forEach((target) => {
        target.removeEventListener("mouseover", addHover);
        target.removeEventListener("mouseout", removeHover);
      });
    };
  }, []);
}