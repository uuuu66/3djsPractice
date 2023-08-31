import { Canvas } from "@react-three/fiber";
import { useRef, useState } from "react";
import LightConfig from "./classes/LightConfig";
import BoxConfig from "./classes/BoxConfig";
import { BoxGeometry } from "three";
const filterItemClassName = "flex flex-col";
const inputClassName = "h-16 flex flex-col items-center";
const filterWrapperClassName = "w-full flex justify-between gap-1";
function App() {
  const [lightConfig, setLightConfig] = useState(new LightConfig());
  const [boxConfig, setBoxConfig] = useState(new BoxConfig());
  const [axis, setAxis] = useState("x");
  const boxRef = useRef<BoxGeometry>(null);
  return (
    <div className="w-full h-full flex flex-col gap-1 items-center justify-center p-36">
      {import.meta.env.VITE_TITLE}
      <div className={filterWrapperClassName}>
        <div className={filterItemClassName}>
          <h4>ambientLight-intensity</h4>
          <div className={inputClassName}>
            <input
              type="range"
              min={0}
              max={100}
              value={lightConfig.ambientLight?.intensity * 100}
              onChange={(e) => {
                setLightConfig({
                  ...lightConfig,
                  ambientLight: {
                    ...lightConfig.ambientLight,
                    intensity: Number(e.target.value) / 100,
                  },
                });
              }}
            />
            {lightConfig.ambientLight?.intensity}
          </div>
        </div>
        <div className={filterItemClassName}>
          <h4>ambientLight-color</h4>
          <div className={inputClassName}>
            <input
              className="border-2 border-black"
              value={lightConfig.ambientLight.color}
              onChange={(e) => {
                setLightConfig({
                  ...lightConfig,
                  ambientLight: {
                    ...lightConfig.ambientLight,
                    color: e.target.value,
                  },
                });
              }}
            />
            {lightConfig.ambientLight?.color}
          </div>
        </div>

        <div className={filterItemClassName}>
          <h4>directionalLight-position</h4>
          <div className={inputClassName}>
            <input
              type="range"
              min={0}
              max={100}
              value={lightConfig.directionalLight.position[0]}
              onChange={(e) => {
                const position = lightConfig.directionalLight.position;
                setLightConfig({
                  ...lightConfig,
                  directionalLight: {
                    ...lightConfig.directionalLight,
                    position: [
                      Number(e.target.value),
                      position[1],
                      position[2],
                    ],
                  },
                });
              }}
            />
            <input
              type="range"
              min={0}
              max={100}
              value={lightConfig.directionalLight.position[1]}
              onChange={(e) => {
                const position = lightConfig.directionalLight.position;
                setLightConfig({
                  ...lightConfig,
                  directionalLight: {
                    ...lightConfig.directionalLight,
                    position: [
                      position[0],
                      Number(e.target.value),
                      position[2],
                    ],
                  },
                });
              }}
            />
            <input
              type="range"
              min={0}
              max={100}
              value={lightConfig.directionalLight.position[2]}
              onChange={(e) => {
                const position = lightConfig.directionalLight.position;
                setLightConfig({
                  ...lightConfig,
                  directionalLight: {
                    ...lightConfig.directionalLight,
                    position: [
                      position[0],
                      position[1],
                      Number(e.target.value),
                    ],
                  },
                });
              }}
            />

            {`${lightConfig.directionalLight.position}`}
          </div>
        </div>
        <div className={filterItemClassName}>
          <h4>directionalLight-color</h4>
          <div className={inputClassName}>
            <input
              className="border-2 border-black"
              value={lightConfig.directionalLight.color}
              onChange={(e) => {
                setLightConfig({
                  ...lightConfig,
                  directionalLight: {
                    ...lightConfig.directionalLight,
                    color: e.target.value,
                  },
                });
              }}
            />
            {lightConfig.directionalLight?.color}
          </div>
        </div>
      </div>
      <div
        id="canvas-container"
        className="w-full h-full flex justify-center items-center bg-gray-dark bg-opacity-75"
      >
        <Canvas>
          <ambientLight {...lightConfig.ambientLight} />
          <directionalLight {...lightConfig.directionalLight} />
          <mesh>
            <boxGeometry
              ref={boxRef}
              args={[boxConfig.width, boxConfig.height, boxConfig.depth]}
              //   args={[
              //     boxConfig.width,
              //     boxConfig.height,
              //     boxConfig.depth,
              //     1,
              //     1,
              //     1,
              //   ]}
              // />
            />
            <meshStandardMaterial />
          </mesh>
        </Canvas>
      </div>
      <div className={filterWrapperClassName}>
        <div className={filterItemClassName}>
          <h4>BOX-WIDTH</h4>
          <div className={inputClassName}>
            <input
              type="range"
              min={0}
              max={10}
              value={boxConfig.width}
              onChange={(e) => {
                setBoxConfig({ ...boxConfig, width: Number(e.target.value) });
              }}
            />
            {boxConfig.width}
          </div>
        </div>{" "}
        <div className={filterItemClassName}>
          <h4>BOX-HEIGHT</h4>
          <div className={inputClassName}>
            <input
              type="range"
              min={0}
              max={10}
              value={boxConfig.height}
              onChange={(e) => {
                setBoxConfig({ ...boxConfig, height: Number(e.target.value) });
              }}
            />
            {boxConfig.height}
          </div>
        </div>{" "}
        <div className={filterItemClassName}>
          <h4>BOX-DEPTH</h4>
          <div className={inputClassName}>
            <input
              type="range"
              min={0}
              max={10}
              value={boxConfig.depth}
              onChange={(e) => {
                setBoxConfig({ ...boxConfig, depth: Number(e.target.value) });
              }}
            />
            {boxConfig.depth}
          </div>
        </div>
        <div className={filterItemClassName}>
          <h4>돌려보기</h4>
          <div className={inputClassName}>
            <input
              type="range"
              min={0}
              max={100}
              onChange={(e) => {
                switch (axis) {
                  case "x":
                    boxRef.current?.rotateX(Number(e.target.value) / 1000);
                    break;
                  case "y":
                    boxRef.current?.rotateY(Number(e.target.value) / 1000);
                    break;
                  case "z":
                    boxRef.current?.rotateZ(Number(e.target.value) / 1000);
                    break;
                }
              }}
            />
            <select
              onChange={(e) => {
                setAxis(e.target.value);
              }}
            >
              <option value="x">x축</option>
              <option value="y">y축</option>
              <option value="z">z축</option>
            </select>
            {`${axis}축`}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
