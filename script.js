const content = {
    title: "Funciones del Area",
    paragraph: "Arbitrar los medios y recursos necesarios disponibles para garantizar la preservación y cuidado del ambiente, desarrollando,coordinando y ejecutando políticas ambientales de acuerdo a lo indicado en las ordenanzas, haciendo cumplir las normativas municipales, provinciales y nacionales,tendientes a prevenir el daño ambiental, a proteger el ambiente y a contribuir al desarrollo sostenible."
}
document.getElementById("titulo").innerHTML = content.title;
document.getElementById("parrafo").innerHTML = content.paragraph;

var listaArboles = [];

async function mostrarArboles() {
    const res = await fetch('data.json')
        .then((response) => response.json())
        .then((data) => data);
    listaArboles = res;

    let nombreArboles = '';
    res.forEach((item, index) => {
        nombreArboles += `${index + 1}.${item.nombre}<br/>`
    });
    document.getElementById("arboles").innerHTML = nombreArboles;
}

const agregarArbol = () => {
    if (listaArboles.length > 0) {
        let numeroArbol = parseInt(prompt("Ingrese el numero del arbol nativo"));
        var lista = JSON.parse(localStorage.getItem('lista')) ?? [];
        for (let i = 0; i <= listaArboles.length; i++) {
            if (i === (numeroArbol - 1)) {
                lista.push(listaArboles[i].nombre)
            }
        }
        localStorage.setItem("lista", JSON.stringify(lista))
        var storage = JSON.parse(localStorage.getItem('lista'));
        document.getElementById("compraArboles").innerHTML = storage.join('<br/>');
    }
    else {
        swal({
            icon: "error",
            text: "Primero debes clickear en Mostrar!",
            buttons: ["Volver"],
        });
    }

}

const eliminarArbol = () => {
    var lista = JSON.parse(localStorage.getItem('lista')) ?? [];
    if (listaArboles.length > 0 && lista.length > 0) {
        let index;
        let numeroArbol = parseInt(prompt("Ingrese el numero del arbol nativo a eliminar"));
        for (let i = 0; i <= listaArboles.length; i++) {
            if (i === (numeroArbol - 1)) {
                index = listaArboles.indexOf(listaArboles[numeroArbol - 1])
                if (index != -1) {
                    lista.splice(index, 1)
                }
            }
        }
        localStorage.setItem("lista", JSON.stringify(lista))
        var storage = JSON.parse(localStorage.getItem('lista'));
        document.getElementById("compraArboles").innerHTML = storage.join('<br/>');
    }
    else {
        swal({
            icon: "error",
            text: "Primero debes clickear en Mostrar o agregar elementos!",
            buttons: ["Volver"],
        });
    }
}


const calcularTotal = () => {
    let cantidad = document.getElementById("cantidad");
    let tipoArbol = document.getElementById("tipoDeArbol");
    let resultado = 0;

    if (parseInt(cantidad.value) >= 1 && (tipoArbol.value == "A" || tipoArbol.value == "B")) {
        let precio = tipoArbol.value == "A" ? 400 : 700;
        resultado = parseInt(cantidad.value) * precio

        swal({
            icon: "success",
            text: "Total $" + resultado,
            title: "Abonas y retiras en cualquiera de nuestras sedes!",
            buttons: ["Cancelar", "Confirmar!"],
        });
    }
    else {
        swal({
            icon: "error",
            text: "Ingresa datos correctos!",
            buttons: ["Volver"],
        });
    }

}
