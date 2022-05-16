import React, { FC } from "React";
import { Canvas } from "react-three-fiber";
import Model from "./Model";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

const ModelContainer: FC = () => {
  return (
    <div className="flex items-center justify-center h-64 mt-8 ">
      <Canvas orthographic camera={{ zoom: 25, position: [200, 80, 50] }}>
        <OrbitControls autoRotate={true} autoRotateSpeed={2.5} />
        <directionalLight intensity={0.8} />
        <ambientLight intensity={0.3} />
        <Model />
      </Canvas>
    </div>
  );
};

export default ModelContainer;
