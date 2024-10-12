function inverteString(string){
    let inv = '';
    for (let i = string.length - 1; i >= 0 ; i--){
        inv = inv + string[i];
    }
    console.log(inv);
}


inverteString('123456789');