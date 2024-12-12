import CanvasCamera from "./CanvasCamera";
import { useFrame } from "@react-three/fiber";
import Donut from "./Donut";
import useCameraStore from "./useCamerStore";

const SwimSpace = () => {
  const { cameraZIndex, speed, setCamereZIndex } = useCameraStore();
  useFrame(() => {
    setCamereZIndex(cameraZIndex - speed);
  });
  return (
    <>
      <CanvasCamera zIndex={cameraZIndex} />
      <ambientLight intensity={1} color="#ffffff" />
      <Donut cameraZIndex={cameraZIndex} />
      <Donut cameraZIndex={cameraZIndex} />
      <Donut cameraZIndex={cameraZIndex} />
      <Donut cameraZIndex={cameraZIndex} />
      <Donut cameraZIndex={cameraZIndex} />
      <Donut cameraZIndex={cameraZIndex} />
      <Donut cameraZIndex={cameraZIndex} />
      <Donut cameraZIndex={cameraZIndex} />
      <Donut cameraZIndex={cameraZIndex} />
      <Donut cameraZIndex={cameraZIndex} />
      <Donut cameraZIndex={cameraZIndex} />
      <Donut cameraZIndex={cameraZIndex} />
      <Donut cameraZIndex={cameraZIndex} />
      <Donut cameraZIndex={cameraZIndex} />
      <Donut cameraZIndex={cameraZIndex} />
      <Donut cameraZIndex={cameraZIndex} />
      <Donut cameraZIndex={cameraZIndex} />
      <color attach="background" args={["black"]} />
    </>
  );
};
export default SwimSpace;
