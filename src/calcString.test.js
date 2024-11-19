import calcular from "./calcString.js"; 

test('Devuelve 0 cuando no hay nada ingresado', () =>{
    expect(calcular(" ")).toBe("0")
});

test('Devuelve el mismo valor de la cadena', () =>{
    expect(calcular("4")).toBe("4")
}); 