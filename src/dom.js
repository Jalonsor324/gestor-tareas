import { estado } from "./estado.js";
import { contarPendientes } from "./tareas.js";
import { alumnos } from "./notas.js";

export function render() {
    //Error en getElementById("#lista") ya que no se usan los # en los metodos clasicos
  const lista = document.getElementById("lista");
  const resumen = document.querySelector("#resumen");
    //Esta linea de vaciado de lista antes estaba dentro del for causando que se borrara cada vez que empezara el bucle
  lista.replaceChildren();
  for (const tarea of estado.tareas) {
    const li = document.createElement("li");
    li.textContent = tarea.texto;
    //tarea.completada = true no es una condicion 
    if (tarea.completada) {
      li.classList.add("completada");   
    }
    lista.append(li);
  }

  const listanotas = document.querySelector("#lista-notas");
  const resumennotas = document.querySelector("#resumen-notas");
  const ordenados = alumnos.toSorted((a, b) => b.nota - a.nota);

  listanotas.replaceChildren();

  for(const alumno of ordenados){
    const li = document.createElement("li");
    li.textContent = `${alumno.nombre} -- ${alumno.nota}`

    if(alumno.nota >= 5){
        li.classList.add("aprobado");
    } else{
        li.classList.add("suspenso");
    }
    listanotas.append(li);
  }

  // Al llamar a la funcion contarPendientes en esta linea no se indico el parametro de esta funcion
  resumen.textContent = `Tienes ${contarPendientes(estado.tareas)} tareas pendientes`;
}