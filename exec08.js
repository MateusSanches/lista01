export function gerarObjetos(quantidade) {
    const nomes = ['Mateus', 'Joao', 'Pedro', 'Lucas', 'Carlos', 'Andressa', 'Alessandra', 'Lumi', 'Serj Tankian', 'Fred Mercury'];
    let objetos = [];

    for (let i = 1; i <= quantidade; i++) {
        let nome = nomes[Math.floor(Math.random() * nomes.length)];
        let idade = Math.floor(Math.random() * (90 - 18 + 1)) + 18;

        objetos.push({
            id: i,
            nome: nome,
            idade: idade
        });
    }

    return objetos;
}

// console.log(gerarObjetos(5));