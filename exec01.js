function calcFat(n){
    cont = 1;   
    for (n;n >= 0; n--){
        if (n==0) return cont;
        cont = cont * n;
    }
}


console.log(calcFat(5));

