import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Text from "./components/3djs/Text";
import RCanvas from "./components/3djs/Canvas";
import ScrollSpeedUpdater from "./components/ScrollSppedUpdater";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function App() {
  useGSAP(() => {
    gsap.to(".move", {
      scrollTrigger: {
        trigger: ".text", // 요소가 뷰포트에 드러나는 순간부터 애니메이션이 작동
        scrub: 1,
        start: "top top",
        end: "bottom bottom",
        pin: true,
        markers: true,
      },
      top: "-2000px",
      z: "-2000px",
    });
  });
  const lists = [
    "피카츄 라이츄",
    "파이리 꼬부기",
    "버터풀 야도란",
    "피존투 또가스",
    "서로 생긴 모습은 ",
    "달라도 우리는",
    "모두 친구",
    "맞아 맞아용",
  ];
  return (
    <div className="w-screen h-fullPage flex flex-col relative items-center  justify-start p-36">
      <ScrollSpeedUpdater />
      <div
        id="canvas-container"
        className="fixed w-screen h-screen flex justify-center  items-center bottom-0 bg-gray-dark bg-opacity-75"
      >
        <RCanvas />
        <Text />
      </div>
      <div className="h-[200vh]" />

      <div
        className={`flex w-full justify-center  h-[1000px] relative   gap-2 items-center overflow-hidden  text`}
      >
        <div
          className="move flex flex-col items-center w-[500px] text-gray-light font-bold text-lg  gap-40 h-full"
          style={{ top: "1000px" }}
        >
          {lists.map((list) => (
            <div className="list" key={list}>
              <span>{list.split(" ")[0]}</span>

              <span>{list.split(" ")[1]}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="fixed top-0 z-50 w-screen h-10 top-dim " />
      <div className="fixed bottom-0 z-50 w-screen h-10 bottom-dim" />
    </div>
  );
}

export default App;
