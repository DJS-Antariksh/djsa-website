import React, { useEffect, useRef, useState } from "react";
import * as echarts from "echarts";
import "echarts-gl";
import earth from "../assets/8k_mars.jpg";
import stars from "../assets/2k_stars.jpg";
import Navbar from "./Navbar";

function App() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (chartInstance.current) {
        chartInstance.current.dispose();
      }
    };
  }, []);

  useEffect(() => {
    if (!isMobile) {
      const chartDom = chartRef.current;
      if (chartDom) {
        const myChart = echarts.init(chartDom);

        const option = {
          globe: {
            baseTexture: earth,
            heightTexture: earth,
            environment: stars,
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

        myChart.setOption(option);
        chartInstance.current = myChart;
      }
    }
  }, [isMobile]);

  return (
    <div style={{ width: "100vw", height: "100vh" }} id="/">
      {!isMobile && (
        <div
          ref={chartRef}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
          className="mainModel"
        ></div>
      )}
      <Navbar />
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
