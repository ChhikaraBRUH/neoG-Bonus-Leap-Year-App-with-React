import React, { useState } from "react";
import "./styles.css";

export default function App() {
	const [leapStatus, setLeapStatus] = useState("");

	function onChangeHandler(event) {
		var inputYear = event.target.value;
		if (inputYear % 4 === 0 && inputYear % 400 !== 0) {
			setLeapStatus("✔️" + inputYear + " IS a leap year!");
		} else if (inputYear == "") {
			setLeapStatus("");
		} else {
			setLeapStatus("❌" + inputYear + " IS NOT a leap year!");
		}
	}

	return (
		<div className="App">
			<h2>Enter the year below 👇</h2>
			<input onChange={onChangeHandler} />
			<div className="output">{leapStatus}</div>
		</div>
	);
}
