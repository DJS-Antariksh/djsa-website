import { useEffect, useRef, useState } from "react";
import * as echarts from "echarts";
import "echarts-gl";
import earth from "../assets/8k_mars.jpg";
import stars from "../assets/2k_stars.jpg";
import Navbar from "./Navbar";

function App() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [canvasSize, setCanvasSize] = useState({ width: "100vw", height: "100vh" });

  useEffect(() => {
    const chartDom = chartRef.current;
    const myChart = echarts.init(chartDom);
    chartInstance.current = myChart;

    const option = {
      globe: {
        baseTexture: earth,
        heightTexture: earth,
        environment: stars,
        // shading: "lambert",
        shading: "realistic",
        atmosphere: {
          show: true,
        },
        light: {
          ambient: {
            intensity: 0.1,
          },
          displacementQuality: "ultra",
          main: {
            intensity: 1,
          },
        },
      },
      series: [],
    };

    option && myChart.setOption(option);

    function handleResize() {
      setCanvasSize({
        width: `${window.innerWidth}px`,
        height: `${window.innerHeight}px`,
      });
    }

    // Attach the resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup: Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
      myChart.dispose();
    };
  }, [canvasSize]);

  return (
    <div style={{ width: "100vw", height: "100vh" }} id="/">
      <div
        ref={chartRef}
        style={{
          width: canvasSize.width,
          height: canvasSize.height,
          position: "absolute",
          top: 0,
          left: 0,
        }}
      ></div>
      <Navbar/>
      <div
        className="absolute leading-6 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        style={{ zIndex: 1 }}
      >
        <p className="text-6xl text-center text-white font-meth tracking-1 heroText">
          TO
        </p>
        <br />
        <p className="text-6xl text-center text-white font-meth tracking-1 heroText">
          DECIPHER
        </p>
        <br />
        <p className="text-6xl text-center text-white font-meth tracking-1 heroText">
          UNIMAGINABLE
        </p>
      </div>
    </div>
  );
}

export default App;
