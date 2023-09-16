import React, { useState } from "react";
import "./Department.css";

function Slider() {
  const initialItems = [
    {
      name: "Coding",
      description: "Coding Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      bgImg: "url(../../images/coding.jpg)",
    },
    {
      name: "Electronics",
      description: " Electronics Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      bgImg: "url(../../images/elex.jpg)",
    },
    {
      name: "Mechanical",
      description: "Mechanical Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      bgImg: "url(../../images/mechanical.jpeg)",
    },
    {
      name: "Science",
      description: "Science Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      bgImg: "url(../../images/science.jpeg)",
    },
    {
      name: "Marketing",
      description: "Marketing Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      bgImg: "url(../../images/marketing.jpeg)",
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
    <div>
      <div className="container">
        <div id="slide">
          {items.map((item, index) => (
            <div key={index} className="item" style={{ backgroundImage: `${item.bgImg}` }}>
              <div className="content">
                <div className="name">{item.name}</div>
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
