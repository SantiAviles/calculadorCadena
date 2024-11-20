
function calcular (string) {
    if(string ==" "){
        return "0"
    }
    let delimitadores = /[,|-]/

    if(string.startsWith("//[")){
        const match = string.match(/\/\/(\[.+\])/);
        if(match){
            const delimitadorPersonalizado = match[1].slice(1,-1).split("][")
            const delimitadoresRegex = delimitadorPersonalizado.map(delim => 
                delim.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")
            ).join("|");
            delimitadores = new RegExp(`${delimitadoresRegex}|,|-`); 
            string = string.replace(match[0], "");
        }
    }
    const numeros = string.split(delimitadores).map(Number).filter(num => num <= 1000)
    const result = numeros.reduce((sum, num) => sum + num, 0);
    return result.toString();
}

export default calcular;