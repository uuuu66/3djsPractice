import CanvasCamera from "../CanvasCamera";
import { useFrame } from "@react-three/fiber";

import useCameraStore from "../hooks/useCamerStore";
import { useMemo } from "react";
import Star from "../SpaceScheen/Star";
import Donut from "./Donut";
import { Vector3 } from "three";

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
      <directionalLight
        intensity={2}
        position={new Vector3(0, 0, 30)}
        color="#ffffff"
      />

      {stars.map((value, index) => (
        <Star key={value + index} />
      ))}
      <Donut />
      <color attach="background" args={["black"]} />
    </>
  );
};
export default SwimSpace;
