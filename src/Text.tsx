import { extend } from "@react-three/fiber";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";

extend({ TextGeometry });

const Text = () => {
  return (
    <div className="fixed bottom-2 text-yellow">dsfads,{window.scrollY}</div>
  );
};
export default Text;
