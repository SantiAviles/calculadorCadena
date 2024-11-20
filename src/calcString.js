
function calcular (string) {
    if(string ==" "){
        return "0"
    }
    let delimitadoresXDefecto = /[,|-]/

    if(string.startsWith("//[")){
        const match = string.match(/\/\/\[(.+?)\]/)
        if(match){
            const delimitadorPersonalizado = match[1]
            delimitadoresXDefecto = new RegExp(`[${delimitadorPersonalizado},|-]`);
            string = string.replace(match[0], "");
        }
    }
    const numeros = string.split(delimitadoresXDefecto).map(Number).filter(num => num <= 1000)
    const result = numeros.reduce((sum, num) => sum + num, 0);
    return result.toString();
}

export default calcular;