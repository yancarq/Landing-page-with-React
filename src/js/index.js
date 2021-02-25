//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

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
			<div className="content col-10 mx-auto">
				<Jumbotron />
				<div className="col-12">
					<div className="row">
						<Card type="marginL" />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
					</div>
				</div>
			</div>
		</div>
	);
};

Body.propTypes = {
	type: PropTypes.string
};

//render your react application
ReactDOM.render(<Body />, document.querySelector("#app"));
