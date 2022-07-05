let mensaje = "Ingresar Nombre";
let mensaje1 = "Ingresar alguna Opcion:\n 1- Comprar Productos \n 2- Salir";
const carrito = [];
const productos = [
  {
    id: 1,
    descripcion: "falda negra",
    Prenda: "Falda",
    precio: 350.0,
    cantidad: 10,
  },
  {
    id: 2,
    descripcion: "Azul Jean",
    Prenda: "Pantalon",
    precio: 650.0,
    cantidad: 10,
  },
  {
    id: 3,
    descripcion: "Blusa verde cuello v",
    Prenda: "Blusa",
    precio: 500.0,
    cantidad: 10,
  },
  {
    id: 4,
    descripcion: "Medias color azul clarito",
    Prenda: "Medias",
    precio: 200.0,
    cantidad: 10,
  },
  {
    id: 5,
    descripcion: "chaqueta negra",
    Prenda: "Chaqueta",
    precio: 1000.0,
    cantidad: 10,
  },
  {
    id: 6,
    descripcion: "Camiseta color variado",
    Prenda: "Camiseta",
    precio: 350.0,
    cantidad: 10,
  },
];
var respuesta;
let nuevoObjeto = [];

class productoCarrito {
  constructor(objeto) {
    this.id = objeto.id;
    this.descripcion = objeto.descripcion;
    this.Prenda = objeto.Prenda;
    this.precio = objeto.precio;
    this.cantidad = objeto.cantidad;
  }
}
// se validan los prompt
function validarAlerta(mensaje) {
  var entrada = prompt(mensaje);
  while (entrada == "" || entrada == null) {
    alert("No se cargaron datos");
    entrada = prompt(mensaje);
  }
  return (respuesta = entrada);
}
// menu Principal
function menuPrincipal() {
  validarAlerta(mensaje1);
  parseInt(respuesta);

  switch (respuesta) {
    case "1":
      menuDeProductos();
      break;

    case "2":
      salir(false);
      break;

    default:
      alert("opcion mal Ingresada");
      menuPrincipal();
  }
}
// Se genera menu Productos obtenidos del array de Productos
function menuDeProductos() {
  let mostrarProductos = "";
  let x = 1;
  productos.forEach((i) => {
    mostrarProductos +=
      i.id +
      " - " +
      i.descripcion +
      " Prenda: " +
      i.Prenda +
      " $ " +
      i.precio +
      "Cantidad :" +
      i.cantidad +
      "\n";
    x++;
  });
  let menuProductos =
    mostrarProductos + x + " - Finalizar Carrito \n" + (x + 1) + " - Volver";
  validoMenuProductos(menuProductos, x);
}

// Se valida menu de Productos
function validoMenuProductos(menuProductos, x) {
  validarAlerta(menuProductos);
  if (respuesta == x) {
    if (carrito.length == 0) {
      alert("carrito Vacio");
      menuDeProductos();
    } else {
      mostrandoCarrito();
    }
  } else if (respuesta == x + 1) {
    alert("Eliminando datos del Carrito");
    // falta vaciar array en el caso que el cliente salga antes
    console.log(carrito);
    menuPrincipal();
  } else if (respuesta > 0 && respuesta < productos.length + 1) {
    buscoProductos();
  } else {
    alert("Opcion mal ingresada");
    menuDeProductos();
  }
}
// Se busca Producto elegido por el usuario en el caso que si este se genera un mapa solo de las propiedades
// necesarias.
function buscoProductos() {
  var cantidad = 1;
  productos.map(function (producto) {
    if (producto.id == respuesta) {
      nuevoObjeto = {
        id: producto.id,
        descripcion: producto.descripcion,
        Prenda: producto.Prenda,
        precio: producto.precio,
        cantidad: cantidad,
      };
      return nuevoObjeto;
    }
  });
  agregarProductos(nuevoObjeto);
}

// se verifica si producto ya existe en el carrito :1- si esta modifica cantidad. 2- si no esta lo agrega
function agregarProductos(objeto) {
  const resultado = carrito.some((elemento) => elemento.id == respuesta);
  if (resultado == false) {
    const nuevoCarrito = new productoCarrito(nuevoObjeto);
    carrito.push(nuevoCarrito);
    alert("agregando productos");
  } else {
    carrito.filter((elemento) => {
      if (elemento.id == respuesta) {
        elemento.cantidad++;
      }
    });
    alert("agregando productos");
  }
  menuDeProductos();
}
// se utiliza funcion superior que muestra todos los elementos guardados en el carrito
function mostrandoCarrito() {
  let mostrarCarrito = "";
  let subTotal = 0;
  let Total = 0;
  carrito.forEach((i) => {
    subTotal = i.precio * i.cantidad;
    Total += subTotal;
    mostrarCarrito +=
      i.descripcion +
      " Prenda: " +
      i.Prenda +
      " $ " +
      i.precio +
      " Cantidad : " +
      i.cantidad +
      " Sub Total " +
      subTotal +
      "\n";
  });
  alert(mostrarCarrito + "\n Total a Pagar $ " + Total);
  salir(true);
}

// Se saluda segun el parametro enviado flase/true
function salir(saludo) {
  if (saludo == false) {
    alert("Gracias Por visitar nuestro sitio web");
    return;
  } else {
    alert("Gracias Por su Compra lo Esperamos Pronto");
    return;
  }
}

// Inicio
validarAlerta(mensaje);
alert("Bienvenido/a " + respuesta + " a nuestra Web ");
menuPrincipal();
