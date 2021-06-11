import ReactDOM from "react-dom";
import EventComp from "./events/EventComp";

function App() {
	return (
		<div>
			<EventComp />
		</div>
	);
}

ReactDOM.render(<App />, document.querySelector("#root"));
