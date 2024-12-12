import { Canvas } from "@react-three/fiber";
import SwimSpace from "./SpaceScheen/SwimSpace";

const RCanvas: React.FC = () => {
  return (
    <Canvas
      onWheel={(e) => e.stopPropagation()} // 휠 이벤트 전파 차단
    >
      <SwimSpace />
    </Canvas>
  );
};
export default RCanvas;
