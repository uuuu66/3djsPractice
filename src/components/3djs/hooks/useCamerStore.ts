import { create } from "zustand";

interface CameraStore {
  fov: number;
  zoom: number;
  cameraZIndex: number;
  speed: number;
  setSpeed: (speed: number) => void;
  setCamereZIndex: (cameraZIndex: number) => void;
}
const useCameraStore = create<CameraStore>((set) => {
  return {
    fov: 40,
    zoom: -10,
    cameraZIndex: 200,
    speed: 1,
    setCamereZIndex: (cameraZIndex) => {
      set({ cameraZIndex });
    },
    setSpeed: (speed) => {
      set({ speed });
    },
  };
});
export default useCameraStore;
