export const alumnos = [
  { nombre: "Ana", nota: 7.5 },
  { nombre: "Luis", nota: 4.2 },
  { nombre: "Marta", nota: 9 },
  { nombre: "Pablo", nota: 5 },
  { nombre: "Sara", nota: 3.8 },
];

export const calcularMedia = (alumnos) => {
    let suma = 0;
    for(const alumno of alumnos) {
        suma += alumno.nota;
    }
    return suma / alumnos.length;
}

export const contarAprobados = (alumnos) => {
    let aprobados = 0;
    for(const alumno of alumnos) {
        if(alumno.nota >= 5){
            aprobados++;
        }
    }
    return aprobados;
}