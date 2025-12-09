// useReport.js

import { useCallback, useEffect, useRef } from "react";

const getElement = () => {
  let element = document.getElementById("report-container");

  if (element === null) {
    element = document.createElement("div");
    element.id = "report-container";

    element.style.position = "fixed";
    element.style.top = "50%";
    element.style.left = "50%";
    element.style.fontSize = "32px";
    element.style.transform = "translate(-50%, -50px)";
    element.style.padding = "20px";
    element.style.background = "rgba(240, 240, 240, 0.4)";
    element.style.borderRadius = "20px";
    element.style.backdropFilter = "blur(8px)";
    element.style.zIndex = "9999";

    document.body.appendChild(element);
  }

  return element;
};

export default function useReport() {
  const timer = useRef(null);
  const elementRef = useRef(null);

  const cleanup = useCallback(() => {
    if (timer.current) clearTimeout(timer.current);

    if (elementRef.current && document.body.contains(elementRef.current)) {
      document.body.removeChild(elementRef.current);
    }

    elementRef.current = null;
  }, []);

  useEffect(() => {
    return cleanup;
  }, [cleanup]);

  return useCallback(
    (content) => {
      if (!elementRef.current) {
        elementRef.current = getElement();
      }

      const el = elementRef.current;
      el.innerHTML = content;

      if (timer.current) clearTimeout(timer.current);

      timer.current = setTimeout(cleanup, 1000);

      return timer.current;
    },
    [cleanup]
  );
}