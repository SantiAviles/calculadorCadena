import calcular from "./calcString.js"; 

test('Devuelve 0 cuando no hay nada ingresado', () =>{
    expect(calcular(" ")).toBe("0")
});

test('Devuelve el mismo valor de la cadena', () =>{
    expect(calcular("4")).toBe("4")
}); 

test('Devuelve la suma de dos numeros separados por comas', () =>{
    expect(calcular('1,4')).toBe("5")
}); 

test('Devuelve la suma de 3 numeros separados por comas', () =>{
    expect(calcular('1,4,5')).toBe("10")
}); 