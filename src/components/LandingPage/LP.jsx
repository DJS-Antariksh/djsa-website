import { useEffect, useRef, useState } from "react";
import * as echarts from "echarts";
import "echarts-gl";
import earth from "../../assets/8k_mars.jpg";
import stars from "../../assets/2k_stars.jpg";
import AntarikshLogo from "../../assets/AntarikshLogo.png";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [titleFontSize, setTitleFontSize] = useState(60); // Initial fontSize

  const toggleMenu = () => {
    console.log("yeah ");
    setMenuOpen(!menuOpen);
  };
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
        // left:440,
        // bottom:150,
        // saturation: 1,
      },
      // title: {
      //   text: "TO\nDECIPHER\nUNIMAGINABLE",
      //   left: "center",
      //   top: "center",
      //   textStyle: {
      //     fontSize: titleFontSize,
      //     fontWeight: "normal",
      //     verticalAlign: "middle",
      //     shadowColor:"",
      //     fontFamily: 'meth',
      //     color:"#fff",
      //   },
      // },
      series: [],
    };

    option && myChart.setOption(option);

    const resizeChart = () => {
      if (chartInstance.current) {
        chartInstance.current.resize();
        if (window.innerWidth > 768) {
          setTitleFontSize(60);
        } else if (window.innerWidth <= 768) {
          setTitleFontSize(30);
        } else if (window.innerWidth <= 425) {
          setTitleFontSize(20);
        } else {
          setTitleFontSize(10);
        }
      }
    };

    // Attach the resize event listener
    window.addEventListener("resize", resizeChart);

    // Cleanup: Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", resizeChart);
      myChart.dispose();
    };
  }, [titleFontSize]);

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
        className="flex justify-around items-center mx-auto"
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
            className="w-36 cursor-pointer xxl:w-72 sm:w-24"
            src={AntarikshLogo}
            alt="AntarikshLogo"
          />
        </div>
        <div
        >
          <ul className="flex md:flex-row md:items-center md:gap-[4vw] gap-8 sm:gap-[2vw]">
            <li>
              <a
                className="hover:text-gray-500 text-white text-lg md:text-xl xxl:text-5xl sm:text-sm"
                href="#"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="hover:text-gray-500 text-white text-lg md:text-xl xxl:text-5xl sm:text-sm"
                href="#"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="hover:text-gray-500 text-white text-lg md:text-xl xxl:text-5xl sm:text-sm"
                href="#"
              >
                Achievements
              </a>
            </li>
            <li>
              <a
                className="hover:text-gray-500 text-white text-lg md:text-xl xxl:text-5xl sm:text-sm"
                href="#"
              >
                Department
              </a>
            </li>
            <li>
              <a
                className="hover:text-gray-500 text-white text-lg md:text-xl xxl:text-5xl sm:text-sm"
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
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 leading-6"
        style={{ zIndex: 1 }}
      >
        <p className="font-meth text-white text-6xl text-center tracking-1 sm:text-5xl xxl:text-9xl xxl:leading-12">TO</p>
        <br />
        <p className="font-meth text-white text-6xl text-center tracking-1 sm:text-5xl xxl:text-9xl xxl:leading-12">DECIPHER</p>
        <br />
        <p className="font-meth text-white text-6xl text-center tracking-1 sm:text-5xl xxl:text-9xl xxl:leading-12">UNIMAGINABLE</p>
      </div>
    </div>
  );
}

export default App;
