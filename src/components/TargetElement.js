import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const TargetElement = () => {
	const handleOnClick = useContext(CounterContext)

	return <div id="target-element">
		<button className="cta-btn" onClick={handleOnClick}>CLICK ME</button>
	</div>
}

export default TargetElement;