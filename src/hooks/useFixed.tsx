import { useEffect, useRef } from "react";
import { ScrollListener } from "smooth-scrollbar/interfaces";
import useScrollBarStore from "../stores/useScrollBarStore";
const FIX_ZINDEX = 0;
const useFixed = () => {
  const { scrollBar, mainSection } = useScrollBarStore();
  const fixedContainerRef = useRef<HTMLDivElement>(null);

  const scrollEvent: ScrollListener = (scrollEvent) => {
    const { offset } = scrollEvent;

    if (fixedContainerRef.current) {
      fixedContainerRef.current.style.position = "fixed";
      fixedContainerRef.current.style.zIndex = `${FIX_ZINDEX}`;
      fixedContainerRef.current.style.top = `${offset.y}px`;
    }
  };

  useEffect(() => {
    if (scrollBar) scrollBar.addListener(scrollEvent);
    return () => {
      scrollBar?.removeListener(scrollEvent);
    };
  }, [scrollBar]);

  return { fixedContainerRef, mainSection };
};
export default useFixed;
