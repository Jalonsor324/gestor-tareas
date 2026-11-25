import "./style.css";
import { estado } from "./estado.js";
import { contarPendientes } from "./tareas.js";
import { contarCompletadas } from "./tareas.js";

console.table(estado.tareas);


const titulo = document.querySelector("h1");
titulo.textContent += `Gestor de tareas`;
titulo.classList.add("titulo");

const resumen = document.querySelector("#resumen");
const pendientes = contarPendientes(estado.tareas);
resumen.textContent = `Tienes ${pendientes} tareas pendientes`;


const lista = document.querySelector("#lista");

const li = document.createElement("li");
li.textContent = "Elemento 1";
li.classList.add("demo");

const li2 = document.createElement("li");
li2.textContent = "Elemento 2";
li2.classList.add("demo");

const li3 = document.createElement("li");
li3.textContent = "Elemento 3";
li3.classList.add("demo");

lista.append(li,li2,li3);

const elementos = lista.querySelectorAll("li");

elementos.forEach(elemento => {
    elemento.textContent = `- ${elemento.textContent}`;
});

//Lleva # ya que es un id
document.querySelector("#lista");

//const demo = document.getElementsByClassName("demo");

//demo.forEach();

/*Error devuelto:
Uncaught TypeError: demo.forEach is not a function
    at main.js:45:6
(anonymous) @ main.js:45*/

const demos = Array.from(document.getElementsByClassName("demo"));

demos.forEach(elemento => {
    elemento.textContent = elemento.textContent.replace(/^-\s*/, "✓ ");
});

//Html collection es viva ya que cambia si se alteran los elementos de la pagina

//NodeList devuelta por queryselectorAll es estatica ya que es como si guardara una instantanea de los elementos en ese instante

