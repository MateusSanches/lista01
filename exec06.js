function contVogais(palavra){
    let cont = 0
    for(let i = 0; i < palavra.length - 1; i++){
        if (palavra[i] === 'a' || palavra[i] === 'e' || palavra[i] === 'i' || palavra[i] === 'o' || palavra[i] === 'u') cont ++;
    }
    console.log(cont)
}

contVogais('eu sou uma frase com 12 vogais');
