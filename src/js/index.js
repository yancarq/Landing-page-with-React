//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { NavBar, Jumbotron, Card, Foot } from "./component/home.js";

const Body = () => {
	return (
		<div>
			<NavBar />
			<div className="container">
				<div className="row">
					<Jumbotron />
				</div>
				<div className="row">
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
			<Foot />
		</div>
	);
};

//render your react application
ReactDOM.render(<Body />, document.querySelector("#app"));
