
function calcular (string) {
    if(string ==" "){
        return "0"
    }else{
        const numeros = string.split(/[,]/).map(Number)
        const result = numeros.reduce((sum, num) => sum + num, 0);
        return result.toString();
    }
}

export default calcular;