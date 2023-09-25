import React, { useState } from "react";
import "./Department.css";
import coding from "../../assets/coding.jpg"
import elex from "../../assets/elex.jpg"
import mechanical from "../../assets/mechanical.jpeg"
import science from "../../assets/science.jpeg"
import marketing from "../../assets/marketing.jpeg"

function Slider() {
  const initialItems = [
    {
      name: "Coding",
      description: "Coding Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      bgImg: coding,
    },
    {
      name: "Electronics",
      description: " Electronics Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      bgImg: elex,
    },
    {
      name: "Mechanical",
      description: "Mechanical Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      bgImg: mechanical,
    },
    {
      name: "Science",
      description: "Science Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      bgImg: science,
    },
    {
      name: "Marketing",
      description: "Marketing Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
    <div style={{ width: "100vw", height: "100vh" }} className="my-9">
    <div className="container" 
    >
        <div id="slide">
          {items.map((item, index) => (
            <div key={index} className="item " style={{ backgroundImage: `url(${item.bgImg})` }}>
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
  );
}

export default Slider;
