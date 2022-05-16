import { Canvas } from "react-three-fiber";
import Model from "./Model";
import { OrbitControls } from "@react-three/drei";

const ModelContainer = () => {
  return (
    <div className="flex items-center justify-center h-64 pt-8">
      <Canvas orthographic camera={{ zoom: 22.5, position: [10, 5, 5] }}>
        <OrbitControls autoRotate={true} autoRotateSpeed={2.5} />
        <directionalLight intensity={0.8} />
        <ambientLight intensity={0.3} />
        <Model />
      </Canvas>
    </div>
  );
};

export default ModelContainer;
