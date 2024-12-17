import { useLayoutEffect, useRef } from "react";
import Scrollbar from "smooth-scrollbar";
import useScrollBarStore from "../stores/useScrollBarStore";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useSmoothScroller = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const { scrollBar, setScrollBar, setMainSection } = useScrollBarStore();

  useLayoutEffect(() => {
    if (mainRef.current) {
      console.log("initiatedScrollBar");
      // 1. Scrollbar 초기화
      const initiatedScrollBar = Scrollbar.init(mainRef.current, {
        damping: 0.05,
        thumbMinSize: 20,
        alwaysShowTracks: false,
      });
      setScrollBar(initiatedScrollBar);

      // 2. scrollerProxy 등록
      ScrollTrigger.scrollerProxy(mainRef.current, {
        scrollTop(value) {
          if (arguments.length) {
            initiatedScrollBar.scrollTop = value || 0; // setter
          }
          return initiatedScrollBar.scrollTop; // getter
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: "transform",
      });

      // 3. 스크롤 이벤트와 ScrollTrigger 동기화
      initiatedScrollBar.addListener(() => {
        ScrollTrigger.update();
      });

      // 4. ScrollTrigger 업데이트 및 기본 설정
      ScrollTrigger.defaults({ scroller: mainRef.current });
      ScrollTrigger.update();
    }

    // Cleanup
    return () => {
      if (scrollBar) scrollBar.destroy();
      ScrollTrigger.killAll();
    };
  }, [setScrollBar, scrollBar]);

  useLayoutEffect(() => {
    if (mainRef.current) setMainSection(mainRef.current);
  }, [setMainSection]);

  return { mainRef, scrollBar };
};

export default useSmoothScroller;
