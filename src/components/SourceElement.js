import React, { useState } from "react";
import { CounterContext } from "../context/CounterContext";
import DummyComponentA from "./DummyComponentA";

/**
 * The local state <activated> is being toggled by an event, which is being dispatched by a child component. In this case,
 * the event that is being dispatched is an on-click event of a nested child element. A context provider can be used as a
 * wrapper to give its children access to a context value (in this case <handleOnClick>). A child component of ANY level
 * can access the value by calling the context.
 */
const SourceElement = () => {
  const [activated, setActivated] = useState(false)

  const handleOnClick = () => {
    setActivated(!activated)
  }

  return (
    <div id="source-element" className="content">
      <div className="left">
        <div style={{ color: activated ? "blue" : "red"}}>
          {activated ? "ACTIVATED" : "DEACTIVATED"}
        </div>
      </div>
      <div className="right">
        <CounterContext.Provider value={handleOnClick}>
          <DummyComponentA  />
        </CounterContext.Provider>
      </div>
    </div>
  )
}

export default SourceElement;
