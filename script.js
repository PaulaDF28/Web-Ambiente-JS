var listaArboles = JSON.parse(localStorage.getItem('lista'));
var listaCompra = [];

const mostrarArboles = () => {
    document.getElementById("arboles").innerHTML = listaArboles.join('<br/>');
}

const agregarArbol = () => {
    let numeroArbol = parseInt(prompt("Ingrese el numero del arbol nativo"));
    for (let i = 0; i <= listaArboles.length; i++) {
        if (i === (numeroArbol - 1)) {
            listaCompra.push(listaArboles[i]);
        }
    }
    document.getElementById("compraArboles").innerHTML = listaCompra.join('<br/>');
}


const eliminarArbol = () => {
    let index;
    let numeroArbol = parseInt(prompt("Ingrese el numero del arbol nativo a eliminar"));
    for (let i = 0; i <= listaArboles.length; i++) {
        if (i === (numeroArbol - 1)) {
            index = listaArboles.indexOf(listaArboles[numeroArbol - 1])
            if (index != -1) {
                listaCompra.splice(index, 1)
            }
        }
    }
    document.getElementById("compraArboles").innerHTML = listaCompra.join('<br/>');
}

const calcularTotal = () => {
    let cantidad = document.getElementById("cantidad");
    let tipoArbol = document.getElementById("tipoDeArbol");
    let resultado = 0;
    if (tipoArbol.value == "A") {
        resultado = resultado + 400;
    }
    if (tipoArbol.value == "B") {
        resultado = resultado + 700;
    }
    resultado = resultado * parseInt(cantidad.value);

    swal({
        
        icon: "success",
        text: "Total $" + resultado,
        title: "Abonas y retiras en cualquiera de nuestras sedes!",
        buttons: ["Cancelar", "Confirmar!"],
      });
}
