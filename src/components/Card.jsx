import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";

export default function Card(props) {
	return (
		<div className="card">
			<img src={props.img} alt="" />
			<div>
				<p className="card--location">
					<FontAwesomeIcon icon={faMapPin} className="map--pin__icon" />
					{props.location}
				</p>
				<h1 className="card--title">{props.title}</h1>
				<h2 className="card--date">{props.date}</h2>
				<p className="card--description">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
					non necessitatibus nostrum nemo perspiciatis placeat? Adipisci
					sapiente quibusdam animi rerum ipsa, culpa fugiat voluptatibus nostrum
					beatae. Quisquam iste accusamus porro!
				</p>
			</div>
		</div>
	);
}
