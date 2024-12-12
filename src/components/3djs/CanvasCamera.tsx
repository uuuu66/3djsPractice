import { PerspectiveCamera as CameraRef, Vector3 } from "three";
import { PerspectiveCamera } from "@react-three/drei";
import { useCallback, useEffect, useRef } from "react";
import useCameraStore from "./hooks/useCamerStore";

interface Props {
  zIndex: number;
}
const MAX = 0.4;
const MAX_ROTATION = 0.1;

const CanvasCamera: React.FC<Props> = ({ zIndex }) => {
  const cameraRef = useRef<CameraRef>(null);
  const positionX = useRef(0);
  const positionY = useRef(0);
  const { fov, zoom } = useCameraStore();
  const calcualteRotation = useCallback((degree: number) => {
    if (degree > MAX_ROTATION) return MAX_ROTATION;
    if (degree < -MAX_ROTATION) return -MAX_ROTATION;
    return degree;
  }, []);
  useEffect(() => {
    const mouseMoveEvent = (event: MouseEvent) => {
      const x =
        ((window.innerWidth / 2 - event.clientX) / window.innerWidth) * MAX;
      const y =
        ((window.innerHeight / 2 - event.clientY) / window.innerHeight) * MAX;
      if (cameraRef.current) {
        positionX.current = x * Math.abs(x - 1);
        positionY.current = y * Math.abs(y - 1);
        cameraRef.current.rotation.y = calcualteRotation(-x / 60);
        cameraRef.current.rotation.x = calcualteRotation(y / 100);
      }
    };
    document.addEventListener("mousemove", mouseMoveEvent);
    return () => {
      document.removeEventListener("mousemove", mouseMoveEvent);
    };
  }, [zIndex]);

  return (
    <PerspectiveCamera
      ref={cameraRef}
      aspect={window.innerWidth / window.innerHeight / 4}
      makeDefault
      position={new Vector3(positionX.current, positionY.current, zIndex)}
      fov={fov}
      zoom={zoom}
    />
  );
};
export default CanvasCamera;
