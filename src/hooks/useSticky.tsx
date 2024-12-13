import { HTMLAttributes, useCallback, useEffect, useRef } from "react";
interface SectionProps extends HTMLAttributes<HTMLDivElement> {}
const useSticky = (args: { height: string }) => {
  const { height = "300vh" } = args;
  const stickyContainerRef = useRef<HTMLDivElement>(null);
  const entireContainerRef = useRef<HTMLDivElement>(null);
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
  useEffect(() => {
    const scrollEvent = () => {
      if (stickyContainerRef.current && entireContainerRef.current) {
        const rect = entireContainerRef.current.getBoundingClientRect();

        if (rect && entireContainerRef) {
          if (rect.top <= 0) {
            if (rect.height + rect.top - window.innerHeight > 0) {
              stickyContainerRef.current.style.position = `fixed`;
              stickyContainerRef.current.style.top = `${0}px`;
              stickyContainerRef.current.style.bottom = `unset`;
              stickyContainerRef.current.style.left = "0px";
            } else {
              //이벤트 끝난 후
              stickyContainerRef.current.style.position = `absolute`;
              stickyContainerRef.current.style.top = `unset`;
              stickyContainerRef.current.style.bottom = "0px";
              stickyContainerRef.current.style.left = "0px";
            }
          } else {
            //이벤트 영역에 들어오기 전
            stickyContainerRef.current.style.position = `relative`;
            stickyContainerRef.current.style.top = `0px`;
            stickyContainerRef.current.style.bottom = "unset";
            stickyContainerRef.current.style.left = "unset";
          }
        }
      }
    };
    window.addEventListener("scroll", scrollEvent);
    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, []);

  return { stickyContainerRef, entireContainerRef, Section };
};
export default useSticky;
