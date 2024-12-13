import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useSticky from "../../../hooks/useSticky";
import { useMemo, useRef } from "react";
import circleBorderImg from "../../../../public/gradient_border_circle.webp";
gsap.registerPlugin(useGSAP, ScrollTrigger);
const TIMINGS = [
  [0, 1000],
  [2000, 1000],
  [3600, 600],
  [5000, 1000],
  [19300, 3000],
  [22400, 1000],
  [23500, 1000],
  [24600, 1000],
  [25700, 1000],
];
const CIRCLE_TEXT_TIMING = {
  START: 7000,
  GAP: 2000,
  END: 19300,
};
const IntroScene: React.FC = () => {
  const { entireContainerRef, stickyContainerRef, Section } = useSticky({
    height: "60000px",
  });
  const categories = useMemo(() => {
    return ["홍보", "취미", "입시", "구인시장", "공연", "교육"];
  }, []);
  const MAX_WIDTH = window.innerWidth > 480 * 6 ? 480 * 6 : window.innerWidth;
  const moveBarWrapperRef = useRef<HTMLDivElement>(null);
  const logoCircleRef = useRef<HTMLDivElement>(null);
  const moveBar1 = useRef<HTMLDivElement>(null);
  const moveBar2 = useRef<HTMLDivElement>(null);
  const hiddenBar = useRef<HTMLDivElement>(null);
  const outerCircleRef = useRef<HTMLDivElement>(null);

  const subCircles: string[] = useMemo(
    () => categories.map((category) => `.${category}-circle`),
    [categories]
  );
  const loadingRef = useRef(() => {
    const loadingAnimationTimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: entireContainerRef.current,
        markers: true,
        start: "top top",
        end: `+=${TIMINGS[0][1]}px`,
        scrub: 0.7,

        invalidateOnRefresh: true,
      },
    });
    gsap.fromTo(".circle", { opacity: 0 }, { opacity: 0 });
    loadingAnimationTimeLine
      .to(moveBar2.current, {
        y: "0%",
      })
      .to(
        hiddenBar.current,
        {
          y: "0%",
        },
        0
      );
  });
  const moveBarRef = useRef(() => {
    gsap.to(".move-bar-wrapper", {
      rotateZ: "90deg",
      scrollTrigger: {
        trigger: entireContainerRef.current,
        markers: true,
        start: `top+=${TIMINGS[1][0]}px top`,
        end: `+=${TIMINGS[1][1]}px`,
        invalidateOnRefresh: true,
        scrub: 1, //start-end
      },
    });
  });
  const barExitRef = useRef(() => {
    const barAnimationTimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: entireContainerRef.current,
        markers: true,
        start: `top+=${TIMINGS[2][0]}px top`,
        end: `+=${TIMINGS[2][1]}px`,
        scrub: 0.7,
        invalidateOnRefresh: true,
      },
    });
    barAnimationTimeLine
      .to(
        moveBarWrapperRef.current,
        {
          width: "480px",
          background: "transparent",
        },
        0
      )
      .fromTo(moveBar1.current, { opacity: 0.3 }, { opacity: 0 }, 0)
      .fromTo(hiddenBar.current, { scaleX: 1 }, { scaleX: 30 }, 0)
      .fromTo(hiddenBar.current, { opacity: 1 }, { opacity: 0 }, 0)
      .fromTo(
        moveBar2.current,
        { scaleX: 1, opacity: 1 },
        { scaleX: 30, opacity: 0 },
        0
      )
      .fromTo(".circle", { opacity: 0 }, { opacity: 0.4 }, 0);
  });
  const circlePresentRef = useRef(() => {
    subCircles.forEach((box, index) => {
      const x =
        -1 * (MAX_WIDTH / 2 - 200) +
        index * ((MAX_WIDTH - 400) / 6) +
        (MAX_WIDTH - 400) / 6 / 2;

      gsap.fromTo(
        box,
        { x: 0 },
        {
          x,
          scrollTrigger: {
            trigger: entireContainerRef.current,
            start: `top+=${TIMINGS[3][0]}px top`,
            end: `+=${TIMINGS[3][1]}px`,
            scrub: 1,
            markers: true,
            invalidateOnRefresh: true,
          },
        }
      );
    });
  });
  const circleTextExposureRef = useRef(() => {
    subCircles.forEach((box, index) => {
      const textClasName = `${box} .text`;
      gsap.from(box, {
        opacity: 0.4,
        duration: 1,
        scrollTrigger: {
          trigger: entireContainerRef.current,
          start: `top+=${
            CIRCLE_TEXT_TIMING.START + index * CIRCLE_TEXT_TIMING.GAP
          }px top`,
          end: `+=${CIRCLE_TEXT_TIMING.GAP}px`,
          scrub: 0.2,
          markers: true,
          invalidateOnRefresh: true,
          fastScrollEnd: true,
        },
      });
      gsap.to(box, {
        opacity: 1,
        scrollTrigger: {
          trigger: entireContainerRef.current,
          start: `top+=${
            CIRCLE_TEXT_TIMING.START + index * CIRCLE_TEXT_TIMING.GAP + 10
          }px top`,
          end: `+=${CIRCLE_TEXT_TIMING.GAP}px`,
          scrub: 0.2,
          markers: true,
          invalidateOnRefresh: true,
          fastScrollEnd: true,
        },
      });
      gsap.to(textClasName, {
        opacity: 1,
        scrollTrigger: {
          trigger: entireContainerRef.current,
          start: `top+=${
            CIRCLE_TEXT_TIMING.START + index * CIRCLE_TEXT_TIMING.GAP
          }px top`,
          end: `+=${CIRCLE_TEXT_TIMING.GAP}px`,
          scrub: 0.2,
          markers: true,
          invalidateOnRefresh: true,
          fastScrollEnd: true,
        },
      });
    });
  });
  const circleTranslateToCenterRef = useRef(() => {
    const circleTranslateToCenterTimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: entireContainerRef.current,
        start: `top+=${TIMINGS[4][0]} top`,
        end: `+=${TIMINGS[4][1]}`,
        markers: true,
        scrub: 1,
        invalidateOnRefresh: true,
        fastScrollEnd: true,
      },
    });
    subCircles.forEach((box) => {
      circleTranslateToCenterTimeLine
        .to(
          box,
          {
            x: 0,
          },
          0.5
        )
        .to(".text", { opacity: 0 }, 0.5);
    });
  });
  const reduceCircleRef = useRef(() => {
    const reduceCircleAnimationTimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: entireContainerRef.current,
        start: `top+=${TIMINGS[5][0]} top`,
        end: `+=${TIMINGS[5][1]}`,
        markers: true,
        scrub: 1,
        invalidateOnRefresh: true,
        fastScrollEnd: true,
      },
    });
    subCircles.forEach((box) => {
      reduceCircleAnimationTimeLine.fromTo(
        box,
        {
          scale: 1,
        },
        {
          scale: 0.5,
        }
      );
    });
  });
  const scaleCircleRef = useRef(() => {
    gsap.fromTo(
      logoCircleRef.current,
      { scale: 0.5 },
      {
        scale: 1,
        scrollTrigger: {
          trigger: entireContainerRef.current,
          start: `top+=${TIMINGS[6][0]} top`,
          end: `+=${TIMINGS[6][1]}`,
          markers: true,
          scrub: 1,
          invalidateOnRefresh: true,
          fastScrollEnd: true,
        },
      }
    );
    gsap.fromTo(
      logoCircleRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: entireContainerRef.current,
          start: `top+=${TIMINGS[6][0]} top`,
          end: `+=${TIMINGS[6][1]}`,
          markers: true,
          scrub: 1,
          invalidateOnRefresh: true,
          fastScrollEnd: true,
        },
      }
    );
  });
  const divdeCircleRef = useRef(() => {
    subCircles.forEach((box, index) => {
      const points = [
        [-360, 0],
        [-240, 280],
        [240, 280],
        [360, 0],
        [-240, -280],
        [240, -280],
      ];
      gsap.fromTo(
        box,
        {
          translateX: 0,
          translateY: 0,
        },
        {
          translateX: points[index][0],
          translateY: points[index][1],
          scrollTrigger: {
            trigger: entireContainerRef.current,
            start: `top+=${TIMINGS[7][0]} top`,
            end: `+=${TIMINGS[7][1]}`,
            markers: true,
            scrub: 1,
            invalidateOnRefresh: true,
            fastScrollEnd: true,
          },
        }
      );
    });
  });
  const textAfterDivideCircleRef = useRef(() => {
    subCircles.forEach((box) => {
      const textClasName = `${box} .text`;
      gsap.fromTo(
        textClasName,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: entireContainerRef.current,
            start: `top+=${TIMINGS[8][0]} top`,
            end: `+=${TIMINGS[8][1]}`,
            markers: true,
            scrub: 1,
            fastScrollEnd: true,
            invalidateOnRefresh: true,
          },
        }
      );
    });
    gsap.fromTo(
      outerCircleRef.current,
      {
        opacity: 0,
        scale: 1,
      },
      {
        opacity: 1,
        scale: 1.5,
        scrollTrigger: {
          trigger: entireContainerRef.current,
          start: `top+=${TIMINGS[8][0]} top`,
          end: `+=${TIMINGS[8][1]}`,
          markers: true,
          scrub: 1,
          fastScrollEnd: true,
          invalidateOnRefresh: true,
        },
      }
    );
  });
  useGSAP(() => {
    // 서클 퍼지는 애니메이션

    //서클 텍스트 등장 애니메이션

    divdeCircleRef.current?.();
    scaleCircleRef.current?.();
    reduceCircleRef.current?.();
    circleTranslateToCenterRef.current?.();
    circleTextExposureRef.current?.();
    circlePresentRef.current?.();
    barExitRef.current?.();
    moveBarRef.current?.();
    loadingRef.current?.();
    textAfterDivideCircleRef?.current?.();
  });

  return (
    <Section>
      <div
        ref={stickyContainerRef}
        className="flex justify-center items-center h-screen  w-full top-0"
      >
        <div
          className="w-1 h-[480px] relative move-bar-wrapper"
          ref={moveBarWrapperRef}
          style={{ overflow: "hidden" }}
        >
          <div
            ref={moveBar1}
            className="w-1 h-full  absolute left-0 move-bar-1 bg-white"
            style={{ opacity: 0.3 }}
          />
          <div
            ref={hiddenBar}
            className="w-1 h-full  absolute left-0 move-bar-1 bg-white hidden-bar"
            style={{ transform: "translateY(-100%)", opacity: 1 }}
          ></div>
          <div
            ref={moveBar2}
            className="w-1 h-full absolute opacity-100 right-0 z-10 bg-white move-bar-2"
            style={{ transform: "translateY(-100%)", opacity: 1 }}
          />
          <div
            className="w-[480px] h-[480px] absolute top-0 rounded-full border border-solid border-white"
            style={{ opacity: 0 }}
          />
        </div>
        <div
          className={`flex flex-col w-[480px] h-[480px] absolute  justify-center items-center  rounded-full  outer-circle`}
          style={{
            opacity: 0,

            transform: "scale(1)",
          }}
          ref={outerCircleRef}
        >
          <img
            className="absolute top-0 left-0 w-[480px] h-[480px] animate-spin border-img"
            src={circleBorderImg}
            alt="border"
          />
        </div>
        <div className="absolute top-0 h-screen w-full flex items-center justify-center">
          {categories.map((category, index) => (
            <div
              key={category}
              className={`flex flex-col w-[480px] h-[480px] absolute justify-center items-center  rounded-full circle ${category}-circle ${
                index === 2 ? "main-circle" : ""
              }`}
              style={{ opacity: 0 }}
            >
              <span className="text-white text-lg text">{category}</span>
              <img
                className="absolute top-0 left-0 w-[480px] h-[480px] animate-spin border-img"
                src={circleBorderImg}
                alt="border"
              />
            </div>
          ))}
          <div
            className={`flex flex-col w-[480px] h-[480px] absolute  justify-center items-center  rounded-full  logo-circle`}
            style={{
              opacity: 0,
              backgroundColor: "#0D0E12",
              transform: "scale(0.5)",
            }}
            ref={logoCircleRef}
          >
            <img
              className="absolute top-0 left-0 w-[480px] h-[480px] animate-spin border-img"
              src={circleBorderImg}
              alt="border"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default IntroScene;
