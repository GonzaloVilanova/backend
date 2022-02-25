const fs = require("fs");

/* // CLASSES

class Contenedor {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }
} */

const obj = {
  nombre: "Gonzalo",
  number: 8,
};

/* --------------------------- escribir Archivos -------------------------- */
fs.writeFileSync("archivo.txt", "Informacion dentro del archivo/n");
fs.writeFileSync("archivo.txt", JSON.stringify(obj));

/* --------------------------- leer Archivos -------------------------- */
const DataLectura = fs.readFileSync("archivo.txt", "utf-8");
console.log("Informacion en TXT: ", DataLectura);
console.log("Informacion en TXT: ", JSON.parse(DataLectura));

/* --------------------------- editar Archivos -------------------------- */
fs.appendFileSync("archivo.txt", "Se agregaron estos datos/n");

/* --------------------------- Borrar Archivos -------------------------- */
fs.unlinkSync("archivo.txt");

/* --------------------------- Manejo de errores. Ej -------------------------- */

fs.unlinkSync("archivo.txt");

try {
  fs.unlinkSync("archivo.txt");
} catch (error) {
  console.log("Error al ELIMINAR");
}

/* --------------------------- Manejo de errores. Ej -------------------------- */
const fs = require("fs");

try {
  fs.writeFileSync("fyh.txt", new Date().toLocaleString());
  const DataLectura = fs.readFileSync("fyh.txt", "utf-8");
  console.log("Informacion en TXT: ", DataLectura);
} catch (e) {
  console.log("Error al ELIMINAR", e);
}

/* --------------------------- Manejo de ARCHIVOS con Callbacks -------------------------- */
const fs = require("fs");
fs.writeFile(
  "ArchivoAsync.txt",
  "Informacion dentro del archivos ASYNC",
  (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Archivo creado exitosamente");
    }
  }
);

const fs = require("fs");
fs.readFile("ArchivoAsync.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});
