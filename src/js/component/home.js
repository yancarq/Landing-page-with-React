import React from "react";
import PropTypes from "prop-types";

//create the  navbar
export function NavBar() {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-around">
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div>
					<a className="navbar-brand" href="#">
						Start Bootstrap
					</a>
				</div>
				<div
					className="collapse navbar-collapse flex-grow-0"
					id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<a className="nav-link" href="#">
								Home <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								About
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Service
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}

//create the Jumbotron

export function Jumbotron() {
	return (
		<div className="jumbotron col-12">
			<h1 className="display-4">Hello, world!</h1>
			<p className="lead">
				This is a simple hero unit, a simple jumbotron-style component
				for calling extra attention to featured content or information.
			</p>
			<p>
				It uses utility class for typography and spacing to space
				content out within the larger container.
			</p>
			<p className="lead">
				<a className="btn btn-primary btn-lg" href="#" role="button">
					Learn more
				</a>
			</p>
		</div>
	);
}

export function Card() {
	return (
		<div className="col-lg-4 col-md-6 col-sm-12 p-1">
			<div className={`card mb-3W`}>
				<img
					className="card-img-top"
					src="http://placehold.it/500x325.jpg"
					alt="Card image cap"
				/>
				<div className="card-body text-center my-2">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						Some quick example text to build on the card title and
						makeup the bulk of the cards content.
					</p>
				</div>
				<div className="card-footer text-center text-muted">
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		</div>
	);
}

//create the Foot

export function Foot() {
	return (
		<footer className="bg-dark text-center text-lg-start">
			<div className="container p-4">
				<p className="text-white m-0 p-0">
					Copyright &copy; My web {new Date().getFullYear()} Yanca
				</p>
			</div>
		</footer>
	);
}
