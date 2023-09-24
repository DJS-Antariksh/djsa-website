import { useEffect, useRef, useState } from "react";
import * as echarts from "echarts";
import "echarts-gl";
import earth from "../assets/8k_mars.jpg";
import stars from "../assets/2k_stars.jpg";
import AntarikshLogo from "../assets/AntarikshLogo.png";

function App() {
  
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

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

    // Cleanup: Remove the event listener when the component unmounts
    return () => {
      myChart.dispose();
    };
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <div
        ref={chartRef}
        style={{
          width: "100vw",
          height: "100vh",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      ></div>
      <nav
        className="flex items-center justify-around mx-auto"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1,
        }}
      >
        <div>
          <img
            className="w-48 cursor-pointer"
            src={AntarikshLogo}
            alt="AntarikshLogo"
          />
        </div>
        <div
        >
          <ul className="flex md:flex-row md:items-center md:gap-[4vw] gap-8 sm:gap-[2vw] ml-96">
            <li>
              <a
                className="text-lg text-white hover:text-gray-500 hover:underline hover:decoration-white/30 md:text-xl xxl:text-5xl sm:text-sm"
                href="#"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="text-lg text-white hover:text-gray-500 hover:underline hover:decoration-white/30 md:text-xl xxl:text-5xl sm:text-sm"
                href="#"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="text-lg text-white hover:text-gray-500 hover:underline hover:decoration-white/30 md:text-xl xxl:text-5xl sm:text-sm"
                href="#"
              >
                Achievements
              </a>
            </li>
            <li>
              <a
                className="text-lg text-white hover:text-gray-500 hover:underline hover:decoration-white/30 md:text-xl xxl:text-5xl sm:text-sm"
                href="#"
              >
                Department
              </a>
            </li>
            <li>
              <a
                className="text-lg text-white hover:text-gray-500 hover:underline hover:decoration-white/30 md:text-xl xxl:text-5xl sm:text-sm"
                href="#"
              >
                ContactUs
              </a>
            </li>
          </ul>
        </div>
        {/* <div className="flex gap-6">
          <button
            onClick={toggleMenu}
            name={menuOpen ? "close" : "menu"}
            className={`text-3xl text-white cursor-pointer md:hidden ${
              menuOpen ? "hidden" : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div> */}
      </nav>
      <div
        className="absolute leading-6 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        style={{ zIndex: 1 }}
      >
        <p className="text-6xl text-center text-white font-meth tracking-1">TO</p>
        <br />
        <p className="text-6xl text-center text-white font-meth tracking-1">DECIPHER</p>
        <br />
        <p className="text-6xl text-center text-white font-meth tracking-1">UNIMAGINABLE</p>
      </div>
    </div>
  );
}

export default App;
