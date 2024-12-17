import Text from "./components/3djs/Text";
import RCanvas from "./components/3djs/Canvas";
import ScrollSpeedUpdater from "./components/ScrollSppedUpdater";
import IntroScene from "./components/IntroScene";
import useSmoothScroller from "./hooks/useSmoothScroller";

function App() {
  const { mainRef } = useSmoothScroller();
  return (
    <div
      ref={mainRef}
      className="w-screen  h-screen
          flex flex-col relative   justify-start smooth-scroller-container"
      style={{ maxWidth: "100vw" }}
    >
      <ScrollSpeedUpdater />

      <Text />

      <IntroScene />
      <RCanvas />
      <section className="w-full overflow-x-hidden  h-[700vh]"></section>

      <div className="fixed top-0 z-50 w-full h-10 top-dim " />
      <div className="fixed bottom-0 z-50 w-full h-10 bottom-dim" />
    </div>
  );
}

export default App;
