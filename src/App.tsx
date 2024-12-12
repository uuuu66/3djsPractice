import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Text from "./Text";
import RCanvas from "./Canvas";
import ScrollSpeedUpdater from "./ScrollSppedUpdater";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function App() {
  return (
    <div className="w-screen h-fullPage flex flex-col relative items-center  justify-center p-36">
      <ScrollSpeedUpdater />
      <div
        id="canvas-container"
        className="fixed w-screen h-screen flex justify-center  items-center bottom-0 bg-gray-dark bg-opacity-75"
      >
        <RCanvas />
        <Text />
      </div>
      <span>his</span>
      <span>his</span>
      <span>his</span>
      <span>his</span>
      <span>his</span> <span>his</span>
    </div>
  );
}

export default App;
