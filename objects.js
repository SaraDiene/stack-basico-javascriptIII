// Calcula o perímetro e a área de um retângulo
function calcularRetangulo(retangulo) {
    const perimetro = 2 * (retangulo.largura + retangulo.altura);
    const area = retangulo.largura * retangulo.altura;
    return { perimetro, area };


}   

// Verifica se uma pessoa é maior de idade
function ehAdulto(pessoa){
    if (pessoa.idade >= 18){
        return true
    }
    else{
        return false
    }
}

// Concatena os valores de um objeto em uma string
function concatenaValores(obj) {
    // Sua implementação aqui
    return `${obj.nome} ${obj.idade} ${obj.cidade}`
}

module.exports = { calcularRetangulo, ehAdulto, concatenaValores };
