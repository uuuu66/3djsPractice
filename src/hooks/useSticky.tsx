import { HTMLAttributes, useCallback, useEffect, useRef } from "react";
import { ScrollListener } from "smooth-scrollbar/interfaces";
import useScrollBarStore from "../stores/useScrollBarStore";

interface SectionProps extends HTMLAttributes<HTMLDivElement> {}
const useSticky = (args: { height: string }) => {
  const { height = "300vh" } = args;
  const stickyContainerRef = useRef<HTMLDivElement>(null);
  const entireContainerRef = useRef<HTMLDivElement>(null);
  const { scrollBar } = useScrollBarStore();
  const Section: React.FC<SectionProps> = useCallback(
    (props: SectionProps) => {
      return (
        <section
          ref={entireContainerRef}
          style={{ height, position: "relative", width: "100%" }}
          {...props}
        >
          {props.children}
        </section>
      );
    },
    [height]
  );
  const scrollEvent: ScrollListener = (scrollEvent) => {
    const { offset } = scrollEvent;

    if (stickyContainerRef.current && entireContainerRef.current) {
      const rect = entireContainerRef.current.getBoundingClientRect();

      if (rect && entireContainerRef) {
        if (rect.top <= 0) {
          if (rect.height + rect.top - window.innerHeight > 0) {
            stickyContainerRef.current.style.position = `fixed`;
            stickyContainerRef.current.style.zIndex = `1`;
            stickyContainerRef.current.style.top = `${offset.y}px`;
            stickyContainerRef.current.style.bottom = `unset`;
          } else {
            //이벤트 끝난 후
            stickyContainerRef.current.style.position = `absolute`;
            stickyContainerRef.current.style.top = `unset`;
            stickyContainerRef.current.style.bottom = "0px";
          }
        } else {
          //이벤트 영역에 들어오기 전
          // stickyContainerRef.current.style.position = `relative`;
          // stickyContainerRef.current.style.top = `0px`;
          // stickyContainerRef.current.style.bottom = "unset";
          // stickyContainerRef.current.style.left = "unset";
        }
      }
    }
  };

  useEffect(() => {
    if (scrollBar) scrollBar.addListener(scrollEvent);
    return () => {
      scrollBar?.removeListener(scrollEvent);
    };
  }, [scrollBar]);

  return { stickyContainerRef, entireContainerRef, Section };
};
export default useSticky;
