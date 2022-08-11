class Producto {
    constructor (nombre, precio){
        this.nombre  = nombre;
        this.precio  = precio;
        
    }

    sumarIva() {
        this.precioUss *= 1.21;
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

console.log(`Productos disponibles`);

for(i = 0; i <= products.length - 1; i++) {
    console.log(products[i]);
}

for(const producto of lista) {

    let compra = prompt ("Elija los productos que desea comprar: \nender 3 pro \nender 2 pro \nender 5 pro");

    while(compra != 'esc') { 

        if(products.includes(compra)) {
            cantidad = prompt ("Unidades");
            producto.sumarIva();
            alert("Ud va a comprar " + cantidad + " " + producto.nombre + " y el precio es de $"  + producto.precio);
        } else {
            compra = prompt ("ingrese un producto de la lista");
            continue
       }

       compra = prompt ("Elija los productos que desea comprar: \nender 3 pro \nender 2 pro \nender 5 pro");

    }
    
}

