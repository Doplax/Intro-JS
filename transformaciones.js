// transform.js

const datos = [
  {
    id: 1,
    nombre: "Juan",
    habilidades: ["JavaScript", "HTML", "CSS"],
    proyectos: [
      { id: 1, nombre: "Proyecto 1" },
      { id: 2, nombre: "Proyecto 2" },
    ],
  },
  {
    id: 2,
    nombre: "María",
    habilidades: ["Python", "SQL", "Django"],
    proyectos: [
      { id: 3, nombre: "Proyecto 3" },
      { id: 4, nombre: "Proyecto 4" },
    ],
  },
  {
    id: 3,
    nombre: "Pedro",
    habilidades: ["Java", "Spring", "Hibernate"],
    proyectos: [
      { id: 5, nombre: "Proyecto 5" },
      { id: 6, nombre: "Proyecto 6" },
    ],
  },
];

// Filtrar desarrolladores que tengan JavaScript como habilidad
const desarrolladoresJavascript = JSON.stringify(
  datos.filter((desarrollador) =>
    desarrollador.habilidades.includes("JavaScript")
  ),
  null,
  2
);

// Obtener los nombres de todos los proyectos
const nombresProyectos = datos.flatMap((desarrollador) =>
  desarrollador.proyectos.map((proyecto) => proyecto.nombre)
);

console.log("Desarrolladores que saben JavaScript:", desarrolladoresJavascript);
console.log("Nombres de todos los proyectos:", nombresProyectos);
