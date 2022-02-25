class Contenedor {
  constructor(archivo) {
    this.archivo = archivo;
  }

  // Guardar productos
  async save(producto) {
    let productos = [];
    const fs = require("fs");
    try {
      const contenido = await fs.promises.readFile(this.archivo, "utf-8");
      productos = JSON.parse(contenido);
    } catch {
      producto.id = this.leerMaxId(productos) + 1;
      productos.push(producto);
      console.log("Producto Guardado: " + JSON.stringify(producto));
    }
    try {
      await this.guardarProductos(productos);
    } catch (err) {
      console.log(`Error al Guardar el Archivo: ${err}`);
    }
  }

  //Obtener por ID
  async getById(Number) {
    try {
      const productos = await this.getAll();
      if (productos != null) {
        const prod = productos.find((prod) => prod.id == Number);
        return prod;
      } else {
        console.log("No existen Productos.");
        return null;
      }
    } catch (err) {
      console.log("No existen Productos.");
      return null;
    }
  }

  //Get ALL
  async getAll() {
    const fs = require("fs");
    try {
      const contenido = await fs.promises.readFile(this.archivo, "utf-8");
      const productos = JSON.parse(contenido);
      return productos;
    } catch (err) {
      console.log("No existen Productos.");
      return null;
    }
  }

  //Borrar por ID
  async deleteById(Number) {
    let productos = [];
    const fs = require("fs");
    productos = fs.readFile(this.archivo, "utf-8", (error, contenido) => {
      if (error) {
        console.log("No existen Productos");
      } else {
        productos = JSON.parse(contenido);
        const prod = productos.find((prod) => prod.id == Number);
        try {
          if (prod.length == 0) {
            console.log(`No se Encontró el Producto con ID ${Number}`);
          } else {
            const i = productos.indexOf(prod);
            console.log(`Indice ${i}`);
            productos.splice(i, 1);
            this.guardarProductos(productos);
            console.log(`Producto con ID ${Number} ha sido Eliminado!`);
          }
        } catch {
          console.log(`No se Encontró el Producto con ID ${Number}`);
        }
      }
    });
  }

  //Max ID para guardar nuevo

  leerMaxId(productos) {
    let id = 1;
    productos.map((prod) => {
      if (prod.id > id) {
        id = prod.id;
      }
    });
    return id;
  }

  //Guardar el producto nuevo
  async guardarProductos(productos) {
    const fs = require("fs");
    try {
      await fs.promises.writeFile(this.archivo, JSON.stringify(productos));
      console.log("Productos Guardados.");
    } catch (err) {
      console.log(`Error al Guardar el Archivo: ${err}`);
    }
  }

  //Borrar TODO
  deleteAll() {
    const fs = require("fs");
    fs.unlink(this.archivo, (error) => {
      if (error) {
        console.log("No se Pudieron Eliminar los Productos.");
      } else {
        console.log("Productos Eliminados correctamente");
      }
    });
  }
}

async function Proceso() {
  const iphones = new Contenedor("productos.json");

  const iphone = {
    title: "Iphone 13 Pro Max 256 GB Sierra Blue",
    price: 1199,
    thumbnail:
      "https://www.apple.com/v/iphone-13-pro/d/images/overview/design/finishes_1_sierra_blue__2bovafkl4yaa_large.jpg",
  };
  await iphones.save(iphone);

  const iphone2 = {
    title: "Iphone 12 Pro Max 256 GB Sierra Blue",
    price: 1000,
    thumbnail:
      "https://www.apple.com/v/iphone-13-pro/d/images/overview/design/finishes_1_sierra_blue__2bovafkl4yaa_large.jpg",
  };
  await iphones.save(iphone2);

  const prod = await iphones.getById(2);
  console.log("Producto Encontrado: " + JSON.stringify(prod));

  const prods = await iphones.getAll();
  console.log("Conjunto de Productos: " + JSON.stringify(prods));
}

Proceso();
