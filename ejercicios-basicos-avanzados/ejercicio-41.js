/* Crea una función llamada rollDice() que reciba como parámetro el numero de caras que queramos que tenga el dado que deberá simular el codigo dentro de la función.

Que la función use el parametro para simular una tirada de dado y retornar el resultado.

Si no se te ocurre como hacer un numero aleatorio no te preocupes. Busca información sobre la función de JavaScript Math.random() */

console.log("Dado D20 de Magic");

function rollDice() {
    return Math.floor(Math.random() * 20) + 1;
}

console.log("Tirada 1: ", rollDice());

console.log("Tirada 2: ", rollDice());

console.log("Tirada 3: ", rollDice());

console.log("Tirada 4: ", rollDice());

console.log("Tirada 5: ", rollDice());