import "./style.css";
import { estado } from "./estado.js";
import { contarPendientes } from "./tareas.js";
import { contarCompletadas } from "./tareas.js";
import { render } from "./dom.js";
import { alumnos } from "./notas.js";
import { contarAprobados } from "./notas.js";
import { calcularMedia } from "./notas.js";

console.table(estado.tareas);


const titulo = document.querySelector("h1");
titulo.textContent += `Gestor de tareas`;
titulo.classList.add("titulo");

const resumen = document.querySelector("#resumen");
const pendientes = contarPendientes(estado.tareas);
const completadas = contarCompletadas(estado.tareas);
resumen.textContent = `${completadas} completadas * ${pendientes} pendientes`;

render();

const resumennotas = document.querySelector("#resumen-notas");
const aprobados = contarAprobados(alumnos);
const media = calcularMedia(alumnos);

resumennotas.textContent = `Media: ${media} * Aprobados: ${aprobados} de ${alumnos.length}`;
/*
const lista = document.querySelector("#lista");
//Se mostraran las lineas(27, 33, 37 y 39 ) 
//El li mostrara "Nueva"
const vivos = document.getElementsByClassName("prueba");
const foto = document.querySelectorAll(".prueba");
console.log("A:", vivos.length, foto.length);

const li = document.createElement("li");
li.className = "prueba";
li.textContent = "<b>Nueva</b>";
lista.append(li);
console.log("B:", vivos.length, foto.length);

const h1 = document.querySelector("h1");
h1.innerHTML = "<em>Gestor</em>";
console.log("C:", h1.textContent, h1.children.length);

console.log("D:", document.getElementById("#lista"));

//Se muestran las lineas correctas pero la ultima da null porque con getElementById no hay que usar #
//El li nuevo devuelve <b>Nueva</b> ya que textContent lo trata como texto plano y directo
*/

