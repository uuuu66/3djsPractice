import { useRef } from "react";
import useCameraStore from "../hooks/useCamerStore";
import { Group, Vector3 } from "three";
import { useFrame } from "@react-three/fiber";

const Donut = () => {
  const { cameraZIndex, speed } = useCameraStore();
  const ref = useRef<Group>(null);
  useFrame(() => {
    if (ref.current) ref.current.rotation.y += speed / 50;
  });

  return (
    <group ref={ref} position={new Vector3(0, 0, cameraZIndex - 400)}>
      <mesh>
        <boxGeometry />
        <meshStandardMaterial color={"white"} wireframeLinewidth={4} />
      </mesh>
      <mesh>
        <sphereGeometry args={[]} />
        <meshStandardMaterial wireframe wireframeLinewidth={1} />
      </mesh>
    </group>
  );
};
export default Donut;
