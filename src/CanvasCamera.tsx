import { PerspectiveCamera as CameraRef, Vector3 } from "three";
import { PerspectiveCamera } from "@react-three/drei";
import { useEffect, useRef } from "react";

interface Props {
  zIndex: number;
}
const MAX = 0.4;

const CanvasCamera: React.FC<Props> = ({ zIndex }) => {
  const cameraRef = useRef<CameraRef>(null);
  const positionX = useRef(0);
  const positionY = useRef(0);

  useEffect(() => {
    const mouseMoveEvent = (event: MouseEvent) => {
      const x =
        ((window.innerWidth / 2 - event.clientX) / window.innerWidth) * MAX;
      const y =
        ((window.innerHeight / 2 - event.clientY) / window.innerHeight) * MAX;
      if (cameraRef.current) {
        positionX.current = x * (1 - x);
        positionY.current = y * (1 - y);
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
      fov={100}
      zoom={-50}
    />
  );
};
export default CanvasCamera;
