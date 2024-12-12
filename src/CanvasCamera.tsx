import { Vector3 } from "three";
import { PerspectiveCamera } from "@react-three/drei";

interface Props {
  zIndex: number;
}
const CanvasCamera: React.FC<Props> = ({ zIndex }) => {
  return (
    <PerspectiveCamera
      aspect={window.innerWidth / window.innerHeight / 4}
      makeDefault
      position={new Vector3(0, 0, zIndex)}
      fov={80}
      zoom={-50}
    />
  );
};
export default CanvasCamera;
