import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import * as THREE from "three";

function Model(props) {
  const { scene } = useGLTF("/prayan.glb");
  return <primitive object={scene} {...props} />;
}

function Abhyan3D() {
  
  const canvasStyle = {
    width: "800px",
    height: "600px",
  };

  if (window.innerWidth <= 1024) {
    canvasStyle.width = "600px";
    canvasStyle.height = "400px"; 
  }
  if (window.innerWidth <= 550) {
    canvasStyle.width = "500px";
    canvasStyle.height = "400px"; 
  }
  if (window.innerWidth <= 450) {
    canvasStyle.width = "300px";
    canvasStyle.height = "300px";
  }
  
  return (
    <>
      <div className="flex justify-center mt-8 text-3xl text-white font-meth component_title">
        Our Rover
      </div>
      <div className="flex justify-center">
        <div >
          <Canvas
            dpr={[1, 2]}
            shadows
            camera={{ fov: 45 }}
            // style={{ width: "800px", height: "600px" }}
            style={canvasStyle}
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
        <div className="hidden md:block">
          <div className="flex flex-col mt-16 mb-8">
            <p className="font-thin text-white font-poppins">Rover Name</p>
            <p className="font-light text-white font-poppins">Prayan</p>
          </div>
          <div className="flex flex-col mb-8">
            <p className="font-thin text-white font-poppins">Dimension</p>
            <p className="font-light text-white font-poppins">
              1040.911mm X 1143.984
            </p>
          </div>

          <div className="flex flex-col mb-8">
            <p className="font-thin text-white font-poppins">
              Weight Specifications
            </p>
            <p className="font-light text-white font-poppins">70.4kg</p>
          </div>
          <div className="flex flex-col mb-8">
            <p className="font-thin text-white font-poppins">Visual system</p>
            <p className="font-light text-white font-poppins">
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
              Rocker bogie suspension can climb incline of 60 degree
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Abhyan3D;
