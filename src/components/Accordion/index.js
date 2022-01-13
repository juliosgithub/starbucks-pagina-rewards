import React from "react";
import "./style.scss";

function Accordion({ children }) {
  return (
    <div {...{ className: "wrapper" }}>
      <ul {...{ className: "accordion-list" }}>{children}</ul>
    </div>
  );
}

export default Accordion;
