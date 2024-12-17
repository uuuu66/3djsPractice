import { create } from "zustand";
import Scrollbar from "smooth-scrollbar";

interface scrollBarStore {
  scrollBar?: Scrollbar;
  mainSection?: HTMLDivElement;
  setScrollBar: (scrollBar: Scrollbar) => void;
  setMainSection: (mainSection: HTMLDivElement) => void;
}
const useScrollBarStore = create<scrollBarStore>((set) => {
  return {
    scrollBar: undefined,
    mainSection: undefined,
    setScrollBar: (scrollBar) => {
      set({ scrollBar });
    },
    setMainSection: (mainSection) => {
      set({ mainSection });
    },
  };
});
export default useScrollBarStore;
