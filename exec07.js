let map = {
    '[' : ']',
    '{' : '}',
    '(' : ')'
}

function verificaComposicao(string){
    if (string.length % 2 !== 0) return false;
    
    let j = string.length - 1;
    for (i = 0; i < string.length / 2 ; i++){
        if(map[string[i]] !== string[j]) return false;
        j--;   
    }

    return true;
}


console.log(verificaComposicao('[{[()]}]'));