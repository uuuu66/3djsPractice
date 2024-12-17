import { Canvas } from "@react-three/fiber";
import SwimSpace from "./SpaceScheen/SwimSpace";
import useFixed from "../../hooks/useFixed";

const RCanvas: React.FC = () => {
  const { fixedContainerRef } = useFixed();
  return (
    <div ref={fixedContainerRef} className="h-screen w-screen star">
      <Canvas
        onWheel={(e) => e.stopPropagation()} // 휠 이벤트 전파 차단
      >
        <SwimSpace />
      </Canvas>
    </div>
  );
};
export default RCanvas;
