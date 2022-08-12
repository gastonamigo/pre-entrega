class Producto {
    constructor (nombre, precio){
        this.nombre  = nombre;
        this.precio  = precio;
        
    }

    sumarIva() {
        this.precio *= 1.21;
    }

}


const lista = []

lista.push(new Producto("ender 3 pro", "45000"));
lista.push(new Producto("ender 2 pro", "35000"));
lista.push(new Producto("ender 5 pro","110000"));

let cantidad;

console.log(lista);

const products = lista.map((producto) => producto.nombre);
console.log(products);

for(let i = 0; i < products.length; i++) {
    console.log(products[i]);
}

function findPrinter(name) {
    return name.nombre === compra;
  }
let compra=0;
let subTotal=0;
const carro=[];
while (compra != "NO") {

    compra = prompt ("Elija los productos que desea comprar: \nender 3 pro \nender 2 pro \nender 5 pro");
    
  
        
        let printer = lista.find(compra => findPrinter(compra));
        
        console.log(printer);
        
        if(products.includes(compra)) {
                        cantidad = prompt ("Unidades");
                        printer.sumarIva();
                        alert("Ud va a comprar " + cantidad + " " + printer.nombre + " y el precio es de $"  + printer.precio*cantidad);
                    } else {
                        compra = prompt ("ingrese un producto de la lista");
                        continue
                   }

}


