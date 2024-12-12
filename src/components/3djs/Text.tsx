import { extend } from "@react-three/fiber";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import useCameraStore from "./hooks/useCamerStore";

extend({ TextGeometry });

const Text = () => {
  const { speed, cameraZIndex, setSpeed } = useCameraStore();
  return (
    <div className="fixed bottom-2  flex gap-2 bg-gray-light p-2">
      숫자만 입력!!!!!
      <span>
        speed
        <input
          value={speed}
          type="number"
          onChange={(e) => {
            setSpeed(e.target.valueAsNumber);
          }}
        />
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
