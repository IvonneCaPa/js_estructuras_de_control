let lista_alumnos = ["Sara", "Ferran", "José", "Pau", "Francisco", "Marta", "José María"]

let texto = "Hola"

for (let i = 0; i < texto.length; i++) {
    console.log(texto[i]);
}

for (let i=0; i<lista_alumnos.length; i++){
    console.log(lista_alumnos[i]);
}

/**descubrir quien tiene el mensaje mas largo
 * el mensaje debe ser:
 * "XXXX tiene el nombre más largo"
 */
let posicion = 0
let maximo = 1
for (let i = 0; i < lista_alumnos.length; i++){

    if (lista_alumnos[i].length >= maximo){
        maximo = lista_alumnos[i].length
        posicion = i
    } 
}

console.log(
            `El alumno ${lista_alumnos[posicion]} tiene el nombre mas largo
            con ${maximo} letras`);



// WHILE
/**Mientras algo se cumpla, se ejecuta una condicion */
let inicio = 1
while (inicio <= 10) {
    console.log(`10 x ${inicio} = ${10 * inicio}`);
    inicio++        //normalmente las instrucciones que incrementan o decrementan se ponen al final del codigo
}

inicio = 10
while (inicio >= 0) {
    console.log(`10 x ${inicio} = ${10 * inicio}`);
    inicio--        //normalmente las instrucciones que incrementan o decrementan se ponen al final del codigo
}

//for infinito
// for(let i = 0; i < 4; i++){
//     console.log(`Paso ${i}`);
//     i--
// }

/**DO while, es como el while pero lo que hay dentro del Do se ejecuta al menos
 * una vez
 * 
 */

// let passwordReal = "1234"
// let passwordUsuario = ""

// do{
//     passwordUsuario = prompt("Introducce tu contraseña:")
// } while (passwordReal != passwordUsuario)


console.log(3 == "3");
console.log(3 === "3");

