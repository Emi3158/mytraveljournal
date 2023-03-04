import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthEurope } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
	return (
		<div>
			<nav className="navigation">
				<FontAwesomeIcon icon={faEarthEurope} size="xl" />
				<h1>my travel journal.</h1>
			</nav>
		</div>
	);
}
