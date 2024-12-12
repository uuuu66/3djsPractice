import { useFrame } from "@react-three/fiber";
import { useCallback, useMemo, useRef, useState } from "react";
import { Mesh, Vector3 } from "three";

interface Props {
  cameraZIndex: number;
}
const Donut = (props: Props) => {
  const { cameraZIndex } = props;
  const meshRef = useRef<Mesh>(null);
  const randomizePosition = useCallback(() => {
    return (Math.random() - 0.5) * (Math.random() * 50) + (Math.random() - 0.5);
  }, []);
  const randomizeZ = useCallback(() => {
    return Math.random() * -500;
  }, []);
  const rotation = useMemo(() => {
    return { x: (Math.random() - 0.5) * 0.1, y: (Math.random() - 0.5) * 0.1 };
  }, []);

  const [position, setPosition] = useState(
    new Vector3(randomizePosition(), randomizePosition(), randomizeZ())
  );

  const animate = useCallback(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += rotation.x;
      meshRef.current.rotation.y += rotation.y;
    }
  }, []);

  useFrame(() => {
    animate();
    if (Math.abs(position.z - cameraZIndex) < 20) {
      setPosition(
        new Vector3(
          randomizePosition(),
          randomizePosition(),
          cameraZIndex - 500
        )
      );
    }
  });
  return (
    <mesh ref={meshRef} position={position}>
      <meshStandardMaterial wireframe />
      <sphereGeometry args={[0.03, 0.03, 0.03]} />
    </mesh>
  );
};
export default Donut;
