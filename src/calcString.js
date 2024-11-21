// Función para procesar delimitadores personalizados
function obtenerDelimitadores(string) {
    const delimitadorPorDefecto = /[,|-]/;

    if (string.startsWith("//[")) {
        const match = string.match(/\/\/(\[.+\])/);
        if (match) {
            const delimitadores = match[1].slice(1, -1).split("][");
            const delimitadoresRegex = delimitadores
                .map(delim => delim.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"))
                .join("|");
            return new RegExp(`${delimitadoresRegex}|,|-`);
        }
    }

    return delimitadorPorDefecto; 
}

function calcular(string) {
    const input = string.trim();
    if (!input) {
        return "0";
    }

    const delimitadores = obtenerDelimitadores(string);

    if (string.startsWith("//[")) {
        string = string.replace(/\/\/(\[.+\])/, "");
    }

    const numeros = string.split(delimitadores)
        .map(Number)
        .filter(num => num <= 1000);

    return numeros.reduce((sum, num) => sum + num, 0).toString();
}

export default calcular;
