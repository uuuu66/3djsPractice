import { useFrame } from "@react-three/fiber";
import { useCallback, useMemo, useRef, useState } from "react";
import { Mesh, Vector3 } from "three";
import useCameraStore from "../hooks/useCamerStore";

const Star = () => {
  const { cameraZIndex } = useCameraStore();
  const meshRef = useRef<Mesh>(null);
  const randomizePosition = useCallback((offset: number) => {
    return (
      (Math.random() - 0.5) * (Math.random() * offset) + (Math.random() - 0.5)
    );
  }, []);
  const randomizeNumber = useCallback(
    (offset: number, subtractOffset?: number) => {
      return (Math.random() - (subtractOffset || 0)) * offset;
    },
    []
  );
  const rotation = useMemo(() => {
    return { x: (Math.random() - 0.5) * 0.1, y: (Math.random() - 0.5) * 0.1 };
  }, []);

  const [position, setPosition] = useState(
    new Vector3(
      randomizePosition(50),
      randomizePosition(50),
      randomizeNumber(-500)
    )
  );

  const animate = useCallback(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += rotation.x;
      meshRef.current.rotation.y += rotation.y;
    }
  }, []);

  useFrame(() => {
    animate();
    if (Math.abs(position.z - cameraZIndex) < 10) {
      setPosition(
        new Vector3(
          randomizePosition(50),
          randomizePosition(50),
          cameraZIndex - 500
        )
      );
    }
  });
  return (
    <mesh ref={meshRef} position={position}>
      <meshStandardMaterial transparent />
      <sphereGeometry args={[randomizeNumber(0.01, -1)]} />
    </mesh>
  );
};
export default Star;
