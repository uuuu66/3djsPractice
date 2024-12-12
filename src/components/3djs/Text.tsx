import { extend } from "@react-three/fiber";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import useCameraStore from "./hooks/useCamerStore";

extend({ TextGeometry });

const Text = () => {
  const { speed, cameraZIndex } = useCameraStore();
  return (
    <div className="fixed left-2  flex flex-col gap-2 bg-gray-light p-2 w-40">
      <span>
        speed:
        {speed}
      </span>
      <span>
        cameraZ:
        {cameraZIndex}
      </span>
      <span>scroll: {scrollY}</span>
    </div>
  );
};
export default Text;
