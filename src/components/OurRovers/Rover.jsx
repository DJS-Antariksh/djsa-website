import { Carousel } from "@material-tailwind/react";
import Abhyan3D from "./Abhyan3D";
import Prayan3D from "./Prayan3D";
import * as THREE from 'three';

function Rover() {
  return (
    <Carousel
      className="rounded-xl"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute z-50 flex gap-2 bottom-4 left-2/4 -translate-x-2/4">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {/* <img
        src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
        alt="image 1"
        className="object-cover w-full h-full"
      /> */}
      <Abhyan3D />
      <Prayan3D/>
    </Carousel>
  );
}

export default Rover;
