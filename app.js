/* Función sumar */
const sumar = (a, b) => a+b;
console.log("Suma: "+sumar(5, 10))

/* Función restar */
const restar = (c, d) => c-d
console.log("Resta: "+restar(10, 5))

/* Como yo lo haría sin conocer la programación funcional */
const multiplicar = (e, f) => {
    let multi = 0;
    for(let i = f; i<=f; i++)
    {
        multi += e + e;
    }
    return multi
}
console.log("Multiplicación: "+multiplicar(2, 2))

/* Con lo aprendido hoy en la mentoria e investigaciones sencillas,
tenemos una función range que suple el bucle for al convertir (f) en un array,
 luego con el reduce sumamos e + e, el número de veces que se recorre el arreglo (f) */
const multiplicar2 = (e, f) => {
    return range(f).reduce((suma) => suma += e, 0)
}
console.log("Multiplicación 2: "+multiplicar2(8, 6))

/* Divisón sin conocer la programación funcional, el resultado es entero,
si sobre pasa un decimal lo acerca al número siguiente*/
const division = (h, i) => {
    let divi = 0, j = h
    while (j > 0){
        j -= i;
        divi++;
    }
    if(j != 0){
        res = j + i;
    }else{
        res = 0
    }
    console.log("Resto: "+res)
    return divi
}
console.log("Division: "+division(95, 3 ))

/* Divisón funcional, usando la función multiplicar ya creada e igual la de sumar */

const division2 = (h, i) => {
    return range(h).reduce((acum, num) => multiplicar2(num, i) <= h ? sumar(acum, 1) : acum, -1)
}
console.log("Division 2: "+division2(95, 3))

//Función de rango
function range(size, startAt = 0) {
    return [...Array(size).keys()].map(i => i + startAt);
}


