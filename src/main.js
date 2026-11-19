import "./style.css";
import { estado } from "./estado.js";
import { contarPendientes } from "./tareas.js";
import { contarCompletadas } from "./tareas.js";

console.table(estado.tareas);

const pendientes = contarPendientes(estado.tareas);
document.querySelector("#app").textContent = `Tienes ${pendientes} tareas pendientes`;
const completadas = contarCompletadas(estado.tareas);
document.querySelector("#app").textContent += ` y ${completadas} tareas completadas`;