import React, { useState } from "react";
import "./Department.css";
import coding from "../../assets/coding.jpg";
import elex from "../../assets/elex.jpg";
import mechanical from "../../assets/mechanical.jpeg";
import science from "../../assets/science.jpeg";
import marketing from "../../assets/marketing.jpeg";

function Slider() {
  const initialItems = [
    {
      name: "Coding",
      description:"The Coding Department plays a pivotal role in providing the rover with autonomy. This team is responsible for writing the software that controls the rover's movements, interprets sensor data, makes autonomous decisions, and facilitates communication with the ground station.",
      bgImg: coding,
    },
    {
      name: "Electronics",
      description:
        "The Electronics Department spearheads the development and integration of the rover's electronic systems and the circuit design. This team designs and assembles critical components such as sensors, cameras, communication systems, and control units, ensuring that they work seamlessly together to enable the rover's functions.",
      bgImg: elex,
    },
    {
      name: "Mechanical",
      description:
        "Responsible for the rover's physical structure, the Mechanical Department focuses on designing and analyzing the rover's mechanical structure. This includes crafting the rover's chassis, wheels, suspension, and more. Collaborating closely with the Electronics Department, they ensure the physical and electronic components integrate seamlessly.",
      bgImg: mechanical,
    },
    {
      name: "Science",
      description:
        "The Science Department delves into the mysteries of Mars' geological history, aiming to develop hypotheses that can be tested during the competition. Through in-depth research on Mars' geology, climate, and potential for past or present life, they create scientific experiments and hypotheses for the rover to execute. This department then analyzes the data collected by the rover to draw scientific conclusions, contributing valuable insights to the mission's objectives.",
      bgImg: science,
    },
    {
      name: "Marketing",
      description:
        "Managing the team's finances, logistics, publicity, sponsorships, and media presence, the Marketing Department is essential for securing the resources and visibility needed for the rover project's success. Their tasks include securing sponsorships, creating marketing materials, maintaining a strong social media presence, and effectively managing the project's budget, ensuring the team's financial sustainability.",
      bgImg: marketing,
    },
  ];
  const [items, setItems] = useState(initialItems);

  const handleNextClick = () => {
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      const firstItem = updatedItems.shift();
      updatedItems.push(firstItem);
      return updatedItems;
    });
  };

  const handlePrevClick = () => {
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      const lastItem = updatedItems.pop();
      updatedItems.unshift(lastItem);
      return updatedItems;
    });
  };

  return (
    <div id="department">
      <div className="flex justify-center mt-20 text-3xl text-white font-meth component_title">
        Departments
      </div>

      <div style={{ width: "100vw", height: "100vh" }} className="my-9">
        <div className="container">
          <div id="slide">
            {items.map((item, index) => (
              <div
                key={index}
                className="item "
                style={{ backgroundImage: `url(${item.bgImg})` }}
              >
                <div className="content">
                  <div className="name font-meth">{item.name}</div>
                  <div className="des">{item.description}</div>
                  <button>See more</button>
                </div>
              </div>
            ))}
          </div>
          <div className="buttons">
            <button onClick={handleNextClick}>
              <i className="fa-solid fa-angle-left"></i>
            </button>
            <button onClick={handlePrevClick}>
              <i className="fa-solid fa-angle-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
