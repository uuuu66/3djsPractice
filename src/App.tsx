import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Text from "./components/3djs/Text";
import RCanvas from "./components/3djs/Canvas";
import ScrollSpeedUpdater from "./components/ScrollSppedUpdater";

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
      <span className="sticky top-2/3 h-2 w-3 bg-blue">his</span>
      <span>his</span>
      <span>his</span> <span>his</span>
    </div>
  );
}

export default App;
