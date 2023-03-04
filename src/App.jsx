import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./database";

function App() {
	const cards = data.map((item) => {
		return <Card key={item.id} {...item} />;
	});
	return (
		<>
			<Navbar />
			{cards}
		</>
	);
}

export default App;
