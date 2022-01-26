import React from "react";
import PropTypes from "prop-types";

export const ListElement = (props) => {
	console.log(props);
	return (
		<div className="TodoList" id="listElement">
			{props.tarea}
			<span
				onClick={(evento) => {
					props.handleList((prev) => {
						console.log("soy la lista anterior", prev);
						let nuevaLista = prev.filter((task, i) => {
							console.log(task, i, props.indice);
							if (props.indice == i) {
								return false;
							} else {
								return true;
							}
						});
						console.log(nuevaLista, "soyNuevaLista");
						return nuevaLista;
					});
				}}>
				✖
			</span>
		</div>
	);
};
ListElement.propTypes = {
	tarea: PropTypes.string,
	handleList: PropTypes.func,
	indice: PropTypes.number,
};
