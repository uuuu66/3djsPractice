import { extend } from "@react-three/fiber";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import useCameraStore from "./useCamerStore";

extend({ TextGeometry });

const Text = () => {
  const { speed, cameraZIndex, setCamereZIndex, setSpeed } = useCameraStore();
  return (
    <div className="fixed bottom-2 text-gray-light">
      숫자만 입력!!!!! speed
      <input
        value={speed}
        style={{ backgroundColor: "black" }}
        type="number"
        onChange={(e) => {
          setSpeed(e.target.valueAsNumber);
        }}
      />
      cameraZ
      <input
        value={cameraZIndex}
        style={{ backgroundColor: "black" }}
        type="number"
        onChange={(e) => {
          setCamereZIndex(e.target.valueAsNumber);
        }}
      />
    </div>
  );
};
export default Text;
