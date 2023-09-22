// // import React, { useState } from "react";
// // import AntarikshLogo from "./AntarikshLogo.png";

// // function LandingPage() {
// //   const [menuOpen, setMenuOpen] = useState(false);

// //   const toggleMenu = () => {
// //     setMenuOpen(!menuOpen);
// //   };

// //   return (
// //     <>
// //       <nav className="flex justify-around items-center mx-auto">
// //         <div>
// //           <img
// //             className="w-36 cursor-pointer"
// //             src={AntarikshLogo}
// //             alt="AntarikshLogo"
// //           />
// //         </div>
// //         <div
// //           className={`nav-links duration-500 ${
// //             menuOpen ? "" : "md:static absolute"
// //           } md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5`}
// //         >
// //           <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
// //             <li><a className="hover:text-gray-500 text-white" href="#">Home</a></li>
// //             <li><a className="hover:text-gray-500 text-white" href="#">About</a></li>
// //             <li><a className="hover:text-gray-500 text-white" href="#">Achievements</a></li>
// //             <li><a className="hover:text-gray-500 text-white" href="#">Department</a></li>
// //             <li><a className="hover:text-gray-500 text-white" href="#">ContactUs</a></li>
// //           </ul>
// //         </div>
// //         <div className="flex gap-6">
// //           <button
// //             onClick={toggleMenu}
// //             name={menuOpen ? "close" : "menu"}
// //             className="text-3xl text-white cursor-pointer md:hidden"
// //           >
// //             <svg
// //               xmlns="http://www.w3.org/2000/svg"
// //               fill="none"
// //               viewBox="0 0 24 24"
// //               strokeWidth="1.5"
// //               stroke="currentColor"
// //               className="w-6 h-6"
// //             >
// //               <path
// //                 strokeLinecap="round"
// //                 strokeLinejoin="round"
// //                 d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
// //               />
// //             </svg>
// //           </button>
// //         </div>
// //       </nav>
// //     </>
// //   );
// // }

// // export default LandingPage;

// import { useEffect, useRef, useState } from "react";
// import * as echarts from "echarts";
// import "echarts-gl";
// import earth from "../../assets/8k_mars.jpg";
// import stars from "../../assets/2k_stars.jpg";
// import AntarikshLogo from "../../assets/AntarikshLogo.png";

// function App() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };
//   const chartRef = useRef(null);

//   useEffect(() => {
//     const chartDom = chartRef.current;
//     const myChart = echarts.init(chartDom);

//     const option = {
//       backgroundColor: "#000",
//       globe: {
//         baseTexture: earth,
//         heightTexture: earth,
//         environment: stars,
//         shading: "lambert",
//         atmosphere: {
//           show: true,
//         },
//         light: {
//           ambient: {
//             intensity: 0.1,
//           },
//           displacementQuality: "ultra",
//           main: {
//             intensity: 1,
//           },
//         },
//       },
//       series: [],
//     };

//     option && myChart.setOption(option);

//     return () => {
//       myChart.dispose();
//     };
//   }, []);

//   return (
//     <>
//       <div ref={chartRef} style={{ width: "100vw", height: "100vh" }}></div>
//       <nav className="flex justify-around items-center mx-auto">
//         <div>
//           <img
//             className="w-36 cursor-pointer"
//             src={AntarikshLogo}
//             alt="AntarikshLogo"
//           />
//         </div>
//         <div
//           className={`nav-links duration-500 ${
//             menuOpen ? "" : "md:static absolute"
//           } md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5`}
//         >
//           <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
//             <li>
//               <a className="hover:text-gray-500 text-white" href="#">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a className="hover:text-gray-500 text-white" href="#">
//                 About
//               </a>
//             </li>
//             <li>
//               <a className="hover:text-gray-500 text-white" href="#">
//                 Achievements
//               </a>
//             </li>
//             <li>
//               <a className="hover:text-gray-500 text-white" href="#">
//                 Department
//               </a>
//             </li>
//             <li>
//               <a className="hover:text-gray-500 text-white" href="#">
//                 ContactUs
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div className="flex gap-6">
//           <button
//             onClick={toggleMenu}
//             name={menuOpen ? "close" : "menu"}
//             className="text-3xl text-white cursor-pointer md:hidden"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth="1.5"
//               stroke="currentColor"
//               className="w-6 h-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
//               />
//             </svg>
//           </button>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default App;







return (
  <div style={{ width: "100vw", height: "100vh" }}>
    {/* Hamburger button */}
    <button
      onClick={toggleMenu}
      name={menuOpen ? "close" : "menu"}
      className={`text-3xl text-white cursor-pointer md:hidden ${menuOpen ? "hidden" : ""}`}
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

    {/* Navigation menu */}
    {menuOpen || window.innerWidth >= 768 ? (
      <nav className="flex justify-around items-center mx-auto" style={{ position: "absolute", top: 0, left: 0, width: "100%", zIndex: 1 }}>
        {/* Your navigation links */}
        <div
          className={`nav-links duration-500 ml-72 ${
            menuOpen ? "" : "md:static absolute"
          } md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5`}
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 ">
            <li>
              <a className="hover:text-gray-500 text-white text-lg md:text-xl" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500 text-white text-lg md:text-xl" href="#">
                About
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500 text-white text-lg md:text-xl" href="#">
                Achievements
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500 text-white text-lg md:text-xl" href="#">
                Department
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500 text-white text-lg md:text-xl" href="#">
                ContactUs
              </a>
            </li>
          </ul>
        </div>
      </nav>
    ) : null}
  </div>
);
