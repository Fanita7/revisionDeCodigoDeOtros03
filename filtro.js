// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

//usar ById
const li = document.getElementById("lista-de-productos")
const input = document.querySelector('.input');
const boton = document.querySelector('button');

//cont en lugar de var 
// li en lugar de div para hacer la lista

//Mostrar productos en la pagina 
function productosPantalla (arregloProductos) {

  li.innerHTML = "";

  for (let i = 0; i < productos.length; i++) {
    
    const producto = arregloProductos[i];

    //Hacer una elemto li para cada producto

    const item = document.createElement("li");
    item.classList.add("producto");

       //titulo del producto 
   
   const titulo = document.createElement("p");
    titulo.textContent = producto.nombre;
      
    //crear imagen del prodcuto 

    const imagen = document.createElement("img");
    imagen.src = producto.img;

    //Agregar titulo e imagen al elemento 
    item.appendChild(titulo);
    item.appendChild(imagen);

    //Agregar producto a la lista

    li.appendChild(item);
  }
}

//Funcion para filtrar los productos 

function filtrarProductos (texto){

   const productosFiltrados = [];
   const textoMinusculas = texto.toLowerCase(); //para que no haya problea con las minusculas 

   for (let i = 0; i < productos.length; i++) {
    const producto = productos[i];
  
  if (producto.tipo.toLowerCase().indexOf(textoMinusculas) !== -1 || producto.color.toLowerCase().indexOf(textoMinusculas) !== -1) {
      productosFiltrados.push(producto);
      }
     }
    return productosFiltrados;
  }
  
  // Agregar evento al botón de filtro
boton.addEventListener("click", () => {
  const texto = input.value.trim(); //texto del input
  const productosFiltrados = filtrarProductos(texto); 

  productosPantalla(productosFiltrados); // Mostrar productos filtrados
});

productosPantalla(productos);

