function calculadora(n1,n2,ope){

    if (ope === '+'){
        return n1 + n2;
    } else if (ope === '-') {
        return n1 - n2;
    } else if (ope === '/'){
        if (n2 === 0){
            return 'Divisão por 0 não permitida'
        } else {
            return n1 / n2;
        }
    } else if (ope === '*'){
        return n1 * n2;
    }
}


console.log(calculadora(4,2,'/'))