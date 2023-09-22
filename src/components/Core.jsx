import React, { useState } from "react";
import {
  TETabs,
  TETabsContent,
  TETabsItem,
  TETabsPane,
} from "tw-elements-react";
import core1 from "../assets/20-21demo.png"
import core2 from "../assets/21-22demo.png"
import core3 from "../assets/22-23.png"

function Core() {
  const [fillActive, setFillActive] = useState("tab3");

  const handleFillClick = (value) => {
    if (value === fillActive) {
      return;
    }
    setFillActive(value);
  };

  return (
    <div className="mb-3">
      <TETabs fill>
        <TETabsItem
          onClick={() => handleFillClick("tab1")}
          active={fillActive === "tab1"}
        >
          Home
        </TETabsItem>
        <TETabsItem
          onClick={() => handleFillClick("tab2")}
          active={fillActive === "tab2"}
        >
          Profile
        </TETabsItem>
        <TETabsItem
          onClick={() => handleFillClick("tab3")}
          active={fillActive === "tab3"}
        >
          Messages
        </TETabsItem>
      </TETabs>

      <TETabsContent>
        <TETabsPane show={fillActive === "tab1"} className="text-white"><img src={core1} alt={"core1"}/></TETabsPane>
        <TETabsPane show={fillActive === "tab2"} className="text-white"><img src={core2} alt={"core2"}/></TETabsPane>
        <TETabsPane show={fillActive === "tab3"} className="text-white"><img src={core3} alt={"core3"}/></TETabsPane>
      </TETabsContent>
    </div>
  );
}
export default Core