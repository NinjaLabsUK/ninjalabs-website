import AnimationExample from "./components/AnimationExample";
import Divider from "../../components/Divider/Divider";

const Playground: React.FC<{}> = () => {
  return (
    <>
      <h1>Playground</h1>
      <p>A place to try out stuff...</p>
      <Divider />

      <h2>Framer Motion</h2>
      <AnimationExample />
    </>
  );
};

export default Playground;
