import React from "react";
import { ListElement } from "./ListElement.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Lista } from "./Lista.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<p className="text-center" id="Title">
				todos
			</p>
			<Lista />
		</div>
	);
};

export default Home;
