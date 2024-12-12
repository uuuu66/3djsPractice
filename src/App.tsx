import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Text from "./Text";
import RCanvas from "./Canvas";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function App() {
  return (
    <div className="w-screen h-4screen flex flex-col relative items-center justify-center p-36">
      <div
        id="canvas-container"
        className="fixed w-screen h-[calc(100vh-1px)] flex justify-center  items-center top-0 bg-gray-dark bg-opacity-75"
      >
        <RCanvas />
        <Text />
      </div>
    </div>
  );
}

export default App;
