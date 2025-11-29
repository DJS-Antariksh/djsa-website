import React, { useState } from "react";
import {
  TETabs,
  TETabsContent,
  TETabsItem,
  TETabsPane,
} from "tw-elements-react";

import Core_20_21 from './Core_20_21'
import Core_21_22 from "./Core_21_22";
import Core_22_23 from './Core_22_23'
import Core_23_24 from './Core_23_24'
import Core_24_25 from './Core_24_25'
import Core_25_26 from './Core_25_26'

import "./Core.css"; 


function Core() {
  const [fillActive, setFillActive] = useState("tab5");
  const handleFillClick = (value) => {
    if (value === fillActive) {
      return;
    }
    setFillActive(value);
  };
  

  return (
    <div id="core">
      <p className='justify-center text-center text-3xl text-white font-meth component_title sm:mb-[5rem]'>Team</p>
      <TETabs fill>
        <TETabsItem
        className="customTab"
          onClick={() => handleFillClick("tab1")}
          active={fillActive === "tab1"}
        >
          2020-2021 (Founding Team)
        </TETabsItem>
        <TETabsItem
        className="customTab"
          onClick={() => handleFillClick("tab2")}
          active={fillActive === "tab2"}
        >
          2021-2022
        </TETabsItem>
        <TETabsItem
        className="customTab"
          onClick={() => handleFillClick("tab3")}
          active={fillActive === "tab3"}
        >
          2022-2023
        </TETabsItem>
        <TETabsItem
        className="customTab"
          onClick={() => handleFillClick("tab4")}
          active={fillActive === "tab4"}
        >
          2023-2024
        </TETabsItem>
        <TETabsItem
        className="customTab"
          onClick={() => handleFillClick("tab5")}
          active={fillActive === "tab5"}
        >
          2024-2025
        </TETabsItem>
        <TETabsItem
        className="customTab"
          onClick={() => handleFillClick("tab6")}
          active={fillActive === "tab6"}
        >
          2025-2026
        </TETabsItem>
      </TETabs>

      <TETabsContent>
        <TETabsPane show={fillActive === "tab1"} className="text-white">
          {/* <img src={core1} alt={"core1"} className="core-image" /> */}
          <Core_20_21 />
        </TETabsPane>
        <TETabsPane show={fillActive === "tab2"} className="text-white">
          {/* <img src={core2} alt={"core2"} className="core-image" /> */}
          <Core_21_22 />
        </TETabsPane>
        <TETabsPane show={fillActive === "tab3"} className="text-white">
          {/* <img src={core3} alt={"core3"} className="core-image" /> */}
          <Core_22_23 />
        </TETabsPane>
        <TETabsPane show={fillActive === "tab4"} className="text-white">
          {/* <img src={core4} alt={"core4"} className="core-image" /> */}
          <Core_23_24 />
        </TETabsPane>
        <TETabsPane show={fillActive === "tab5"} className="text-white">
          {/* <img src={core1} alt={"core1"} className="core-image" /> */}
          <Core_24_25 />
        </TETabsPane>
        <TETabsPane show={fillActive === "tab6"} className="text-white">
          {/* <img src={core1} alt={"core1"} className="core-image" /> */}
          <Core_25_26 />
        </TETabsPane>
      </TETabsContent>
    </div>
  );
}
export default Core;