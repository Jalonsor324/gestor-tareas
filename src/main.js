import "./style.css";
import { estado } from "./estado.js";
import { contarPendientes } from "./tareas.js";
import { contarCompletadas } from "./tareas.js";
import { render } from "./dom.js";

console.table(estado.tareas);


const titulo = document.querySelector("h1");
titulo.textContent += `Gestor de tareas`;
titulo.classList.add("titulo");

const resumen = document.querySelector("#resumen");
const pendientes = contarPendientes(estado.tareas);
const completadas = contarCompletadas(estado.tareas);
resumen.textContent = `${completadas} completadas * ${pendientes} pendientes`;

render();

