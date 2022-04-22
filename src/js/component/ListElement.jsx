import React from "react";
import PropTypes from "prop-types";

export const ListElement = (props) => {
	console.log(props);
	return (
		<div className="TodoList" id="listElement">
			{props.tarea.label}
			{/* {props.tarea} */}
			<span
				// onClick={(evento) => {
				// 	props.handleList((prev) => {
				// 		console.log("soy la lista anterior", prev);
				// 		let nuevaLista = prev.filter((task, i) => {
				// 			console.log(task, i, props.indice);
				// 			if (props.indice == i) {
				// 				return false;
				// 			} else {
				// 				return true;
				// 			}
				// 		});
				// 		console.log(nuevaLista, "soyNuevaLista");
				// 		return nuevaLista;
				// 	});
				// }}
				onClick={async (e) => {
					const listaBorrada = props.lista.filter((task, i) => {
						if (props.indice == i) {
							return false;
						} else {
							return true;
						}
					});
					if (listaBorrada.length == 0) {
						props.deleteLista();
					} else {
						const responsePut = await props.putLista(listaBorrada);
						if (!responsePut.ok) {
							alert("hay problemas para borrar tu tarea");
							return;
						}
						props.getTodos();
					}
				}}>
				✖
			</span>
		</div>
	);
};
ListElement.propTypes = {
	tarea: PropTypes.object,
	handleList: PropTypes.func,
	indice: PropTypes.number,
	lista: PropTypes.array,
	putLista: PropTypes.func,
	getTodos: PropTypes.func,
	deleteLista: PropTypes.func,
};
