import { create } from "zustand";

interface CameraStore {
  cameraZIndex: number;
  speed: number;
  setSpeed: (speed: number) => void;
  setCamereZIndex: (cameraZIndex: number) => void;
}
const useCameraStore = create<CameraStore>((set) => {
  return {
    cameraZIndex: 500,
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
