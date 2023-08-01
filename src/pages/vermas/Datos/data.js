// Archivo: data.js

// Importa los datos de los programas y subprogramas
import { programaTransversal } from "./programaTransversal";
import { programaPerfil } from "./programaPerfil";
import { programaEducar } from "./programaEducar";
import { programaDojo } from "./programaDojo";
import { programaOficio } from "./programaOficio";

// Exporta los datos en un solo objeto
export const programas = [
  programaTransversal,
  programaPerfil,
  programaEducar,
  programaDojo,
  programaOficio,
];

// Exporta los datos de los subprogramas en un solo array
export const subprogramas = programas.reduce((acc, programa) => [...acc, ...programa.subprogramas], []);
