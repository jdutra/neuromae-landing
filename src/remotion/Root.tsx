import { Composition } from "remotion";
import { NeuromaeVideo } from "./NeuromaeVideo";

export function RemotionRoot() {
  return (
    <Composition
      id="NeuromaeVideo"
      component={NeuromaeVideo}
      durationInFrames={510}
      fps={30}
      width={1280}
      height={720}
    />
  );
}
