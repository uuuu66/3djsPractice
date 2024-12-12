import CanvasCamera from "./CanvasCamera";
import { useFrame } from "@react-three/fiber";

import useCameraStore from "./useCamerStore";
import { useMemo } from "react";
import Star from "./Star";

const SwimSpace = () => {
  const { cameraZIndex, speed, setCamereZIndex } = useCameraStore();
  useFrame(() => {
    setCamereZIndex(cameraZIndex - speed);
  });
  const stars = useMemo(() => {
    return new Array(30).fill(1);
  }, []);
  return (
    <>
      <CanvasCamera zIndex={cameraZIndex} />
      <ambientLight intensity={1} color="#ffffff" />
      {stars.map((value, index) => (
        <Star key={value + index} />
      ))}

      <color attach="background" args={["black"]} />
    </>
  );
};
export default SwimSpace;
