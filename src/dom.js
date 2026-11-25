import { estado } from "./estado.js";

export const render = () => {
    document.querySelector("#lista").replaceChildren();
    for(const tarea of estado.tareas){
        const li = document.createElement("li")
        li.textContent = tarea.texto
        if(tarea.completada){
            li.classList.add("completada");
        }
        document.querySelector("#lista").append(li);
    }
}