import React, { useState } from "react";
import PropTypes from "prop-types";
import { ListElement } from "./ListElement.jsx";

export const Lista = () => {
	const [lista, setLista] = useState(["A", "B"]);
	const [nuevaTarea, setNuevaTarea] = useState("");
	return (
		<div id="lista">
			<div className="lista">
				<input
					id="input"
					className="TodoList"
					placeholder={
						lista == "" ? "No Task" : "What needs to be gone?"
					}
					value={nuevaTarea}
					onChange={(evento) => {
						setNuevaTarea(evento.target.value);
					}}
					onKeyDown={(evento) => {
						if (nuevaTarea == "" || nuevaTarea == " ") return;
						if (evento.key === "Enter") {
							const nuevaLista = [...lista, nuevaTarea];
							setLista(nuevaLista);
							setNuevaTarea("");
						}
					}}></input>
				<div className="" placeholder="No Task">
					{lista.map((tarea, index) => {
						return (
							<ListElement
								key={index}
								tarea={tarea}
								handleList={setLista}
								indice={index}
							/>
						);
					})}
				</div>
			</div>
			<div className="TodoList shadowList" id="bottom-list1"></div>
			<div className="TodoList shadowList" id="bottom-list2"></div>
		</div>
	);
};
