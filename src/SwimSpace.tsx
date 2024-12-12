import { useState } from "react";
import CanvasCamera from "./CanvasCamera";
import { useFrame } from "@react-three/fiber";
import Donut from "./Donut";

const SwimSpace = () => {
  const [zIndex, setZIndex] = useState(500);
  useFrame(() => {
    setZIndex((prev) => prev - 1);
  });
  return (
    <>
      <CanvasCamera zIndex={zIndex} />
      <ambientLight intensity={1} color="#ffffff" />
      <Donut cameraZIndex={zIndex} />
      <Donut cameraZIndex={zIndex} />
      <Donut cameraZIndex={zIndex} />
      <Donut cameraZIndex={zIndex} />
      <Donut cameraZIndex={zIndex} />
      <Donut cameraZIndex={zIndex} />
      <Donut cameraZIndex={zIndex} />
      <Donut cameraZIndex={zIndex} />
      <Donut cameraZIndex={zIndex} />
      <Donut cameraZIndex={zIndex} />
      <Donut cameraZIndex={zIndex} />
      <Donut cameraZIndex={zIndex} />
      <Donut cameraZIndex={zIndex} />
      <Donut cameraZIndex={zIndex} />
      <Donut cameraZIndex={zIndex} />
      <Donut cameraZIndex={zIndex} />
      <Donut cameraZIndex={zIndex} />
      <Donut cameraZIndex={zIndex} />
      <Donut cameraZIndex={zIndex} />
      <color attach="background" args={["black"]} />
    </>
  );
};
export default SwimSpace;
