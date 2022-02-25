// CLASSES

class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }

  getFullName() {
    return `Nombre completo: ${this.nombre} ${this.apellido}`;
  }

  addMascota(mascotas) {
    this.mascotas.push(mascotas);
  }

  countMascotas() {
    return this.mascotas.length;
  }

  addBook(nombre, autor) {
    this.libros.push({ nombre: nombre, autor: autor });
  }

  getBookNames() {
    this.libros.map((libro) => libro.nombre);
  }
}

// Descripción aleatoria para invocar metodos

const DescribeUsuario = (persona) => {
  console.log(
    `Nombre Completo de la persona: ${persona.getFullName()}. Tiene ${persona.countMascotas()} mascotas
    llamadas ${persona.mascotas}`
  );
};

// Nuevo Usuario

const gonzalo = new Usuario("Gonzalo", "Vilanova", [], []);

gonzalo.addBook = ("Mindfulness para principiantes", "Jon Kabat-Zinn");

gonzalo.addBook =
  ("Mindfulness en la vida cotidiana: Donde quiera que vayas, ahí estás",
  "Jon Kabat-Zinn");

gonzalo.addMascota("Ambar");
gonzalo.addMascota("Bacon");

gonzalo.countMascotas();

gonzalo.getBookNames();

// Invoca DescribeUsuario para mostrar datos de New User Gonzalo
DescribeUsuario(gonzalo);
