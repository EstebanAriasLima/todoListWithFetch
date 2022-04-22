import React, { useEffect, useState } from "react";
import { ListElement } from "./ListElement.jsx";

export const Lista = () => {
	const [lista, setLista] = useState([]);
	const [nuevaTarea, setNuevaTarea] = useState({});

	const getTodos = async () => {
		const response = await fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/esteban-arias"
		);
		const body = await response.json();
		if (!response.ok) {
			crearUsuarioDeLaLista();
			return;
		}
		setLista(body);
	};

	const crearUsuarioDeLaLista = async () => {
		const response = await fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/esteban-arias",
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify([]),
			}
		);
		const body = await response.json();
		if (!response.ok) {
			alert(
				`fallo el GET, y ahora acaba de fallar el POST: ${response.status}: ${body.msg}`
			);
		}
		getTodos();
	};

	const putLista = async (nuevaLista) => {
		const response = await fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/esteban-arias",
			{
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(nuevaLista),
			}
		);
		return response;
	};
	const deleteLista = async () => {
		const response = await fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/esteban-arias",
			{
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		crearUsuarioDeLaLista();
	};

	useEffect(() => {
		getTodos();
	}, []);

	return (
		<div id="lista">
			<div className="lista">
				<input
					id="input"
					className="TodoList"
					defaultValue={""}
					placeholder={
						lista == ""
							? "No Tasks, add a task"
							: "What needs to be done?"
					}
					value={nuevaTarea.label}
					onChange={(evento) => {
						setNuevaTarea({
							label: evento.target.value,
							done: false,
						});
					}}
					onKeyDown={async (evento) => {
						if (evento.key === "Enter") {
							const nuevaLista = [...lista, nuevaTarea];
							const putRespuesta = await putLista(nuevaLista);
							if (!putRespuesta.ok) {
								alert("Hubo un problema generando tu tarea :(");
								return;
							}
							setNuevaTarea({
								label: "",
								done: false,
							});
							getTodos();
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
								lista={lista}
								putLista={putLista}
								getTodos={getTodos}
								deleteLista={deleteLista}
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
			<button
				type="button"
				className="btn btn-danger"
				onClick={(e) => {
					deleteLista();
					setLista([]);
				}}>
				Borra tus tareas aqui 0.0
			</button>
			;
		</div>
	);
};
