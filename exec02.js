function concatMensagem(strings){
    n = strings.length;
    let msg = '';
    for (let i = 0; i < n; i++){
        msg = msg + ' ' + strings[i];
    }

    return msg
}

let msgs = ['ola', 'eu', 'sou', 'uma', 'mensagem', '!'];
console.log(concatMensagem(msgs))