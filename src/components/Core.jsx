import React, { useState } from "react";
import {
  TETabs,
  TETabsContent,
  TETabsItem,
  TETabsPane,
} from "tw-elements-react";
import core1 from "../assets/20-21.png";
import core2 from "../assets/21-22.png";
import core3 from "../assets/22-23.png";
import core4 from "../assets/23-24.png";

function Core() {
  const [fillActive, setFillActive] = useState("tab4");

  const handleFillClick = (value) => {
    if (value === fillActive) {
      return;
    }
    setFillActive(value);
  };

  return (
    <div id="core">
      <TETabs fill>
        <TETabsItem
        className="customTab"
          onClick={() => handleFillClick("tab1")}
          active={fillActive === "tab1"}
        >
          Core 2020-2021
        </TETabsItem>
        <TETabsItem
        className="customTab"
          onClick={() => handleFillClick("tab2")}
          active={fillActive === "tab2"}
        >
          Core 2021-2022
        </TETabsItem>
        <TETabsItem
        className="customTab"
          onClick={() => handleFillClick("tab3")}
          active={fillActive === "tab3"}
        >
          Core 2022-2023
        </TETabsItem>
        <TETabsItem
        className="customTab"
          onClick={() => handleFillClick("tab4")}
          active={fillActive === "tab4"}
        >
          Core 2023-2024
        </TETabsItem>
      </TETabs>

      <TETabsContent>
        <TETabsPane show={fillActive === "tab1"} className="text-white">
          <img src={core1} alt={"core1"} />
        </TETabsPane>
        <TETabsPane show={fillActive === "tab2"} className="text-white">
          <img src={core2} alt={"core2"} />
        </TETabsPane>
        <TETabsPane show={fillActive === "tab3"} className="text-white">
          <img src={core3} alt={"core3"} />
        </TETabsPane>
        <TETabsPane show={fillActive === "tab4"} className="text-white">
          <img src={core4} alt={"core4"} />
        </TETabsPane>
      </TETabsContent>
    </div>
  );
}
export default Core;
