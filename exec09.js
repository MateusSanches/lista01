import { gerarObjetos } from "./exec08.js";



function calcMediaIdade(objetos){
    let sum = 0;
    for( let o of objetos){
        sum = sum + o.idade;
    }
    return sum / objetos.length;
}

let objetos = gerarObjetos(10);
console.log(objetos);
let media = calcMediaIdade(objetos);
console.log(media);