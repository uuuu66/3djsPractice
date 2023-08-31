export default class LightConfig {
  ambientLight: { color: string; intensity: number } = {
    color: "red",
    intensity: 0,
  };
  directionalLight: { color: string; position: [number, number, number] } = {
    color: "red",
    position: [0, 0, 0],
  };
}
