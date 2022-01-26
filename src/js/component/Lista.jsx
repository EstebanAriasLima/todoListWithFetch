import React, { useState } from "react";
import { ListElement } from "./ListElement.jsx";

export const Lista = () => {
	const [lista, setLista] = useState([]);
	const [nuevaTarea, setNuevaTarea] = useState("");
	return (
		<div id="lista">
			<div className="lista">
				<input
					id="input"
					className="TodoList"
					placeholder={
						lista == ""
							? "No Tasks, add a task"
							: "What needs to be done?"
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
				<>
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
				</>
				<div className="TodoList" id="footerList">
					{"items left " + lista.length}
				</div>
			</div>
			<div className="TodoList shadowList" id="bottom-list1"></div>
			<div className="TodoList shadowList" id="bottom-list2"></div>
		</div>
	);
};
