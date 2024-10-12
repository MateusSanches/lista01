import { gerarObjetos } from "./exec08.js";

function order(lista, atributo) {
    return lista.sort((a, b) => {
        if (typeof a[atributo] === 'string') {
            return a[atributo].localeCompare(b[atributo]);
        } else {
            return a[atributo] - b[atributo];
        }
    });
}


let objetos = gerarObjetos(5);

let ordernado = order(objetos, 'idade');
console.log('Ordenado:', ordernado);

// git remote add origin https://github.com/MateusSanches/lista01.git
// git branch -M main
// git push -u origin main