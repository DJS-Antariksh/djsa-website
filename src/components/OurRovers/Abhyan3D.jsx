import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import * as THREE from "three";

function Model(props) {
  const { scene } = useGLTF("/rover6C.glb");
  return <primitive object={scene} {...props} />;
}

function Abhyan3D() {
  return (
    <>
    <div className="flex justify-center mt-16 mb-2 text-3xl text-white font-meth component_title">
        Abhyan
      </div>
    <div className="flex justify-center">
      <div className="hidden md:block">
        <Canvas
          dpr={[1, 2]}
          shadows
          camera={{ fov: 45 }}
          style={{ width: "800px", height: "600px" }}
        >
          <PresentationControls
            speed={1.5}
            global
            zoom={0.5}
            polar={[-0.1, Math.PI / 4]}
          >
            <Stage environment={"sunset"}>
              <Model scale={0.01} />
            </Stage>
          </PresentationControls>
        </Canvas>
      </div>
      <div>
        <div className="flex flex-col mt-16 mb-8">
          <p className="font-thin text-white font-poppins">Rover Name</p>
          <p className="font-light text-white font-poppins">Abhyaan</p>
        </div>

        <div className="flex flex-col mb-8">
          <p className="font-thin text-white font-poppins">Dimension</p>
          <p className="font-light text-white font-poppins">
            1056.83mm X 816.6mm
          </p>
        </div>

        <div className="flex flex-col mb-8">
          <p className="font-thin text-white font-poppins">
            Weight Specifications
          </p>
          <p className="font-light text-white font-poppins"> 59 kgs</p>
        </div>
        <div className="flex flex-col mb-8">
          <p className="font-thin text-white font-poppins">Visual system</p>
          <p className="font-light text-white font-poppins">
            {" "}
            zed2, Intel depth camera, Logitech camera
          </p>
        </div>
        <div className="flex flex-col mb-8">
          <p className="font-thin text-white font-poppins">Max Speed</p>
          <p className="font-light text-white font-poppins">1m/s</p>
        </div>

        <div className="flex flex-col mb-8">
          <p className="font-thin text-white font-poppins">USP</p>
          <p className="font-light text-white font-poppins">
            Double rocker suspension system Can climb inclination of 60 degree
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Abhyan3D;
