import calcular from "./calcString.js"; 

test('Devuelve 0 cuando no hay nada ingresado', () =>{
    expect(calcular(" ")).toBe("0")
});

test('Devuelve el mismo valor de la cadena', () =>{
    expect(calcular("4")).toBe("4")
}); 

test('Devuelve la suma de 2 numeros separados por comas', () =>{
    expect(calcular('1,4')).toBe("5")
}); 

test('Devuelve la suma de 3 numeros separados por comas', () =>{
    expect(calcular('1,4,5')).toBe("10")
}); 

test('Devuelve la suma de 2 numeros separados por guiones', () =>{
    expect(calcular('1-4')).toBe("5")
}); 

test('Devuelve la suma de 3 numeros separados por guiones', () =>{
    expect(calcular('1-4-5')).toBe("10")
}); 

test('Devuelve la suma de numeros separados por guiones y comas', () =>{
    expect(calcular('1-4,5')).toBe("10")
}); 

test('Devuelve la suma de numeros separados por delimitadores personalizados', () =>{
    expect(calcular('//[/]1/4/5')).toBe("10")
}); 

test('Devuelve la suma de numeros con limitadores e ignora a los numeros mayores a 1000', () =>{
    expect(calcular('//[/] 1/4000/5')).toBe("6")
}); 

test('Devuelve la suma usando mas de un delimitador personalizado', () => {
    expect(calcular('//[*][%]1*2%3,7-9')).toBe("22");
});