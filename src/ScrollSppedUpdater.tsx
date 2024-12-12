import { useEffect, useRef } from "react";

import gsap from "gsap";
import useCameraStore from "./useCamerStore";

const ScrollSpeedUpdater = () => {
  const { setSpeed } = useCameraStore();
  const lastScrollY = useRef(0); // 이전 스크롤 위치
  const lastTime = useRef(0); // 이전 시간

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      const currentTime = Date.now();

      // 스크롤 위치 변화량
      const deltaY = currentScrollY - lastScrollY.current;

      // 시간 변화량
      const deltaTime = currentTime - lastTime.current;

      // 속도 계산
      if (deltaTime > 0) {
        const scrollSpeed = Math.abs(deltaY / deltaTime) * 1000; // px/s 단위 속도
        let newSpeed = Math.min(1 + scrollSpeed / 500, 5); // speed 값 제한 (최대 5)

        // 최상단이나 최하단에서는 speed를 초기화
        if (
          currentScrollY <= 0 ||
          currentScrollY + viewportHeight >= documentHeight
        ) {
          newSpeed = 1; // 기본 속도로 복귀
        }

        // 부드러운 전환을 위해 GSAP 사용
        gsap.to(
          { value: useCameraStore.getState().speed },
          {
            value: newSpeed,
            duration: 0.5,
            ease: "power2.out",
            onUpdate: function () {
              setSpeed(this.targets()[0].value);
            },
          }
        );
      }

      lastScrollY.current = currentScrollY;
      lastTime.current = currentTime;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setSpeed]);

  return null;
};

export default ScrollSpeedUpdater;
